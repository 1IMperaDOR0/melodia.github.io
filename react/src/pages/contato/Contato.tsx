import imagemMina from '../../assets/images/imagem_mina.jpg'

function Contato() {
    return (
        <>
            <div 
            className="relative bg-center bg-cover h-[100vh] w-[100vw] text-white p-15 flex flex-col justify-center items-center text-center"
            style={{ backgroundImage: `url(${imagemMina})` }}
        >
            
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>


            <div className="relative z-10">
                <h1 className="text-7xl font-bold mb-5 drop-shadow-lg">FALE CONOSCO</h1>
                <p className="max-w-150 mb-5 drop-shadow-lg">
                    Entre em contato com nossa equipe. Estamos prontos para ouvir você e ajudar da melhor forma possível.
                </p>
            </div>
        </div>

        <div className="bg-[#7B00FF] w-[100vw] text-white p-15 flex flex-col justify-center items-center text-center">
                <h2 className="text-4xl font-bold mb-5">ENVIE SUA MENSAGEM</h2>
                <p className="max-w-150 mb-10">Preencha o formulário abaixo e responderemos o mais rápido possível.</p>
                <form className="bg-white rounded-2xl p-10 w-[90%] md:w-[60%] lg:w-[40%] text-black">
                    <input 
                        type="text" 
                        placeholder="Seu nome" 
                        className="w-full mb-4 px-4 py-3 rounded-md border border-gray-300 outline-none" 
                        required
                    />
                    <input 
                        type="email" 
                        placeholder="Seu e-mail" 
                        className="w-full mb-4 px-4 py-3 rounded-md border border-gray-300 outline-none" 
                        required
                    />
                    <textarea 
                        placeholder="Sua mensagem" 
                        className="w-full mb-4 px-4 py-3 rounded-md border border-gray-300 outline-none h-40 resize-none" 
                        required
                    />
                    <button className="w-full bg-[#FF2C63] text-white py-3 rounded-full cursor-pointer hover:bg-[#5a00bb]">
                        Enviar
                    </button>
                </form>
            </div>
            <div className="bg-[#FF2C63] w-[100vw] text-[#7B00FF] py-20 px-15 flex flex-col justify-center items-center text-center">
                <h2 className="text-3xl font-bold text-white mb-5">OUTROS CANAIS</h2>
                <p className="max-w-150 text-white mb-10">Você também pode nos encontrar nas redes sociais ou diretamente em nosso e-mail.</p>
                <div className="flex flex-col lg:flex-row md:flex-row gap-5">
                    <a href="#" className="px-6 py-3 bg-[#4AFF4A] rounded-full">Facebook</a>
                    <a href="#" className="px-6 py-3 bg-[#4AFF4A] rounded-full">Instagram</a>
                    <a href="#" className="px-6 py-3 bg-[#4AFF4A] rounded-full">Twitter</a>
                    <a href="#" className="px-6 py-3 bg-[#4AFF4A] rounded-full">youtube</a>
                    <a href="mailto:suporte@melodia.com" className="px-6 py-3 bg-[#4AFF4A] rounded-full">E-mail</a>
                </div>
            </div>



        </>
    )
}

export default Contato
