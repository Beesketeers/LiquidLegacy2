import NavBar from "./components/NavBar";
export default function Home() {
    return (
        <main className="flex flex-shrink h-screen flex-col bg-blue">
            <NavBar />
            <div className="flex flex-col min-h-screen">
                <div className="flex">
                    <div className="flex items-center justify-center flex-col w-2/5 p-32 gap-8">
                        <p className="text-5xl text-white font-semibold overflow-auto">
                            Saving the world, one drop at a time
                        </p>
                        <p className="text-2xl text-gray-400 ">
                            Descubre y aprende sobre los distintos cuerpos de agua que existen en el mundo.
                        </p>
                        <button className="text-2xl w-full bg-green hover:bg-green/80 text-white py-4 rounded transition-all">
                            Comienza a explorar
                        </button>
                    </div>
                    <div className="flex items-center justify-center w-3/5">
                        <img className="w-3/4" src="/assets/earth.png" alt="earth logo" />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-xl text-white font-semibold">Con el apoyo de las siguientes organizaciones:</p>
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
    );
}
