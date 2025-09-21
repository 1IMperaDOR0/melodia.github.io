function Conta() {
    return (
        <>
             <div className="bg-[url('../assets/images/hero_section.jpg')] bg-center bg-cover h-[100vh] w-[100vw] text-white p-15 flex flex-col justify-center">
                <h1 className="text-7xl font-bold mb-5">SUA CONTA</h1>
                <p className="w-140 mb-5">Gerencie sua conta, personalize seu perfil e aproveite ao máximo a experiência com o Melodia.</p>
            </div>

            <div className="bg-[#7B00FF] w-[100vw] text-white py-20 flex flex-col justify-center items-center text-center">
                <h2 className="text-4xl font-bold mb-5">Acesse sua conta</h2>
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
                <p className="mt-5">Não tem conta? <a href="#" className="text-[#FF2C63] font-bold">Cadastre-se</a></p>
            </div>

            <div className="bg-[#FF2C63] w-[100vw] text-white py-20 flex flex-col justify-center items-center text-center">
                <h2 className="text-3xl font-bold mb-5">Benefícios de ter uma conta</h2>
                <ul className="max-w-150 text-left space-y-3">
                    <li>✔ Criação de playlists personalizadas</li>
                    <li>✔ Descoberta de novos artistas</li>
                    <li>✔ Experiência musical exclusiva</li>
                    <li>✔ Acesso ao live streaming</li>
                </ul>
            </div>
        </>
    )
}

export default Conta
