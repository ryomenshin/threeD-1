/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";

const Light = () => {
  return (
    <>
      
      <ambientLight intensity={4} />
      <directionalLight
        castShadow
        position={[-8, 16, -8]}
        intensity={1}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-bottom={-10}
        shadow-camera-top={10}
      />
      <pointLight position={[0, 50, 0]} intensity={2} />
    </>
  );
};

export default Light;
