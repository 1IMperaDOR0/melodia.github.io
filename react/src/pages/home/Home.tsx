import jessica from '../../assets/images/jessica.png'
import carol from '../../assets/images/carol.png'
import michael from '../../assets/images/michael.png'

function Home() {
    return (
        <>
            <div className="bg-[#a594b8] lg:bg-[url('../assets/images/hero_section.jpg')] md:bg-[url('../assets/images/hero_section.jpg')] bg-center bg-cover h-[100vh] w-[100vw] text-white p-15 flex flex-col justify-center">
                <h1 className="text-4xl font-bold mb-5 lg:text-7xl md:text-7xl">VIVA A MÚSICA</h1>
                <p className="max-w-140 mb-5">A melodia é uma plataforma de música digital que conecta artistas e ouvintes, oferecendo playlists exclusivas, descoberta de novos talentos e experiências sonoras únicas.</p>
                <a href="#"><button className="max-w-60 px-5 cursor-pointer bg-[#7B00FF] py-3 rounded-full mb-5 hover:bg-[#542685]">RESGISTRE AGORA</button></a>
                <h2 className="text-xl font-bold lg:text-2xl md:text-2xl">LIVE STREAMING NACIONAL!</h2>
            </div>
            <div className="bg-[#FF2C63] w-[100vw] text-white p-15 flex flex-col justify-center items-center text-center">
                <h1 className="text-4xl font-bold mb-5 lg:text-7xl md:text-7xl">TURNÊ MUSICAL</h1>
                <p className="max-w-200 mb-10">Prepare-se para viver a energia dos palcos com os maiores talentos da música! Junte-se a JESSICA, CAROL e MICHAEL em uma turnê inesquecível repleta de ritmo, emoção e muita vibração.</p>
                <div className="flex flex-col items-center gap-10 w-[100%] lg:flex-row lg:justify-between md:flex-row md:justify-between">
                    <img src={jessica} className="w-[100%] lg:w-[30%] md:w-[30%]"/>
                    <img src={carol} className="w-[100%] lg:w-[30%] md:w-[30%]"/>
                    <img src={michael} className="w-[100%] lg:w-[30%] md:w-[30%]"/>
                </div>
            </div>
            <div className="bg-[#7B00FF] w-[100vw] text-white p-15 pb-30 flex flex-col justify-center items-center text-center">
                <h1 className="text-4xl font-bold mb-5 lg:text-7xl md:text-7xl">NOSSAS ESTATÍSTICAS</h1>
                <p className="max-w-200 mb-30">Com talentos incríveis, eventos vibrantes e uma comunidade apaixonada, você está prestes a embarcar em uma experiência que vai movimentar todos os seus sentidos.</p>
                <div className="flex flex-col overflow-y-hidden gap-30 w-[100%] lg:flex-row lg:justify-between md:flex-row md:justify-between">
                    <h2 className='text-3xl font-bold'>1500+ <br/> Clube</h2>
                    <h2 className='text-3xl font-bold'>3000+ <br/> Membros <br/> Ativos</h2>
                    <h2 className='text-3xl font-bold'>4500+ <br/> Artistas</h2>
                </div>
            </div>
            <div className="bg-[#FF2C63] w-[100vw] text-white py-45 px-15 flex flex-col justify-center items-center text-center">
                <h1 className="text-4xl font-bold mb-5 lg:text-7xl md:text-7xl">INSCREVA-SE</h1>
                <p className="max-w-150 mb-10">Inscreva-se com seu e-mail e receba novidades exclusivas, lançamentos e experiências musicais direto na sua caixa de entrada.</p>
                <div className='bg-white rounded-full min-w-85'>
                    <input type="email" placeholder="Seu e-mail" className='w-auto px-6 py-3 outline-none placeholder-gray-500 text-black lg:w-100 md:w-100' required/>
                    <button className='cursor-pointer bg-[#7B00FF] px-6 py-3 rounded-r-full hover:bg-[#542685]'>Inscrever</button>
                </div>
            </div>
        </>
    )
}

export default Home