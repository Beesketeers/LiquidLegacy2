"use client";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

const ThreeModel = () => {
    const gltf = useLoader(GLTFLoader, "/models/earth.glb");
    gltf.scene.scale.set(0.02, 0.02, 0.02);
    return <primitive object={gltf.scene} />;
};

export default ThreeModel;
