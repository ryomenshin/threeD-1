/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState, useRef, Suspense } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import Student from "./components/Student.jsx";
import UserGreetings from "./components/UserGreetings.jsx";
import List from "./components/List.jsx";
import { Canvas, useFrame } from "@react-three/fiber";
import { Tenkai } from "./components/Tenkai.jsx";
import Light from "./components/Light.jsx";
import {
  MeshReflectorMaterial,
  SoftShadows,
  OrbitControls,
  Loader,
  useGLTF,
  AccumulativeShadows,
  RandomizedLight,
  Html,
  Text,
  Effects,
  Environment,
  Center,
  MeshTransmissionMaterial,
} from "@react-three/drei";

const OrbitObject = () => {
  const objRef = useRef();
  useFrame(() => {
    objRef.current.rotation.x += 0.01;
    objRef.current.rotation.y += 0.01;

    return (
      <>
        <mesh ref={objRef}>
          <sphereGeometry args={[2, 16, 16]} />
          <meshMatcapMaterial color={"rgba(255, 0, 250, 1)"} />
        </mesh>{" "}
      </>
    );
  });
};
const App = () => {
  const meals = [
    { id: 1, name: "Noodle", calories: 86 },
    { id: 2, name: "Fried Rice", calories: 89 },
    { id: 3, name: "Pizza", calories: 101 },
    { id: 4, name: "Shrimp", calories: 78 },
    { id: 5, name: "Steak", calories: 143 },
  ];
  const vegetables = [
    { id: 6, name: "Carrot", calories: 99 },
    { id: 7, name: "Brocoli", calories: 89 },
    { id: 8, name: "Cabbage", calories: 64 },
    { id: 9, name: "Tomato", calories: 27 },
    { id: 10, name: "Corn", calories: 31 },
  ];

  return (
    <>
      <main className="relative flex justify-center flex-col bg-[#101010]">
        <Button />
       
        <div className="h-[100vh] z-50 ">
          <Canvas
            colorManagement
            shadowMap
            camera={{ position: [-5, 4, 4], fov: 30 }}
            className="relative z-[200]"
          >
            <color attach="background" args={["#1b1b1b"]} />
            <Light />
            <Suspense fallback={null}>
              <Tenkai />
              <OrbitControls />
              {/* <AccumulativeShadows
              temporal
              frames={500}
              alphaTest={0.8}
              opacity={0.75}
              scale={12}
            >
              <RandomizedLight
                amount={8}
                radius={4}
                ambient={0.5}
                intensity={2}
                position={[2.5, 5, -10]}
              />
            </AccumulativeShadows> */}
              <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[170, 170]} />
                <MeshReflectorMaterial
                  blur={[300, 100]}
                  resolution={2048}
                  mixBlur={1}
                  mixStrength={40}
                  roughness={1}
                  depthScale={1.2}
                  minDepthThreshold={0.4}
                  maxDepthThreshold={1.4}
                  color="#101010"
                  metalness={0.5}
                />
              </mesh>
            </Suspense>
          </Canvas>
        </div>
      </main>
    </>
  );
};

export default App;
