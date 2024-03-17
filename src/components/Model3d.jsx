"use client";
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useGLTF } from '@react-three/drei';
import { Cylinder, Cone, Text } from '@react-three/drei';
import { Box } from '@react-three/drei';

import { Sphere } from '@react-three/drei';
import { PlaneGeometry, MeshPhysicalMaterial, DoubleSide, Mesh } from 'three';
import { useTexture } from '@react-three/drei';


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

function GlassFloor() {
  const geometry = new PlaneGeometry(1000, 1000, 100, 100);

  const material = new MeshPhysicalMaterial({
    color: 0x450f57,
    // transparency: 0,
    wireframe: true
  });

  const floor = new Mesh(geometry, material);
  floor.rotation.x = Math.PI / 2;

  return <primitive object={floor} />;
}


function Cylinders() {

  const miLista = [
    { id: 1, nombre: "Teléfono", descripcion: "Inventado en eI siglo XIX, \nrevolucionó la comunicación \npersonal y de negocios.", modelo: "/models/51AWCvO9MtL.jpg" },
    { id: 2, nombre: "Telégrafo", descripcion: "Representó el primer \nmétodo de comunicación \ninstantánea a larga \ndistancia", modelo: "/models/receptor.jpg" },
    { id: 3, nombre: "Televisión", descripcion: "Cambió la forma en que \nrecibimos noticias y\n entretenimiento.", modelo: "/models/retro-tv-vintage-realistic-television-isolated-vector-20283849.jpg" },
    { id: 4, nombre: "La Radio", descripcion: "Permitió la transmisión\n de voz y música \na través de grandes\n distancias.", modelo: "/models/41.jpg" },
    { id: 5, nombre: "Celulares", descripcion: "Hizo posible la \ncomunicación personal\n en movimiento.", modelo: "/models/istockphoto-1474924010-612x612.jpg" },
    { id: 6, nombre: "E-Mail", descripcion: "Facilitó la comunicación\n escrita instantánea \na nivel lobal.", modelo: "/models/email_carta_correo.jpg" },
    { id: 7, nombre: "Redes Sociales", descripcion: "Crearon nuevas formas \nde interacción social \ny difusión de información.", modelo: "/models/bb46f346d2e32c2346c6fa8d72151c98.jpg" },
    { id: 8, nombre: "Internet", descripcion: "Conectó al mundo de \nmaneras que nunca \nantes se habian\n imaginado.", modelo: "/models/descarga.jpeg" },
    { id: 9, nombre: "Elemento 9", descripcion: "", modelo: "/models/receptor.jpg" },
    { id: 10, nombre: "¿El Futuro?", descripcion: "...", modelo: "/models/4100098c8af8b04589771aa58935f4c8.jpg" },
  ];
  const textures = miLista.map(elemento => useTexture(elemento.modelo));

  const cylinders = [];
  const [elapsedTime, setElapsedTime] = useState(0);

  useFrame(({ clock }) => setElapsedTime(clock.getElapsedTime()));

  for (let i = 0; i < 10; i++) {

    const elementoSeleccionado = miLista[i];
    const x = i % 2 === 0 ? i * 10 : (i - 1) * 10;
    const z = i % 2 === 0 ? 0 : 20;


    // const texture = useTexture(elementoSeleccionado.modelo);

    cylinders.push(
      <group key={i} position={[x, 1, z]}>

        <Cone args={[0.5, 2, 32]} rotation={[Math.PI, 0, 0]}>
          <meshNormalMaterial attach="material" />
        </Cone>
        <Box position={[0, 3, 0]} args={[3, 3, 3]}>
        <meshStandardMaterial attach="material" map={textures[i]} />
        </Box>
        <Text position={[0.2, 6, 0]} color="white" anchorX="center" anchorY="middle" fontSize={1} rotation={[0, Math.PI / 2, 0]}>
          {elementoSeleccionado.nombre}
        </Text>
        <Text position={[0.2, 2.5, 5]} color="white" anchorX="center" anchorY="middle" fontSize={0.5} rotation={[0, Math.PI / 2,  0]}>
        {elementoSeleccionado.descripcion}
        </Text>


      </group>
    );

  }
  return <>{cylinders}</>;
}

function CameraController({ currentCylinder }) {
  const { camera } = useThree();
  const vec = new THREE.Vector3(); 
  const focus = new THREE.Vector3();
  const pos = new THREE.Vector3();

  useFrame((state) => {
    const x = currentCylinder * 10;
    const z = currentCylinder % 2 === 0 ? 0 : 15;

    // Define la posición y el punto de enfoque de la cámara
    focus.set(x, 2, z); 
    pos.set(x, 3, z + 3); 

    const step = 0.05; 
    vec.lerp(focus, step); 
    state.camera.position.lerp(pos, step); 
    state.camera.lookAt(vec); 
    state.camera.rotation.y = Math.PI / 2; 
    state.camera.updateProjectionMatrix(); 
  });

  return null;
}




function Model3d() {
  const [currentCylinder, setCurrentCylinder] = useState(0);
  const totalCylinders = 10;
  const nextCylinder = () => setCurrentCylinder((current) => (current + 1) % totalCylinders);
  const prevCylinder = () => setCurrentCylinder((current) => (current - 1 + totalCylinders) % totalCylinders);

  return (
    <div className='flex justify-center items-center h-screen relative'>
      <button onClick={prevCylinder} className="absolute left-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full z-10 glow-on-hover ml-5">←</button>
      <Canvas className='h-2xl w-2xl'>
          <GlassFloor />
          <CameraController currentCylinder={currentCylinder} />
          {/* <OrbitControls /> */}
          <ambientLight intensity={1} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Stars />
          <Cylinders />
      </Canvas>
      <button onClick={nextCylinder} className="absolute right-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full z-10 glow-on-hover mr-5">→</button>
    </div>
  );
}

export default Model3d;
