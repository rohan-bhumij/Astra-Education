'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import * as THREE from 'three';
import { Code2, BrainCircuit, Cpu, Box, ArrowRight, Play, Pause, RotateCcw, type LucideIcon } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

type TrackKey = 'coding' | 'ai' | 'electronics' | 'design3d';

interface CalloutDef {
  id: 'head' | 'spine' | 'knee' | 'hock';
  title: string;
  baseMetric: string;
  offsetX: number;
  offsetY: number;
  align: 'left' | 'right';
}

interface TrackSpec {
  key: TrackKey;
  label: string;
  tagline: string;
  juniorBand: string;
  seniorBand: string;
  studentBuild: string;
  alignment: string;
  icon: LucideIcon;
  callouts: CalloutDef[];
}

const TRACKS: TrackSpec[] = [
  {
    key: 'coding',
    label: 'Coding',
    tagline: 'Stories, games and apps built from computational logic.',
    juniorBand: 'Classes 1 to 5: Scratch Jr stories, Scratch games, loops, conditionals, and block to text logic.',
    seniorBand: 'Classes 6 to 9: Python variables, functions, libraries, and hardware automation scripts.',
    studentBuild: 'Interactive software applications, logic games, and sensor control programs.',
    alignment: 'NEP 2020 §4.25 computational thinking by breaking problems into clear steps.',
    icon: Code2,
    callouts: [
      { id: 'head', title: 'Vision sensor input', baseMetric: 'POLL 60 HZ', offsetX: 52, offsetY: -44, align: 'right' },
      { id: 'spine', title: 'Gait control loop', baseMetric: 'CYCLE 4.4 HZ', offsetX: -54, offsetY: -48, align: 'left' },
      { id: 'knee', title: 'Forearm solver', baseMetric: 'IK PASS', offsetX: 56, offsetY: 36, align: 'right' },
      { id: 'hock', title: 'Phase scheduler', baseMetric: 'OFFSET PI', offsetX: -56, offsetY: 36, align: 'left' },
    ],
  },
  {
    key: 'ai',
    label: 'Artificial intelligence',
    tagline: 'Patterns, datasets and trained models connected to real inputs.',
    juniorBand: 'Classes 1 to 5: Pattern recognition games, decision trees, and logic classification.',
    seniorBand: 'Classes 6 to 9: Curated datasets, computer vision models, and ethical AI reflection.',
    studentBuild: 'Trained image and pattern recognition models paired with microcontroller outputs.',
    alignment: 'NEP 2020 experiential understanding paired with responsible design questioning.',
    icon: BrainCircuit,
    callouts: [
      { id: 'head', title: 'Object classifier', baseMetric: 'CONF 98.4%', offsetX: 52, offsetY: -44, align: 'right' },
      { id: 'spine', title: 'Motion state vector', baseMetric: 'GALLOP 4X', offsetX: -54, offsetY: -48, align: 'left' },
      { id: 'knee', title: 'Stride prediction', baseMetric: 'ERR 0.02 M', offsetX: 56, offsetY: 36, align: 'right' },
      { id: 'hock', title: 'Balance reward', baseMetric: 'WEIGHT 0.94', offsetX: -56, offsetY: 36, align: 'left' },
    ],
  },
  {
    key: 'electronics',
    label: 'Electronics',
    tagline: 'Circuits, switches and sensors wired and tested by hand.',
    juniorBand: 'Classes 1 to 5: LED circuits, physical switches, buzzers, and early microcontroller I/O.',
    seniorBand: 'Classes 6 to 9: Temperature, IR, and ultrasonic sensors with motor control boards.',
    studentBuild: 'Calibrated sensor circuits and automated hardware assemblies.',
    alignment: 'CBSE Kaushal Bodh practical work with machines and materials in Classes 6 to 8.',
    icon: Cpu,
    callouts: [
      { id: 'head', title: 'Ultrasonic range array', baseMetric: '5V TRIG', offsetX: 52, offsetY: -44, align: 'right' },
      { id: 'spine', title: 'Microcontroller IMU', baseMetric: 'I2C BUS', offsetX: -54, offsetY: -48, align: 'left' },
      { id: 'knee', title: 'PWM servo actuator', baseMetric: '50 HZ PWM', offsetX: 56, offsetY: 36, align: 'right' },
      { id: 'hock', title: 'Brushless drive bus', baseMetric: '12V RAIL', offsetX: -56, offsetY: 36, align: 'left' },
    ],
  },
  {
    key: 'design3d',
    label: '3D design',
    tagline: 'Sketches, CAD assemblies and physical prototypes built for real use.',
    juniorBand: 'Classes 1 to 5: Spatial geometry, isometric sketching, and structural enclosure design.',
    seniorBand: 'Classes 6 to 9: Parametric CAD assemblies, mechanical brackets, and 3D printed parts.',
    studentBuild: 'Functional 3D printed rover mounts, gears, and sensor housings.',
    alignment: 'NEP 2020 §4.6 model building plus Year 02 robotics and 3D printing progression.',
    icon: Box,
    callouts: [
      { id: 'head', title: 'Faceted cowl shell', baseMetric: 'WALL 2.4 MM', offsetX: 52, offsetY: -44, align: 'right' },
      { id: 'spine', title: 'Parametric chassis', baseMetric: 'PLA+ MESH', offsetX: -54, offsetY: -48, align: 'left' },
      { id: 'knee', title: 'Pin pivot tolerance', baseMetric: 'GAP 0.25 MM', offsetX: 56, offsetY: 36, align: 'right' },
      { id: 'hock', title: 'Linkage assembly', baseMetric: 'INFILL 35%', offsetX: -56, offsetY: 36, align: 'left' },
    ],
  },
];

