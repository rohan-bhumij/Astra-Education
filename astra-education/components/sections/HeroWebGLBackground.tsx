'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const VERTEX_SHADER = `
  uniform float uTime;
  uniform vec2 uMouse;
  varying vec2 vUv;
  varying float vElevation;

  void main() {
    vUv = uv;
    vec3 pos = position;

    // Multi-frequency organic wave ribbons
    float wave1 = sin(pos.x * 0.55 + uTime * 0.45) * cos(pos.y * 0.65 - uTime * 0.35);
    float wave2 = sin((pos.x * 0.35 - pos.y * 0.5) + uTime * 0.55) * 0.65;
    float wave3 = cos(pos.x * 0.9 + pos.y * 0.45 + uTime * 0.3) * 0.35;

    // Subtle pointer influence
    float distToMouse = distance(uv, uMouse);
    float mouseRipple = exp(-distToMouse * 3.8) * 0.45 * sin(distToMouse * 14.0 - uTime * 2.2);

    float elevation = (wave1 + wave2 + wave3) * 0.52 + mouseRipple;
    pos.z += elevation;

    vElevation = elevation;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  uniform float uTime;
  varying vec2 vUv;
  varying float vElevation;

  void main() {
    // Base luminous studio white + light cool slate-blue crests
    vec3 whiteBase = vec3(1.0, 1.0, 1.0);
    vec3 iceTint = vec3(0.92, 0.96, 1.0);
    vec3 skyTint = vec3(0.76, 0.87, 0.99);
    vec3 cobaltAccent = vec3(0.42, 0.64, 0.98);
    vec3 amberWarm = vec3(0.99, 0.92, 0.78);

    float normElev = clamp((vElevation + 0.9) / 1.8, 0.0, 1.0);

    // Subtle animated topological contour lines on wave slopes
    float contourPattern = abs(fract(vElevation * 5.5 - uTime * 0.12) - 0.5) * 2.0;
    float contourLine = smoothstep(0.92, 0.98, contourPattern);

    vec3 color = mix(whiteBase, iceTint, smoothstep(0.15, 0.55, normElev));
    color = mix(color, skyTint, smoothstep(0.45, 0.85, normElev) * 0.68);
    color = mix(color, amberWarm, smoothstep(0.75, 1.0, vUv.x) * smoothstep(0.55, 0.9, normElev) * 0.28);
    color = mix(color, cobaltAccent, contourLine * 0.18 * smoothstep(0.2, 0.9, vUv.x));

    // Softly keep left typography column bright & airy white while showcasing richer waves across center/right
    float copyClearZone = smoothstep(0.12, 0.72, vUv.x);
    color = mix(mix(whiteBase, iceTint, 0.25), color, mix(0.35, 1.0, copyClearZone));

    // Feather bottom edge seamlessly into section base (#FFFFFF)
    float bottomFade = smoothstep(0.0, 0.16, vUv.y);
    color = mix(whiteBase, color, bottomFade);

    gl_FragColor = vec4(color, 1.0);
  }
`;

export default function HeroWebGLBackground() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = hostRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 720;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, -1.35, 6.2);
    camera.lookAt(0, 0.2, 0);

    // 1. Continuous flowing GLSL shader ribbon plane
    const uniforms = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.7, 0.5) },
    };

    const planeGeom = new THREE.PlaneGeometry(20, 12, 96, 60);
    const shaderMat = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      uniforms,
      side: THREE.DoubleSide,
    });
    const surface = new THREE.Mesh(planeGeom, shaderMat);
    surface.rotation.x = -0.32;
    scene.add(surface);

    // 2. Subtle floating 3D architectural node constellation particles above wave crests
    const particleCount = 68;
    const pPositions = new Float32Array(particleCount * 3);
    const pBase = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      // Concentrate gently toward center & right canvas behind showcase card
      const x = -2.0 + ((i * 73) % 100) / 100 * 10.5;
      const y = -3.2 + ((i * 41) % 100) / 100 * 6.8;
      const z = 0.6 + ((i * 29) % 100) / 100 * 1.4;
      pPositions[i * 3] = x;
      pPositions[i * 3 + 1] = y;
      pPositions[i * 3 + 2] = z;
      pBase[i * 3] = x;
      pBase[i * 3 + 1] = y;
      pBase[i * 3 + 2] = z;
    }

    const particleGeom = new THREE.BufferGeometry();
    particleGeom.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x2563eb,
      size: 0.065,
      transparent: true,
      opacity: 0.35,
    });
    const points = new THREE.Points(particleGeom, particleMat);
    points.rotation.x = -0.22;
    scene.add(points);

    // Pointer tracking
    const targetMouse = new THREE.Vector2(0.72, 0.5);
    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;
      targetMouse.x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      targetMouse.y = Math.max(0, Math.min(1, 1.0 - (e.clientY - rect.top) / rect.height));
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const nw = entry.contentRect.width;
        const nh = entry.contentRect.height;
        if (nw > 0 && nh > 0) {
          camera.aspect = nw / nh;
          camera.updateProjectionMatrix();
          renderer.setSize(nw, nh);
        }
      }
    });
    resizeObserver.observe(container);

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const clock = new THREE.Clock();
    let frameId = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = prefersReduced ? 1.5 : clock.getElapsedTime();
      uniforms.uTime.value = t;
      uniforms.uMouse.value.lerp(targetMouse, 0.05);

      if (!prefersReduced) {
        const posAttr = particleGeom.getAttribute('position') as THREE.BufferAttribute;
        for (let i = 0; i < particleCount; i++) {
          const bx = pBase[i * 3];
          const by = pBase[i * 3 + 1];
          const bz = pBase[i * 3 + 2];
          posAttr.setXYZ(
            i,
            bx + Math.sin(t * 0.4 + i) * 0.14,
            by + Math.cos(t * 0.35 + i * 0.6) * 0.14,
            bz + Math.sin(t * 0.6 + bx) * 0.12
          );
        }
        posAttr.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      planeGeom.dispose();
      shaderMat.dispose();
      particleGeom.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={hostRef}
      className="pointer-events-none absolute inset-0 overflow-hidden bg-gradient-to-br from-white via-[#F4F8FF] to-[#E8F1FE]"
      aria-hidden="true"
    />
  );
}
