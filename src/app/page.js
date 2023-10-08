"use client";

import { Suspense } from "react";
import ThreeScene from "./components/ThreeScene";
import Model from "./components/Model";
import { OrbitControls, Stars } from "@react-three/drei";
import NavBar from "./components/NavBar";
export default function Home() {
    return (
        <>
            <div className="absolute w-full h-full z-0">
                <ThreeScene>
                    <color attach="background" args={["#00204a"]} />
                    <ambientLight intensity={0.3} />
                    <hemisphereLight intensity={1} />
                    <directionalLight intensity={0.5} position={[0, 10, 0]} />
                    <OrbitControls autoRotate />
                    <Suspense fallback={null}>
                        <Model />
                    </Suspense>
                    <Stars />
                </ThreeScene>
            </div>
            <main className="flex min-h-screen flex-col bg-black z-10">
                <NavBar />
                <div className="flex flex-col z-20">
                    <div className="flex min-w-fit">
                        <div className="flex items-center justify-center flex-col min-h-fit w-2/5 p-32 gap-8">
                            <p className="text-5xl text-white font-semibold min-h-fit">
                                Saving the world, one drop at a time
                            </p>
                            <p className="text-2xl text-gray-400 ">
                                Descubre y aprende sobre los distintos cuerpos de agua que existen en el mundo.
                            </p>
                            <button className="text-2xl w-full bg-green hover:bg-green/80 text-white py-4 rounded transition-all">
                                Comienza a explorar
                            </button>
                        </div>
                        <div className="flex items-center justify-center w-3/5">earth</div>
                    </div>
                    <div className="flex flex-col items-center justify-center py-8">
                        <p className="text-xl text-white font-semibold">
                            Con el apoyo de las siguientes organizaciones:
                        </p>
                        <div className="flex h-40 items-center justify-center gap-5">
                            <img className="w-24 invert aspect-auto" src="/assets/org3.png" alt="org" />
                            <img className="w-24 invert aspect-auto" src="/assets/org1.png" alt="org" />
                            <img className="w-24 invert aspect-auto" src="/assets/org5.png" alt="org" />
                            <img className="w-24 invert aspect-auto" src="/assets/org2.png" alt="org" />
                            <img className="w-24 invert aspect-auto" src="/assets/org4.png" alt="org" />
                            <img className="w-24 invert aspect-auto" src="/assets/org6.png" alt="org" />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