interface LegRig {
  upperPivot: THREE.Group;
  lowerPivot: THREE.Group;
  hoofPivot: THREE.Group;
  isFront: boolean;
  phaseOffset: number;
}

export default function Lab3DShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasHostRef = useRef<HTMLDivElement>(null);
  const [activeKey, setActiveKey] = useState<TrackKey>('electronics');
  const activeKeyRef = useRef<TrackKey>('electronics');
  const [isRunning, setIsRunning] = useState(true);
  const isRunningRef = useRef(true);
  const [webglReady, setWebglReady] = useState(true);

  const resetOrbitRef = useRef<(() => void) | null>(null);
  const lineRefs = useRef<Record<string, SVGPolylineElement | null>>({});
  const dotRefs = useRef<Record<string, SVGCircleElement | null>>({});
  const labelRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const readoutRefs = useRef<Record<string, HTMLSpanElement | null>>({});

  const activeTrack = TRACKS.find((t) => t.key === activeKey) ?? TRACKS[2];

  useEffect(() => {
    activeKeyRef.current = activeKey;
  }, [activeKey]);

  useEffect(() => {
    isRunningRef.current = isRunning;
  }, [isRunning]);

  useEffect(() => {
    const stageWrapper = containerRef.current;
    const canvasHost = canvasHostRef.current;
    if (!stageWrapper || !canvasHost) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    } catch {
      setWebglReady(false);
      return;
    }

    let width = canvasHost.clientWidth || 560;
    let height = canvasHost.clientHeight || 380;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    canvasHost.innerHTML = '';
    canvasHost.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    camera.position.set(0, 1.35, 6.2);
    camera.lookAt(0, 0.05, 0);

    // Clean studio lighting
    scene.add(new THREE.AmbientLight(0xffffff, 1.25));
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.9);
    keyLight.position.set(5, 8, 6);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x93c5fd, 1.1);
    rimLight.position.set(-5, 4, -4);
    scene.add(rimLight);

    const warmFill = new THREE.PointLight(0xf59e0b, 1.6, 12);
    warmFill.position.set(2.5, -0.4, 3.2);
    scene.add(warmFill);

    // Shared sculptural materials tuned cleanly per track mode
    const primaryHullMat = new THREE.MeshStandardMaterial({
      color: 0x0b1b36,
      metalness: 0.42,
      roughness: 0.34,
      flatShading: true,
    });
    const limbMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      metalness: 0.5,
      roughness: 0.35,
      flatShading: true,
    });
    const accentGlowMat = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      emissive: 0x2563eb,
      emissiveIntensity: 0.55,
      metalness: 0.4,
      roughness: 0.25,
    });
    const amberGlowMat = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      emissive: 0xd97706,
      emissiveIntensity: 0.45,
      metalness: 0.55,
      roughness: 0.25,
    });
    const wireOverlayMat = new THREE.MeshBasicMaterial({
      color: 0x2563eb,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });

    // Root orbital turntable
    const masterRig = new THREE.Group();
    scene.add(masterRig);

    // Scrolling motion ground lines under hooves
    const trackGroup = new THREE.Group();
    trackGroup.position.y = -1.24;
    masterRig.add(trackGroup);

    const gridFloor = new THREE.GridHelper(6.0, 14, 0x94a3b8, 0xdbe4f0);
    trackGroup.add(gridFloor);

    const strideBars: THREE.Mesh[] = [];
    const barGeo = new THREE.BoxGeometry(0.45, 0.015, 0.04);
    const barMat = new THREE.MeshBasicMaterial({ color: 0x2563eb, transparent: true, opacity: 0.45 });
    for (let b = 0; b < 8; b++) {
      const bar = new THREE.Mesh(barGeo, barMat);
      bar.position.set(-2.4 + b * 0.72, 0.01, b % 2 === 0 ? 0.36 : -0.36);
      trackGroup.add(bar);
      strideBars.push(bar);
    }

    // ── ARTICULATED 3D GALLOPING HORSE ─────────────────────────────────────
    const horseBody = new THREE.Group();
    horseBody.position.y = 0.22;
    masterRig.add(horseBody);

    // Core spine & chest barrel (facing +X)
    const chestGeo = new THREE.DodecahedronGeometry(0.4, 1);
    const chestMesh = new THREE.Mesh(chestGeo, primaryHullMat);
    chestMesh.scale.set(1.22, 1.0, 0.74);
    chestMesh.position.set(0.56, 0.02, 0);
    horseBody.add(chestMesh);

    const torsoGeo = new THREE.CylinderGeometry(0.28, 0.34, 0.92, 8);
    torsoGeo.rotateZ(Math.PI / 2);
    const torsoMesh = new THREE.Mesh(torsoGeo, primaryHullMat);
    torsoMesh.scale.set(1, 0.96, 0.78);
    torsoMesh.position.set(-0.04, 0.05, 0);
    horseBody.add(torsoMesh);

    const torsoWire = new THREE.Mesh(torsoGeo, wireOverlayMat);
    torsoWire.scale.set(1.03, 1.02, 0.84);
    torsoWire.position.copy(torsoMesh.position);
    horseBody.add(torsoWire);

    const croupGeo = new THREE.DodecahedronGeometry(0.36, 1);
    const croupMesh = new THREE.Mesh(croupGeo, primaryHullMat);
    croupMesh.scale.set(1.25, 0.98, 0.76);
    croupMesh.position.set(-0.68, 0.04, 0);
    horseBody.add(croupMesh);

    // Dorsal spine telemetry bar
    const spineBar = new THREE.Mesh(new THREE.BoxGeometry(1.38, 0.06, 0.14), accentGlowMat);
    spineBar.position.set(-0.04, 0.36, 0);
    horseBody.add(spineBar);

    const anchorSpine = new THREE.Object3D();
    anchorSpine.position.set(-0.02, 0.42, 0);
    horseBody.add(anchorSpine);

    // Neck & Head Group
    const neckPivot = new THREE.Group();
    neckPivot.position.set(0.68, 0.14, 0);
    horseBody.add(neckPivot);

    const neckGeo = new THREE.CylinderGeometry(0.15, 0.28, 0.86, 8);
    const neckMesh = new THREE.Mesh(neckGeo, primaryHullMat);
    neckMesh.position.set(0.24, 0.36, 0);
    neckMesh.rotation.z = -0.62;
    neckPivot.add(neckMesh);

    const neckWire = new THREE.Mesh(neckGeo, wireOverlayMat);
    neckWire.scale.set(1.06, 1.01, 1.06);
    neckWire.position.copy(neckMesh.position);
    neckWire.rotation.copy(neckMesh.rotation);
    neckPivot.add(neckWire);

    // Sculpted Mane plates along upper neck ridge
    for (let m = 0; m < 5; m++) {
      const maneBlade = new THREE.Mesh(
        new THREE.BoxGeometry(0.12, 0.06, 0.05),
        accentGlowMat
      );
      const t = m / 4;
      maneBlade.position.set(0.02 + t * 0.36, 0.22 + t * 0.46, 0);
      maneBlade.rotation.z = 0.55;
      neckPivot.add(maneBlade);
    }

    const headPivot = new THREE.Group();
    headPivot.position.set(0.49, 0.72, 0);
    neckPivot.add(headPivot);

    const skullMesh = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.22, 0.21), primaryHullMat);
    skullMesh.position.set(0.1, 0, 0);
    skullMesh.rotation.z = -0.25;
    headPivot.add(skullMesh);

    const muzzleGeo = new THREE.CylinderGeometry(0.065, 0.11, 0.34, 6);
    muzzleGeo.rotateZ(Math.PI / 2);
    const muzzleMesh = new THREE.Mesh(muzzleGeo, primaryHullMat);
    muzzleMesh.position.set(0.34, -0.1, 0);
    muzzleMesh.rotation.z = -0.52;
    headPivot.add(muzzleMesh);

    const sensorBar = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.045, 0.23), amberGlowMat);
    sensorBar.position.set(0.18, 0.03, 0);
    sensorBar.rotation.z = -0.25;
    headPivot.add(sensorBar);

    const earGeo = new THREE.ConeGeometry(0.04, 0.16, 4);
    [-0.065, 0.065].forEach((ez) => {
      const ear = new THREE.Mesh(earGeo, limbMat);
      ear.position.set(-0.02, 0.16, ez);
      ear.rotation.z = -0.18;
      headPivot.add(ear);
    });

    const anchorHead = new THREE.Object3D();
    anchorHead.position.set(0.38, -0.05, 0);
    headPivot.add(anchorHead);

    // Flowing multi-segment Tail
    const tailPivots: THREE.Group[] = [];
    let parentTail: THREE.Group = horseBody;
    for (let ts = 0; ts < 4; ts++) {
      const segPivot = new THREE.Group();
      if (ts === 0) {
        segPivot.position.set(-1.05, 0.18, 0);
      } else {
        segPivot.position.set(-0.22, -0.03, 0);
      }
      const w = 0.065 - ts * 0.011;
      const segMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(w * 0.85, w, 0.24, 6),
        ts % 2 === 0 ? accentGlowMat : limbMat
      );
      segMesh.rotation.z = Math.PI / 2;
      segMesh.position.set(-0.11, 0, 0);
      segPivot.add(segMesh);
      parentTail.add(segPivot);
      tailPivots.push(segPivot);
      parentTail = segPivot;
    }

    // Leg factory (4 multi-jointed limbs with servo rings & anchor trackers)
    const legRigs: LegRig[] = [];
    let anchorForeKnee = new THREE.Object3D();
    let anchorHindHock = new THREE.Object3D();

    function buildLeg(
      hipX: number,
      hipY: number,
      hipZ: number,
      isFront: boolean,
      phaseOffset: number,
      trackJoint: boolean
    ) {
      const upperPivot = new THREE.Group();
      upperPivot.position.set(hipX, hipY, hipZ);
      horseBody.add(upperPivot);

      const hipRing = new THREE.Mesh(new THREE.TorusGeometry(0.085, 0.022, 8, 20), accentGlowMat);
      upperPivot.add(hipRing);

      const upperLen = isFront ? 0.52 : 0.54;
      const upperMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(isFront ? 0.082 : 0.105, 0.058, upperLen, 7),
        primaryHullMat
      );
      upperMesh.position.set(0, -upperLen * 0.5, 0);
      upperPivot.add(upperMesh);

      const lowerPivot = new THREE.Group();
      lowerPivot.position.set(0, -upperLen, 0);
      upperPivot.add(lowerPivot);

      const kneePin = new THREE.Mesh(new THREE.SphereGeometry(0.062, 12, 12), amberGlowMat);
      lowerPivot.add(kneePin);

      const lowerLen = isFront ? 0.48 : 0.50;
      const lowerMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.052, 0.036, lowerLen, 7),
        limbMat
      );
      lowerMesh.position.set(0, -lowerLen * 0.5, 0);
      lowerPivot.add(lowerMesh);

      const hoofPivot = new THREE.Group();
      hoofPivot.position.set(0, -lowerLen, 0);
      lowerPivot.add(hoofPivot);

      const hoofMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.064, 0.11, 7), primaryHullMat);
      hoofMesh.position.set(0.02, -0.05, 0);
      hoofPivot.add(hoofMesh);

      if (trackJoint && isFront) {
        anchorForeKnee = new THREE.Object3D();
        anchorForeKnee.position.set(0, 0, 0);
        lowerPivot.add(anchorForeKnee);
      } else if (trackJoint && !isFront) {
        anchorHindHock = new THREE.Object3D();
        anchorHindHock.position.set(0, 0, 0);
        lowerPivot.add(anchorHindHock);
      }

      legRigs.push({ upperPivot, lowerPivot, hoofPivot, isFront, phaseOffset });
    }

    // Forelimbs & Hindlimbs (real 4-beat gallop phase offsets)
    buildLeg(0.62, -0.14, 0.24, true, 0.0, true);      // Front Right (tracked knee!)
    buildLeg(0.62, -0.14, -0.24, true, 0.72, false);   // Front Left
    buildLeg(-0.74, -0.10, 0.24, false, 3.05, false);  // Hind Right
    buildLeg(-0.74, -0.10, -0.24, false, 3.72, true);  // Hind Left (tracked hock!)

    // Drag to rotate 360 degrees
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;
    let targetRotY = -0.35;
    let targetRotX = 0.08;

    resetOrbitRef.current = () => {
      targetRotY = -0.35;
      targetRotX = 0.08;
    };

    const canvas = renderer.domElement;
    canvas.style.cursor = 'grab';
    canvas.style.touchAction = 'pan-y';

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      prevX = e.clientX;
      prevY = e.clientY;
      canvas.style.cursor = 'grabbing';
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - prevX;
      const dy = e.clientY - prevY;
      prevX = e.clientX;
      prevY = e.clientY;
      targetRotY += dx * 0.0095;
      targetRotX = Math.max(-0.48, Math.min(0.62, targetRotX + dy * 0.006));
    };

    const onPointerUp = () => {
      isDragging = false;
      canvas.style.cursor = 'grab';
    };

    canvas.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const nw = entry.contentRect.width;
        const nh = entry.contentRect.height;
        if (nw > 0 && nh > 0) {
          width = nw;
          height = nh;
          camera.aspect = nw / nh;
          camera.updateProjectionMatrix();
          renderer.setSize(nw, nh);
        }
      }
    });
    resizeObserver.observe(canvasHost);

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      isRunningRef.current = false;
      setIsRunning(false);
    }

    let gallopClock = 0;
    let lastTs = performance.now();
    let frameId = 0;
    const projVec = new THREE.Vector3();

    const animate = (now: number) => {
      frameId = requestAnimationFrame(animate);
      const dt = Math.min((now - lastTs) / 1000, 0.05);
      lastTs = now;

      if (isRunningRef.current) {
        gallopClock += dt * 5.2;
      }

      // Style adaptation per selected discipline
      const mode = activeKeyRef.current;
      wireOverlayMat.opacity = mode === 'coding' ? 0.82 : mode === 'design3d' ? 0.55 : 0.24;
      primaryHullMat.wireframe = mode === 'design3d';
      accentGlowMat.color.setHex(mode === 'ai' ? 0x7c3aed : mode === 'coding' ? 0x2563eb : mode === 'design3d' ? 0x0f172a : 0x2563eb);
      accentGlowMat.emissive.setHex(mode === 'ai' ? 0x7c3aed : 0x2563eb);

      // Slow showroom turn only when running and not dragging
      if (isRunningRef.current && !isDragging) {
        targetRotY += dt * 0.22;
      }

      masterRig.rotation.y += (targetRotY - masterRig.rotation.y) * 0.1;
      masterRig.rotation.x += (targetRotX - masterRig.rotation.x) * 0.1;

      // Equine gallop body heave & pitch
      horseBody.position.y = 0.24 + Math.sin(gallopClock * 2.0) * 0.11;
      horseBody.rotation.z = Math.cos(gallopClock * 2.0 + 0.45) * 0.08;

      // Neck counterbalance & head poise
      neckPivot.rotation.z = Math.sin(gallopClock * 2.0 - 0.5) * 0.12;
      headPivot.rotation.z = -neckPivot.rotation.z * 0.75 + Math.cos(gallopClock * 2.0) * 0.05;

      // Flowing tail wave
      tailPivots.forEach((seg, idx) => {
        seg.rotation.z = Math.sin(gallopClock * 1.15 - idx * 0.7) * 0.18 - 0.18;
      });

      // Multi-jointed 4-beat gallop kinematics
      legRigs.forEach((leg) => {
        const p = gallopClock + leg.phaseOffset;
        if (leg.isFront) {
          const swing = Math.sin(p);
          const tuck = Math.max(0, -Math.cos(p + 0.3));
          leg.upperPivot.rotation.z = swing * 0.62 + 0.06;
          leg.lowerPivot.rotation.z = -tuck * 1.18 - 0.12;
          leg.hoofPivot.rotation.z = tuck * 0.65 - 0.12;
        } else {
          const swing = Math.sin(p);
          const drive = Math.max(0, Math.cos(p - 0.25));
          leg.upperPivot.rotation.z = swing * 0.58 + 0.18;
          leg.lowerPivot.rotation.z = -0.52 + drive * 0.42;
          leg.hoofPivot.rotation.z = 0.28 - swing * 0.2;
        }
      });

      // Scrolling track bars under hooves
      if (isRunningRef.current) {
        strideBars.forEach((bar) => {
          bar.position.x -= dt * 3.8;
          if (bar.position.x < -2.8) bar.position.x += 5.76;
        });
      }

      renderer.render(scene, camera);
      scene.updateMatrixWorld(true);

      // Project live 3D joints -> 2D screen telemetry lines & floating tags (zero React re-renders!)
      const activeSpec = TRACKS.find((t) => t.key === mode) ?? TRACKS[2];
      const anchorMap: Record<CalloutDef['id'], THREE.Object3D> = {
        head: anchorHead,
        spine: anchorSpine,
        knee: anchorForeKnee,
        hock: anchorHindHock,
      };

      activeSpec.callouts.forEach((c) => {
        const anchorObj = anchorMap[c.id];
        anchorObj.getWorldPosition(projVec);
        projVec.project(camera);

        const sx = (projVec.x * 0.5 + 0.5) * width;
        const sy = (-projVec.y * 0.5 + 0.5) * height;

        // Keep label endpoint smartly separated toward outer stage corners
        const ex = Math.max(82, Math.min(width - 150, sx + c.offsetX));
        const ey = Math.max(26, Math.min(height - 34, sy + c.offsetY));
        const elbowX = sx + c.offsetX * 0.58;

        const poly = lineRefs.current[c.id];
        if (poly) {
          poly.setAttribute('points', `${sx.toFixed(1)},${sy.toFixed(1)} ${elbowX.toFixed(1)},${ey.toFixed(1)} ${ex.toFixed(1)},${ey.toFixed(1)}`);
        }

        const dot = dotRefs.current[c.id];
        if (dot) {
          dot.setAttribute('cx', sx.toFixed(1));
          dot.setAttribute('cy', sy.toFixed(1));
        }

        const lbl = labelRefs.current[c.id];
        if (lbl) {
          const tx = c.align === 'left' ? ex - 134 : ex + 6;
          const clampedTx = Math.max(10, Math.min(width - 148, tx));
          lbl.style.transform = `translate3d(${clampedTx.toFixed(1)}px, ${(ey - 18).toFixed(1)}px, 0)`;
        }

        const rEl = readoutRefs.current[c.id];
        if (rEl && isRunningRef.current) {
          if (c.id === 'knee') {
            const deg = Math.round(Math.abs(Math.sin(gallopClock) * 58 + 12));
            rEl.textContent = `${c.baseMetric} · ${deg}°`;
          } else if (c.id === 'hock') {
            const deg = Math.round(Math.abs(Math.cos(gallopClock) * 44 + 18));
            rEl.textContent = `${c.baseMetric} · ${deg}°`;
          } else if (c.id === 'spine') {
            const pitch = (Math.cos(gallopClock * 2) * 4.2).toFixed(1);
            rEl.textContent = `${c.baseMetric} · ${Number(pitch) >= 0 ? '+' : ''}${pitch}°`;
          } else {
            rEl.textContent = c.baseMetric;
          }
        }
      });
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      canvas.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      renderer.dispose();
    };
  }, []);

  return (
    <section className="bg-base py-20 lg:py-24" aria-labelledby="lab-3d-explorer-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="max-w-[680px] mx-auto text-center mb-12">
            <SectionLabel text="Interactive curriculum explorer" />
            <h2 id="lab-3d-explorer-heading" className="heading-2 text-navy mb-4">
              Kinetic systems in real time
            </h2>
            <p className="body-3 text-muted">
              Drag to rotate the articulated 3D quadruped model 360 degrees and switch tracks to inspect how Coding, AI, Electronics, and 3D design drive real moving joints.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="bg-surface border border-elevated rounded-2xl p-4 sm:p-8">
          {/* Discipline Selector */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {TRACKS.map((track) => {
              const Icon = track.icon;
              const isSelected = track.key === activeKey;
              return (
                <button
                  key={track.key}
                  type="button"
                  onClick={() => setActiveKey(track.key)}
                  className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl button-sm border transition-colors duration-300 ease-base ${
                    isSelected
                      ? 'bg-accent border-accent text-white shadow-sm'
                      : 'bg-white border-elevated text-navy hover:bg-white hover:border-control'
                  }`}
                  aria-pressed={isSelected}
                >
                  <Icon size={16} strokeWidth={1.85} aria-hidden="true" />
                  <span>{track.label}</span>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* 3D WebGL Kinetic Horse Stage + Live Moving Telemetry Lines */}
            <div className="lg:col-span-6">
              <div
                ref={containerRef}
                className="relative bg-white border border-elevated rounded-xl overflow-hidden shadow-sm"
              >
                <div className="flex items-center justify-between px-4 py-3 border-b border-elevated bg-surface">
                  <span className="caption-3 text-navy">{activeTrack.label} kinetic model</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIsRunning((v) => !v)}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-elevated caption-5 text-navy hover:border-control"
                      aria-label={isRunning ? 'Pause stride' : 'Resume stride'}
                    >
                      {isRunning ? <Pause size={12} strokeWidth={2} /> : <Play size={12} strokeWidth={2} />}
                      <span>{isRunning ? 'Pause' : 'Run'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => resetOrbitRef.current?.()}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-elevated caption-5 text-muted hover:text-navy hover:border-control"
                      aria-label="Reset 3D camera angle"
                    >
                      <RotateCcw size={12} strokeWidth={2} />
                      <span>Reset view</span>
                    </button>
                  </div>
                </div>

                <div className="relative w-full h-[360px] sm:h-[400px] bg-gradient-to-b from-[#F4F8FD] to-[#E9F0F8]">
                  <div
                    ref={canvasHostRef}
                    className="w-full h-full"
                    aria-label={`Interactive 360 degree rotatable 3D running horse demonstrating ${activeTrack.label}`}
                  >
                    {!webglReady && (
                      <div className="w-full h-full flex items-center justify-center p-6 text-center">
                        <p className="body-6 text-muted">
                          3D hardware view requires WebGL support in your browser.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Live 3D-tracked SVG Leader Lines & Labels */}
                  {webglReady && (
                    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
                      <svg className="w-full h-full">
                        {activeTrack.callouts.map((c) => (
                          <g key={c.id}>
                            <polyline
                              ref={(el) => {
                                lineRefs.current[c.id] = el;
                              }}
                              fill="none"
                              stroke="#2563EB"
                              strokeWidth="1.25"
                              strokeOpacity="0.8"
                            />
                            <circle
                              ref={(el) => {
                                dotRefs.current[c.id] = el;
                              }}
                              r="3.5"
                              fill="#D97706"
                              stroke="#FFFFFF"
                              strokeWidth="1.5"
                            />
                          </g>
                        ))}
                      </svg>

                      {activeTrack.callouts.map((c) => (
                        <div
                          key={c.id}
                          ref={(el) => {
                            labelRefs.current[c.id] = el;
                          }}
                          className="absolute top-0 left-0 w-[138px] px-2 py-1 rounded-md bg-white/90 backdrop-blur-sm border border-elevated shadow-sm"
                          style={{ willChange: 'transform' }}
                        >
                          <p className="text-[11px] font-semibold leading-tight text-navy truncate">
                            {c.title}
                          </p>
                          <span
                            ref={(el) => {
                              readoutRefs.current[c.id] = el;
                            }}
                            className="text-[10px] font-mono text-accent tracking-tight block mt-0.5 tabular-nums"
                          >
                            {c.baseMetric}
                          </span>
                        </div>
                      ))}

                      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-white/80 backdrop-blur-sm border border-elevated text-[11px] text-muted">
                        Drag anywhere on stage to rotate 360°
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Rich Curriculum Details Panel */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <p className="caption-3 text-accent uppercase tracking-wider mb-1">
                  Track details
                </p>
                <h3 className="heading-4 text-navy mb-2">{activeTrack.label}</h3>
                <p className="body-3 text-muted">{activeTrack.tagline}</p>
              </div>

              <div className="space-y-3">
                <div className="bg-white border border-elevated rounded-xl p-4">
                  <p className="caption-3 text-accent uppercase tracking-wider mb-1">
                    Junior band progression
                  </p>
                  <p className="body-6 text-ink">{activeTrack.juniorBand}</p>
                </div>

                <div className="bg-white border border-elevated rounded-xl p-4">
                  <p className="caption-3 text-amber uppercase tracking-wider mb-1">
                    Senior band progression
                  </p>
                  <p className="body-6 text-ink">{activeTrack.seniorBand}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-white border border-elevated rounded-xl p-4">
                    <p className="caption-3 text-navy mb-1">What students build</p>
                    <p className="caption-2 text-muted">{activeTrack.studentBuild}</p>
                  </div>
                  <div className="bg-warm border border-amber/30 rounded-xl p-4">
                    <p className="caption-3 text-amber mb-1">Board alignment</p>
                    <p className="caption-2 text-ink">{activeTrack.alignment}</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link href="/program" className="btn-secondary">
                  <span>View full Classes 1 to 9 sequence</span>
                  <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
