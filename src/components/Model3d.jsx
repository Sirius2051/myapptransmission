"use client";
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Cylinder, Text } from '@react-three/drei';
import { Sphere } from '@react-three/drei';
// import { Bloom, EffectComposer, LUT } from '@react-three/postprocessing';
// import { LUTCubeLoader } from 'postprocessing'

import { MeshDistortMaterial } from '@react-three/drei';

import { BufferGeometry, Float32BufferAttribute, PointsMaterial, Points } from 'three';

function Stars() {
  let positions = [];

  for (let i = 0; i < 1000; i++) {
    let x = Math.random() * 800 - 400;
    let y = Math.random() * 800 - 400;
    let z = Math.random() * 800 - 400;

    positions.push(x, y, z);
  }
  let geometry = new BufferGeometry();
  geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));

  let material = new PointsMaterial({ color: 0xFFFFFF });

  const pointsRef = useRef();

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001;
    }
  });

  return <points ref={pointsRef} geometry={geometry} material={material} />;
}


function Cylinders() {

  const miLista = [
    { id: 1, nombre: "Elemento 1", modelo: "modelo1.glb" },
    { id: 2, nombre: "Elemento 2", modelo: "modelo2.glb" },
    { id: 3, nombre: "Elemento 3", modelo: "modelo3.glb" },
    { id: 4, nombre: "Elemento 4", modelo: "modelo3.glb" },
    { id: 5, nombre: "Elemento 5", modelo: "modelo3.glb" },
    { id: 6, nombre: "Elemento 6", modelo: "modelo3.glb" },
    { id: 7, nombre: "Elemento 7", modelo: "modelo3.glb" },
    { id: 8, nombre: "Elemento 8", modelo: "modelo3.glb" },
    { id: 9, nombre: "Elemento 9", modelo: "modelo3.glb" },
    { id: 10, nombre: "Elemento 10", modelo: "modelo3.glb" },
  ];

  const cylinders = [];
  const [elapsedTime, setElapsedTime] = useState(0);

  useFrame(({ clock }) => setElapsedTime(clock.getElapsedTime()));

  for (let i = 0; i < 10; i++) {

    const elementoSeleccionado = miLista[i];

    const x = i % 2 === 0 ? i * 10 : (i - 1) * 10;
    const z = i % 2 === 0 ? 0 : 20;
    cylinders.push(
      <group key={i} position={[x, 1, z]}>

        <Cylinder args={[0.5, 0.5, 2, 32]}>
          <MeshDistortMaterial attach="material" color={new THREE.Color("white")}
            transparent
            roughness={0}
            metalness={1}
            clearcoat={1}
            clearcoatRoughness={0}
            reflectivity={1}
            envMapIntensity={2}
            speed={2}
            factor={2}
            distort={(Math.sin(elapsedTime) + 0.1) / 2}
            color={(Math.sin(elapsedTime * 0.1) + 1) / 2}
          />
        </Cylinder>
        <Sphere position={[0, 2.5, 0]} args={[0.5, 32, 32]}>
          <meshStandardMaterial attach="material" color={"#FFFFFF"} />
          <spotLight position={[0, 2.6, 0]} intensity={1} angle={0.15} penumbra={1} />
        </Sphere>
        <Text position={[0.2, 5, 1]} color="white" anchorX="center" anchorY="middle" fontSize={1}>
          {elementoSeleccionado.nombre}
        </Text>


      </group>
    );

  }
  return <>{cylinders}</>;
}

function CameraController({ currentCylinder }) {
  const { camera } = useThree();

  useEffect(() => {
    const x = currentCylinder % 2 === 0 ? currentCylinder / 2 * 10 : (currentCylinder - 2) / 2 * 10;
    const z = currentCylinder % 2 === 0 ? 0 : 20;
    camera.position.set(x, 3, z + 3);
    camera.lookAt(x, 2, z);
  }, [camera, currentCylinder]);

  return null;
}

function Model3d() {
  const [currentCylinder, setCurrentCylinder] = useState(0);
  const totalCylinders = 10;

  // const texture = useLoader(LUTCubeLoader, 'https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/DwlG-F-6800-STD.cube')

  const nextCylinder = () => setCurrentCylinder((current) => (current + 1) % totalCylinders);
  const prevCylinder = () => setCurrentCylinder((current) => (current - 1 + totalCylinders) % totalCylinders);

  return (
    <div className='flex justify-center items-center h-screen relative'>
      <button onClick={prevCylinder} className="absolute left-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full z-10 glow-on-hover ml-5">←</button>
      <Canvas className='h-2xl w-2xl'>
        <CameraController currentCylinder={currentCylinder} />
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Stars />
        <Cylinders />
        {/* <EffectComposer disableNormalPass>
          <Bloom mipmapBlur levels={9} intensity={1.5} luminanceThreshold={1} luminanceSmoothing={1} />
          <LUT lut={texture} />
        </EffectComposer> */}
      </Canvas>
      <button onClick={nextCylinder} className="absolute right-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full z-10 glow-on-hover mr-5">→</button>
    </div>
  );
}

export default Model3d;
