import { Link } from 'react-router-dom';

function Footer() {

    return (
        <>
            <div className="bg-[#7B00FF] text-white py-10 px-15 flex flex-col items-center gap-5">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 md:grid-cols-3">
                    <div className="flex flex-col justify-center items-center text-center lg:text-start lg:items-start md:text-start md:items-start">
                        <h2 className="text-2xl font-bold mb-3">melodia</h2>
                        <p className="text-sm mb-6 max-w-70">Transformamos sons em experiências. A melodia é onde a paixão pela música encontra a inovação.</p>
                        <div className="flex gap-3">
                            <a href="#" className="h-8 w-8 bg-gray-400 rounded-full flex justify-center items-center"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="h-8 w-8 bg-gray-400 rounded-full flex justify-center items-center"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="h-8 w-8 bg-gray-400 rounded-full flex justify-center items-center"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="h-8 w-8 bg-gray-400 rounded-full flex justify-center items-center"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center text-center lg:items-start md:text-start md:items-start">
                        <h3 className="text-2xl font-bold mb-3">SOBRE</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#">Quem somos</a></li>
                            <li><a href="#">Nossa missão</a></li>
                            <li><a href="#">Equipe</a></li>
                            <li><a href="#">Parcerias</a></li>
                            <li><Link to="/contato">Contato</Link></li>
                        </ul>
                    </div>

                    <div className="flex flex-col justify-center items-center text-center lg:items-start md:text-start md:items-start">
                        <h3 className="text-2xl font-bold mb-3">SERVIÇOS</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#">Streaming de músicas</a></li>
                            <li><a href="#">Playlists personalizadas</a></li>
                            <li><a href="#">Upload de faixas</a></li>
                            <li><a href="#">Live streaming</a></li>
                            <li><a href="#">Planos premium</a></li>
                        </ul>
                    </div>

                    <div className="flex flex-col justify-center items-center text-center lg:items-start md:text-start md:items-start">
                        <h3 className="text-2xl font-bold mb-3">OUTROS</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#">Suporte</a></li>
                            <li><a href="#">Termos de uso</a></li>
                            <li><a href="#">Política de privacidade</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Comunidade</a></li>
                        </ul>
                    </div>
                </div>

                <p className="text-center text-gray-100 pt-5">© 2025 <b>melodia</b>. Todos os direitos reservados.</p>
            </div>
        </>
    )
}

export default Footer