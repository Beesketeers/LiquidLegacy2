import NavBar from "./components/NavBar";
export default function Home() {
    return (
        <main className="flex min-h-full flex-col bg-blue">
            <NavBar />
            <div className="flex min-h-screen">
                <div className="flex items-center justify-center flex-col w-2/5 p-32 gap-8">
                    <p className="text-5xl text-white font-semibold overflow-auto">
                        Saving the world, one drop at a time
                    </p>
                    <p className="text-2xl text-gray-400 ">
                        Descubre y aprende sobre los distintos cuerpos de agua que existen en el mundo.
                    </p>
                    <button className="text-2xl w-full bg-green text-white py-4">Comienza a explorar</button>
                </div>
                <div className="flex items-center justify-center w-3/5">
                    <img className="w-3/4" src="/assets/earth.png" alt="earth logo" />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-8 p-32">asd</div>
        </main>
    );
}
