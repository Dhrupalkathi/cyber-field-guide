/*
 * CINS immersive hero — Three.js
 * Pinned runtime: three@0.187.0 (jsDelivr CDN)
 *
 * The 3D scene is decorative. All navigation and learning content remains
 * ordinary HTML/Markdown, so the site is usable without WebGL.
 */

const THREE_URL = "https://cdn.jsdelivr.net/npm/three@0.187.0/build/three.module.js";

let activeScene = null;
let revealObserver = null;
let initializedPage = null;

function setupReveals() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!("IntersectionObserver" in window)) return;

  revealObserver?.disconnect();

  const targets = document.querySelectorAll(
    ".md-typeset h2, .md-typeset .grid.cards > ul > li, .cins-hero-note, .cins-footer-note"
  );

  document.body.classList.add("cins-motion-ready");

  targets.forEach((element, index) => {
    element.classList.add("cins-reveal");
    element.style.setProperty("--cins-reveal-delay", `${(index % 4) * 75}ms`);
  });

  revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("cins-revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -32px 0px" });

  targets.forEach((element) => revealObserver.observe(element));
}

function disposeActiveScene() {
  if (!activeScene) return;

  activeScene.renderer.setAnimationLoop(null);
  activeScene.resizeObserver?.disconnect();
  activeScene.intersectionObserver?.disconnect();
  activeScene.stage.removeEventListener("pointermove", activeScene.onPointerMove);
  document.removeEventListener("visibilitychange", activeScene.onVisibilityChange);

  activeScene.scene.traverse((object) => {
    object.geometry?.dispose?.();
    if (Array.isArray(object.material)) {
      object.material.forEach((material) => material.dispose?.());
    } else {
      object.material?.dispose?.();
    }
  });

  activeScene.renderer.dispose();
  activeScene.renderer.domElement.remove();
  activeScene.stage.classList.remove("cins-3d-ready");
  activeScene.stage.classList.add("cins-3d-fallback");
  activeScene = null;
}

function makeFibonacciSphere(THREE, count, radius) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const inner = new THREE.Color("#8d6b2d");
  const middle = new THREE.Color("#c7a65b");
  const bright = new THREE.Color("#f1dfad");

  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i += 1) {
    const y = 1 - (i / (count - 1)) * 2;
    const ring = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = goldenAngle * i;

    const x = Math.cos(theta) * ring;
    const z = Math.sin(theta) * ring;
    const offset = i * 3;

    positions[offset] = x * radius;
    positions[offset + 1] = y * radius;
    positions[offset + 2] = z * radius;

    const mix = (Math.sin(i * 0.17) + 1) * 0.5;
    const color = inner.clone().lerp(middle, mix).lerp(bright, Math.max(0, (y + 0.2) * 0.28));
    colors[offset] = color.r;
    colors[offset + 1] = color.g;
    colors[offset + 2] = color.b;
  }

  return { positions, colors };
}

function makeStarField(THREE, count) {
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i += 1) {
    const theta = Math.random() * Math.PI * 2;
    const z = Math.random() * 2 - 1;
    const radial = Math.sqrt(1 - z * z);
    const distance = 2.7 + Math.random() * 2.2;
    const offset = i * 3;

    positions[offset] = Math.cos(theta) * radial * distance;
    positions[offset + 1] = z * distance;
    positions[offset + 2] = Math.sin(theta) * radial * distance;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  return new THREE.Points(
    geometry,
    new THREE.PointsMaterial({
      color: "#d9bd7c",
      size: 0.012,
      transparent: true,
      opacity: 0.58,
      depthWrite: false,
      sizeAttenuation: true
    })
  );
}

