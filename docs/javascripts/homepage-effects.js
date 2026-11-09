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

    let framePending = false;
    let pointerFramePending = false;
    let pointerX = 0;
    let pointerY = 0;
    let nodeRects = [];
    let lastProgress = -1;

    const motionIsPaused = () =>
      Boolean(reducedMotion.matches || (motionToggle && motionToggle.checked));

    const resetNodeResponse = () => {
      nodes.forEach((node) => {
        node.style.setProperty("--cins-node-glow", "0px");
        node.style.setProperty("--cins-node-brightness", "1");
      });
    };

    const syncMotionState = () => {
      const paused = motionIsPaused();
      atmosphere.classList.toggle("is-motion-paused", paused);

      if (svg && typeof svg.pauseAnimations === "function") {
        if (paused) {
          svg.pauseAnimations();
        } else if (typeof svg.unpauseAnimations === "function") {
          svg.unpauseAnimations();
        }
      }

      if (paused) {
        resetNodeResponse();
      } else {
        refreshScrollState();
      }
    };

    const setScrollState = () => {
      framePending = false;
      if (motionIsPaused()) return;

      const root = document.documentElement;
      const maxScroll = Math.max(1, root.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));

      if (Math.abs(progress - lastProgress) < 0.0015) return;
      lastProgress = progress;

      const dark = document.body.dataset.mdColorScheme === "slate";
      const shift = Math.round(progress * (window.innerWidth < 700 ? 18 : 42));
      const scale = 1 + progress * 0.055;
      const glow = (dark ? 0.22 : 0.075) + progress * (dark ? 0.16 : 0.11);
      const teal = (dark ? 0.17 : 0.055) + progress * (dark ? 0.13 : 0.085);
      const opacity = (dark ? 0.88 : 0.78) + progress * 0.12;

      atmosphere.style.setProperty("--cins-scroll-progress", progress.toFixed(4));
      atmosphere.style.setProperty("--cins-scroll-shift-y", (-shift) + "px");
      atmosphere.style.setProperty("--cins-scroll-scale", scale.toFixed(4));
      atmosphere.style.setProperty("--cins-scroll-glow", glow.toFixed(3));
      atmosphere.style.setProperty("--cins-scroll-teal", teal.toFixed(3));
      atmosphere.style.setProperty("--cins-scroll-opacity", opacity.toFixed(3));

      const phase = progress < 0.22
        ? "arrival"
        : progress < 0.62
          ? "exploration"
          : "deep-dive";

      if (atmosphere.dataset.scrollPhase !== phase) {
        atmosphere.dataset.scrollPhase = phase;
      }
    };

    function refreshScrollState() {
      if (framePending || motionIsPaused()) return;
      framePending = true;
      window.requestAnimationFrame(setScrollState);
    }

    const measureNodes = () => {
      nodeRects = nodes.map((node) => {
        const rect = node.getBoundingClientRect();
        return {
          node,
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        };
      });
    };

    const updatePointerResponse = () => {
      pointerFramePending = false;
      if (motionIsPaused() || !finePointer.matches) return;

      measureNodes();
      const bounds = atmosphere.getBoundingClientRect();
      const xPercent = Math.min(100, Math.max(0, ((pointerX - bounds.left) / Math.max(1, bounds.width)) * 100));
      const yPercent = Math.min(100, Math.max(0, ((pointerY - bounds.top) / Math.max(1, bounds.height)) * 100));

      atmosphere.style.setProperty("--cins-pointer-x", xPercent.toFixed(1) + "%");
      atmosphere.style.setProperty("--cins-pointer-y", yPercent.toFixed(1) + "%");

      const radius = 245;
      nodeRects.forEach(({ node, x, y }) => {
        const distance = Math.hypot(pointerX - x, pointerY - y);
        const influence = Math.max(0, 1 - distance / radius);
        node.style.setProperty("--cins-node-glow", (influence * 15).toFixed(1) + "px");
        node.style.setProperty("--cins-node-brightness", (1 + influence * 0.72).toFixed(2));
      });
    };

    const onPointerMove = (event) => {
      if (motionIsPaused()) return;
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (!pointerFramePending) {
        pointerFramePending = true;
        window.requestAnimationFrame(updatePointerResponse);
      }
    };

    const clearPointerResponse = () => {
      atmosphere.style.setProperty("--cins-pointer-x", "50%");
      atmosphere.style.setProperty("--cins-pointer-y", "50%");
      resetNodeResponse();
    };

    window.addEventListener("scroll", refreshScrollState, { passive: true });
    window.addEventListener("resize", () => {
      measureNodes();
      refreshScrollState();
    }, { passive: true });

    let pointerListenersAttached = false;
    const syncPointerCapability = () => {
      if (finePointer.matches && !pointerListenersAttached) {
        window.addEventListener("pointermove", onPointerMove, { passive: true });
        window.addEventListener("pointerleave", clearPointerResponse, { passive: true });
        pointerListenersAttached = true;
      } else if (!finePointer.matches && pointerListenersAttached) {
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerleave", clearPointerResponse);
        pointerListenersAttached = false;
      }
    };

    syncPointerCapability();

    if (motionToggle) {
      motionToggle.addEventListener("change", syncMotionState);
    }

    reducedMotion.addEventListener("change", syncMotionState);
    finePointer.addEventListener("change", () => {
      syncPointerCapability();
      measureNodes();
      clearPointerResponse();
    });

    const themeObserver = new MutationObserver(() => {
      lastProgress = -1;
      refreshScrollState();
    });
    themeObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-md-color-scheme"]
    });

    measureNodes();
    atmosphere.style.setProperty("--cins-pointer-x", "50%");
    atmosphere.style.setProperty("--cins-pointer-y", "50%");
    atmosphere.dataset.scrollPhase = "arrival";
    syncMotionState();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();