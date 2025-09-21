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




        </>
    )
}

export default Contato
