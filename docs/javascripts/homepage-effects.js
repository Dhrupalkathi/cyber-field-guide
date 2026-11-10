(() => {
  "use strict";

  const init = () => {
    const atmosphere = document.querySelector(".cins-homepage-atmosphere");
    if (!atmosphere) return;

    const svg = atmosphere.querySelector("svg");
    const nodes = Array.from(atmosphere.querySelectorAll(".cins-atmo-node"));
    const motionToggle = document.querySelector(".cins-motion-toggle");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    // One animation-frame queue handles scroll, resize and pointer work together.
    let frameId = 0;
    let needsScroll = true;
    let needsMeasure = true;
    let pointerDirty = false;
    let pointerActive = false;
    let pointerX = 0;
    let pointerY = 0;
    let scrollOffset = 0;
    let atmosphereRect = null;
    let nodeCenters = [];

    const motionIsPaused = () =>
      reducedMotion.matches || Boolean(motionToggle && motionToggle.checked);

    const resetNodeResponse = () => {
      nodes.forEach((node) => {
        node.style.setProperty("--cins-node-glow", "0px");
        node.style.setProperty("--cins-node-brightness", "1");
      });
      nodeCenters.forEach((entry) => {
        entry.lastInfluence = 0;
      });
    };

    const measureScene = () => {
      atmosphereRect = atmosphere.getBoundingClientRect();
      resetNodeResponse();

      // Store unshifted centres once. Scroll changes are applied mathematically,
      // avoiding repeated getBoundingClientRect() calls while the pointer moves.
      nodeCenters = nodes.map((node) => {
        const rect = node.getBoundingClientRect();
        return {
          node,
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2 - scrollOffset,
          lastInfluence: 0
        };
      });

      needsMeasure = false;
    };

    const updateScrollPosition = () => {
      // A small, continuous parallax shift. Scrolling up reverses it naturally.
      // No zoom, scroll phases, or changes to the content's scroll position.
      const nextOffset = -Math.min(window.scrollY * 0.075, 320);

      if (Math.abs(nextOffset - scrollOffset) >= 0.2) {
        scrollOffset = nextOffset;
        atmosphere.style.setProperty("--cins-scroll-y", scrollOffset.toFixed(1) + "px");
      }

      needsScroll = false;
    };

    const updatePointerResponse = () => {
      if (!atmosphereRect) return;

      const xPercent = Math.min(
        100,
        Math.max(0, ((pointerX - atmosphereRect.left) / Math.max(1, atmosphereRect.width)) * 100)
      );
      const yPercent = Math.min(
        100,
        Math.max(0, ((pointerY - atmosphereRect.top) / Math.max(1, atmosphereRect.height)) * 100)
      );

      atmosphere.style.setProperty("--cins-pointer-x", xPercent.toFixed(1) + "%");
      atmosphere.style.setProperty("--cins-pointer-y", yPercent.toFixed(1) + "%");

      const radius = 245;
      nodeCenters.forEach((entry) => {
        const distance = Math.hypot(
          pointerX - entry.x,
          pointerY - (entry.y + scrollOffset)
        );
        const influence = Math.max(0, 1 - distance / radius);

        // Avoid style writes when a node's proximity has barely changed.
        if (Math.abs(influence - entry.lastInfluence) < 0.015) return;
        entry.lastInfluence = influence;

        entry.node.style.setProperty("--cins-node-glow", (influence * 15).toFixed(1) + "px");
        entry.node.style.setProperty("--cins-node-brightness", (1 + influence * 0.72).toFixed(2));
      });
    };

    const renderFrame = () => {
      frameId = 0;
      if (motionIsPaused()) return;

      if (needsScroll) updateScrollPosition();
      if (needsMeasure) measureScene();

      if (pointerDirty && finePointer.matches && pointerActive) {
        updatePointerResponse();
      }
      pointerDirty = false;
    };

    const scheduleFrame = () => {
      if (!frameId && !motionIsPaused()) {
        frameId = window.requestAnimationFrame(renderFrame);
      }
    };

    const onScroll = () => {
      needsScroll = true;
      if (pointerActive) pointerDirty = true;
      scheduleFrame();
    };

    const onResize = () => {
      needsScroll = true;
      needsMeasure = true;
      if (pointerActive) pointerDirty = true;
      scheduleFrame();
    };

    const onPointerMove = (event) => {
      if (motionIsPaused()) return;
      pointerX = event.clientX;
      pointerY = event.clientY;
      pointerActive = true;
      pointerDirty = true;
      scheduleFrame();
    };

    const clearPointerResponse = () => {
      pointerActive = false;
      pointerDirty = false;
      atmosphere.style.setProperty("--cins-pointer-x", "50%");
      atmosphere.style.setProperty("--cins-pointer-y", "50%");
      resetNodeResponse();
    };

    const syncPointerCapability = () => {
      if (finePointer.matches) {
        window.addEventListener("pointermove", onPointerMove, { passive: true });
        window.addEventListener("pointerleave", clearPointerResponse, { passive: true });
      } else {
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerleave", clearPointerResponse);
        clearPointerResponse();
      }
    };

    const syncMotionState = () => {
      const paused = motionIsPaused();
      atmosphere.classList.toggle("is-motion-paused", paused);

      // SVG packet paths use SMIL; pause them alongside the CSS animations.
      if (svg && typeof svg.pauseAnimations === "function") {
        if (paused) {
          svg.pauseAnimations();
        } else if (typeof svg.unpauseAnimations === "function") {
          svg.unpauseAnimations();
        }
      }

      if (paused) {
        clearPointerResponse();
      } else {
        needsScroll = true;
        needsMeasure = true;
        scheduleFrame();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("blur", clearPointerResponse, { passive: true });

    if (motionToggle) {
      motionToggle.addEventListener("change", syncMotionState);
    }

    reducedMotion.addEventListener("change", syncMotionState);
    finePointer.addEventListener("change", () => {
      syncPointerCapability();
      needsMeasure = true;
      scheduleFrame();
    });

    syncPointerCapability();
    atmosphere.style.setProperty("--cins-pointer-x", "50%");
    atmosphere.style.setProperty("--cins-pointer-y", "50%");
    scheduleFrame();
    syncMotionState();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();