async function createCinsScene(stage) {
  if (activeScene || !stage?.isConnected) return;

  stage.classList.remove("cins-3d-fallback");
  stage.dataset.cinsSceneMounted = "loading";

  try {
    const THREE = await import(THREE_URL);

    // The page may have changed while the module was loading.
    if (!stage.isConnected || document.querySelector(".cins-emblem-stage") !== stage) {
      delete stage.dataset.cinsSceneMounted;
      return;
    }

    const isSmall = window.matchMedia("(max-width: 700px)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointCount = isSmall ? 1250 : 2600;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 30);
    camera.position.set(0, 0, 5.8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isSmall,
      powerPreference: "high-performance",
      failIfMajorPerformanceCaveat: false
    });

    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isSmall ? 1.25 : 1.65));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.22;
    renderer.domElement.className = "cins-3d-canvas";
    renderer.domElement.setAttribute("aria-hidden", "true");
    stage.prepend(renderer.domElement);

    const world = new THREE.Group();
    scene.add(world);

    // Dense golden particle shell.
    const sphereData = makeFibonacciSphere(THREE, pointCount, 1.22);
    const sphereGeometry = new THREE.BufferGeometry();
    sphereGeometry.setAttribute("position", new THREE.BufferAttribute(sphereData.positions, 3));
    sphereGeometry.setAttribute("color", new THREE.BufferAttribute(sphereData.colors, 3));

    const particleSphere = new THREE.Points(
      sphereGeometry,
      new THREE.PointsMaterial({
        size: isSmall ? 0.014 : 0.016,
        vertexColors: true,
        transparent: true,
        opacity: 0.94,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true
      })
    );
    world.add(particleSphere);

    // Fine network edges across the sphere.
    const links = [];
    const linkStep = isSmall ? 19 : 13;
    for (let i = 0; i < pointCount; i += 1) {
      const j = (i + linkStep) % pointCount;
      const a = i * 3;
      const b = j * 3;
      links.push(
        sphereData.positions[a], sphereData.positions[a + 1], sphereData.positions[a + 2],
        sphereData.positions[b], sphereData.positions[b + 1], sphereData.positions[b + 2]
      );
    }

    const linkGeometry = new THREE.BufferGeometry();
    linkGeometry.setAttribute("position", new THREE.Float32BufferAttribute(links, 3));
    const networkLines = new THREE.LineSegments(
      linkGeometry,
      new THREE.LineBasicMaterial({
        color: "#a98745",
        transparent: true,
        opacity: 0.17,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      })
    );
    world.add(networkLines);

    // Inner low-poly core.
    const core = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(0.72, 2)),
      new THREE.LineBasicMaterial({
        color: "#e2c77f",
        transparent: true,
        opacity: 0.42
      })
    );
    core.rotation.set(0.26, 0.2, 0.1);
    world.add(core);

    // Three orbital paths at different inclinations.
    const orbitalGroup = new THREE.Group();
    world.add(orbitalGroup);

    const orbitSpecs = [
      { radius: 1.62, tube: 0.006, color: "#c7a65b", opacity: 0.68, x: 0.72, y: 0.16, z: 0.2 },
      { radius: 1.78, tube: 0.0045, color: "#e8d39a", opacity: 0.42, x: 1.05, y: 0.62, z: -0.4 },
      { radius: 1.91, tube: 0.004, color: "#a98138", opacity: 0.35, x: 0.28, y: 1.12, z: 0.72 }
    ];

    const orbitMeshes = orbitSpecs.map((spec) => {
      const geometry = new THREE.TorusGeometry(spec.radius, spec.tube, 8, 220);
      const material = new THREE.MeshBasicMaterial({
        color: spec.color,
        transparent: true,
        opacity: spec.opacity,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      const ring = new THREE.Mesh(geometry, material);
      ring.rotation.set(spec.x, spec.y, spec.z);
      orbitalGroup.add(ring);
      return ring;
    });

    // Satellite nodes on the orbital paths.
    const satellites = [];
    for (let i = 0; i < 5; i += 1) {
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(i % 2 === 0 ? 0.035 : 0.024, 12, 12),
        new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? "#f0d999" : "#b68d45",
          transparent: true,
          opacity: 0.96
        })
      );
      orbitalGroup.add(mesh);
      satellites.push(mesh);
    }

    // Distant stars add depth without a large texture or video file.
    const stars = makeStarField(THREE, isSmall ? 420 : 780);
    scene.add(stars);

    // Soft central glow.
    const glow = new THREE.Mesh(
      new THREE.SphereGeometry(0.52, 24, 24),
      new THREE.MeshBasicMaterial({
        color: "#b78e43",
        transparent: true,
        opacity: 0.055,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      })
    );
    world.add(glow);

    const onResize = () => {
      const bounds = stage.getBoundingClientRect();
      const width = Math.max(1, Math.round(bounds.width));
      const height = Math.max(1, Math.round(bounds.height));
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
      if (reducedMotion) renderer.render(scene, camera);
    };

    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(stage);
    onResize();

    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onPointerMove = (event) => {
      const bounds = stage.getBoundingClientRect();
      pointer.targetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 0.35;
      pointer.targetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 0.25;
    };

    const onVisibilityChange = () => {
      if (document.hidden) renderer.setAnimationLoop(null);
      else if (!reducedMotion && activeScene?.visible) renderer.setAnimationLoop(animate);
      else if (reducedMotion) renderer.render(scene, camera);
    };

    let visible = false;
    const intersectionObserver = new IntersectionObserver((entries) => {
      visible = entries.some((entry) => entry.isIntersecting);
      if (activeScene) activeScene.visible = visible;

      if (reducedMotion) {
        renderer.render(scene, camera);
      } else if (visible && !document.hidden) {
        renderer.setAnimationLoop(animate);
      } else {
        renderer.setAnimationLoop(null);
      }
    }, { threshold: 0.04 });
    intersectionObserver.observe(stage);

    const animate = (time) => {
      const t = time * 0.001;
      pointer.x += (pointer.targetX - pointer.x) * 0.035;
      pointer.y += (pointer.targetY - pointer.y) * 0.035;

      world.rotation.y = t * 0.105 + pointer.x;
      world.rotation.x = Math.sin(t * 0.19) * 0.075 + pointer.y;
      particleSphere.rotation.z = Math.sin(t * 0.13) * 0.06;
      networkLines.rotation.y = -t * 0.045;
      core.rotation.x += 0.0007;
      core.rotation.y -= 0.0009;
      orbitalGroup.rotation.y = t * 0.14;
      orbitalGroup.rotation.z = Math.sin(t * 0.22) * 0.08;
      stars.rotation.y = -t * 0.012;

      satellites.forEach((satellite, index) => {
        const angle = t * (0.42 + index * 0.035) + index * (Math.PI * 2 / satellites.length);
        const radius = 1.62 + (index % 3) * 0.145;
        satellite.position.set(
          Math.cos(angle) * radius,
          Math.sin(angle * 1.23) * 0.24,
          Math.sin(angle) * radius
        );
      });

      renderer.render(scene, camera);
    };

    stage.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);

    activeScene = {
      stage, scene, renderer, resizeObserver, intersectionObserver,
      onPointerMove, onVisibilityChange, visible
    };

    stage.classList.add("cins-3d-ready");
    stage.classList.remove("cins-3d-fallback");
    stage.dataset.cinsSceneMounted = "ready";

    if (reducedMotion) renderer.render(scene, camera);
  } catch (error) {
    console.warn("CINS 3D scene unavailable; showing static fallback.", error);
    stage.dataset.cinsSceneMounted = "fallback";
    stage.classList.add("cins-3d-fallback");
  }
}

function initializePage() {
  requestAnimationFrame(() => {
    setupReveals();

    const stage = document.querySelector(".cins-emblem-stage");

    if (!stage) {
      disposeActiveScene();
      initializedPage = null;
      return;
    }

    if (activeScene?.stage === stage) return;

    disposeActiveScene();
    if (stage.dataset.cinsSceneMounted !== "loading" && stage.dataset.cinsSceneMounted !== "ready") {
      createCinsScene(stage);
    }
    initializedPage = stage;
  });
}

// Zensical instant navigation emits document$ when page content changes.
// The DOMContentLoaded fallback also supports a normal first page load.
try {
  if (typeof document$ !== "undefined" && document$?.subscribe) {
    document$.subscribe(initializePage);
  } else {
    window.addEventListener("DOMContentLoaded", initializePage, { once: true });
    if (document.readyState !== "loading") initializePage();
  }
} catch (error) {
  console.warn("CINS page initializer could not subscribe to navigation.", error);
  if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", initializePage, { once: true });
  } else {
    initializePage();
  }
}
