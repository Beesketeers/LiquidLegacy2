const NavBar = () => {
    return (
        <div className="flex sticky top-0 items-center justify-between w-full bg-blue/20 backdrop-blur px-32 py-3">
            <div className="flex items-center gap-1">
                <img className="w-20 h-20" src="assets/logo.png" alt="Liquid Legacy" />
                <p className="text-3xl text-white font-miniolla">Liquid Legacy</p>
            </div>
            <div className="flex gap-6">
                <button className="flex px-2 py-2 text-lg text-gray-400 font-semibold hover:underline transition-all">
                    Sobre Nosotros
                </button>
                <button className="flex px-2 py-2 text-lg text-gray-400 font-semibold hover:underline transition-all">
                    Búsqueda
                </button>
                <button className="flex px-2 py-2 text-lg text-gray-400 font-semibold hover:underline transition-all">
                    Contacto
                </button>
            </div>
        </div>
    );
};

export default NavBar;
