import { useRef } from "react";

function Conta() {
    const loginRef = useRef<HTMLDivElement>(null);

    const scrollToLogin = () => {
        loginRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>

            <div className="bg-[url('../assets/images/hero_section.jpg')] bg-center bg-cover h-[100vh] w-[100vw] text-white p-15 flex flex-col justify-center items-start">
                <h1 className="text-7xl font-bold mb-5">SUA CONTA</h1>
                <p className="w-140 mb-5">
                    Gerencie sua conta, personalize seu perfil e aproveite ao máximo a experiência com o Melodia.
                </p>
                <button
                    onClick={scrollToLogin}
                    className="bg-[#7B00FF] hover:bg-[#5e00c4] px-6 py-3 rounded-full font-semibold transition"
                >
                    Acesse sua Conta
                </button>
            </div>


            <div
                ref={loginRef}
                className="bg-[#7B00FF] w-[100vw] text-white py-20 flex flex-col justify-center items-center text-center"
            >
                <h2 className="text-4xl font-bold mb-5">ACESSE A SUA CONTA</h2>
                <form className="bg-white rounded-2xl p-10 w-[90%] md:w-[60%] lg:w-[40%] text-black">
                    <input
                        type="email"
                        placeholder="E-mail"
                        className="w-full mb-4 px-4 py-3 rounded-md border border-gray-300 outline-none"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        className="w-full mb-4 px-4 py-3 rounded-md border border-gray-300 outline-none"
                        required
                    />
                    <button className="w-full bg-[#FF2C63] text-white py-3 rounded-full cursor-pointer hover:bg-[#c60044]">
                        Entrar
                    </button>
                </form>
                <p className="mt-5">
                    Não tem conta? <a href="#" className="text-[#FF2C63] font-bold">Cadastre-se</a>
                </p>
            </div>
            <div className="bg-[#FF2C63] w-full text-white py-20 px-6 flex flex-col justify-center items-center text-center overflow-hidden">
                <h2 className="text-4xl font-bold mb-12">BENEFÍCIO DE TER SUA CONTA</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full overflow-hidden">
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 origin-center">
                        <span className="text-4xl mb-4 block">🎵</span>
                        <h3 className="text-xl font-semibold mb-2">Playlists Personalizadas</h3>
                        <p className="text-sm opacity-80">
                            Crie playlists únicas de acordo com o seu gosto musical.
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 origin-center">
                        <span className="text-4xl mb-4 block">🔍</span>
                        <h3 className="text-xl font-semibold mb-2">Descoberta de Artistas</h3>
                        <p className="text-sm opacity-80">
                            Explore novos talentos e artistas exclusivos toda semana.
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 origin-center">
                        <span className="text-4xl mb-4 block">⭐</span>
                        <h3 className="text-xl font-semibold mb-2">Experiência Exclusiva</h3>
                        <p className="text-sm opacity-80">
                            Aproveite recursos premium e uma jornada musical diferenciada.
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 origin-center">
                        <span className="text-4xl mb-4 block">📺</span>
                        <h3 className="text-xl font-semibold mb-2">Live Streaming</h3>
                        <p className="text-sm opacity-80">
                            Acesse transmissões ao vivo dos seus artistas favoritos.
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Conta;
