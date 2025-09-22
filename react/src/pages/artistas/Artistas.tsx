import jessica from '../../assets/images/jessica.png'
import carol from '../../assets/images/carol.png'
import michael from '../../assets/images/michael.png'
import luna from '../../assets/images/Luna.jpeg'
import alex from '../../assets/images/Alex.jpeg'
import sophia from '../../assets/images/Sophia.jpeg'
import davi from '../../assets/images/Davi.jpeg'
import marina from '../../assets/images/Marina.jpeg'
import bruno from '../../assets/images/Bruno.jpeg'
import heroImage from '../../assets/images/Hero.avif'
import { useState } from 'react'

function Artistas() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    return (
        <>
            {/* Hero Section */}
            <div className={`bg-center bg-cover h-[100vh] w-[100vw] text-white p-15 flex flex-col justify-center items-center text-center relative`} style={{backgroundImage: `url(${heroImage})`}}>
                <div className="absolute inset-0 bg-gradient-to-r from-[#7B00FF]/80 to-[#FF2C63]/80"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl font-bold mb-5 lg:text-7xl md:text-7xl">NOSSOS ARTISTAS</h1>
                    <p className="max-w-200 mb-5 text-lg">Conheça os talentos incríveis que fazem parte da família Melodia. Cada artista traz sua própria essência e energia única para nossa plataforma.</p>
                </div>
            </div>

            {/* Featured Artists Section */}
            <div className="bg-[#7B00FF] w-[100vw] text-white p-15 py-30">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold mb-6 text-white lg:text-6xl md:text-6xl">ARTISTAS EM DESTAQUE</h2>
                    <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
                    <p className="text-lg text-white/90 max-w-3xl mx-auto">Conheça os talentos extraordinários que definem o som da nossa plataforma</p>
                </div>
                
                {/* Jessica */}
                <div className="flex flex-col lg:flex-row md:flex-row items-center mb-32 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] min-h-[600px] border-2 border-gray-200 hover:border-[#7B00FF]/30">
                    <div className="w-full lg:w-1/2 md:w-1/2 relative overflow-hidden">
                        <img src={jessica} alt="Jessica" className="w-full object-cover hover:scale-110 transition-transform duration-700"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#7B00FF]/20 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex gap-3">
                                <span className="bg-[#7B00FF] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">Pop</span>
                                <span className="bg-[#FF2C63] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">R&B</span>
                                <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">Soul</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 md:w-1/2 lg:pl-12 md:pl-12 p-8 lg:p-8 md:p-8">
                        <div className="mb-4">
                            <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-[#7B00FF] to-[#FF2C63] bg-clip-text text-transparent lg:text-5xl md:text-5xl">JESSICA</h3>
                            <div className="flex items-center text-gray-500 text-sm mb-4">
                                <span className="mr-4">🎤 Vocalista</span>
                                <span>📍 São Paulo</span>
                            </div>
                        </div>
                        <p className="text-lg mb-8 leading-relaxed text-gray-700">
                            Jessica é uma artista versátil que transita entre pop, R&B e soul com uma voz marcante e performances envolventes. 
                            Seus últimos singles alcançaram milhares de streams e conquistaram fãs em todo o país.
                        </p>
                        <div className="grid grid-cols-2 gap-6 px-4">
                            <div className="bg-gradient-to-br from-[#7B00FF]/10 to-[#7B00FF]/20 p-4 rounded-xl border border-[#7B00FF]/20">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-[#7B00FF] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">👥</div>
                                    <div>
                                        <span className="block font-bold text-[#7B00FF] text-xl">450K</span>
                                        <p className="text-gray-600 text-sm">Seguidores</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-[#FF2C63]/10 to-[#FF2C63]/20 p-4 rounded-xl border border-[#FF2C63]/20">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-[#FF2C63] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">🎵</div>
                                    <div>
                                        <span className="block font-bold text-[#FF2C63] text-xl">2.3M</span>
                                        <p className="text-gray-600 text-sm">Streams</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-xl border border-purple-200">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">⏱️</div>
                                    <div>
                                        <span className="block font-bold text-purple-600 text-xl">5 anos</span>
                                        <p className="text-gray-600 text-sm">Carreira</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-green-100 to-green-200 p-4 rounded-xl border border-green-200">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">🏆</div>
                                    <div>
                                        <span className="block font-bold text-green-600 text-xl">#3</span>
                                        <p className="text-gray-600 text-sm">Ranking</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Carol */}
                <div className="flex flex-col lg:flex-row-reverse md:flex-row-reverse items-center mb-32 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] min-h-[600px] border-2 border-gray-200 hover:border-[#FF2C63]/30">
                    <div className="w-full lg:w-1/2 md:w-1/2 relative overflow-hidden">
                        <img src={carol} alt="Carol" className="w-full object-cover hover:scale-110 transition-transform duration-700"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#FF2C63]/20 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex gap-3">
                                <span className="bg-[#FF2C63] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">Indie Pop</span>
                                <span className="bg-[#7B00FF] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">Folk</span>
                                <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">Alternativo</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 md:w-1/2 lg:pr-12 md:pr-12 p-8 lg:p-8 md:p-8">
                        <div className="mb-4">
                            <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-[#FF2C63] to-[#7B00FF] bg-clip-text text-transparent lg:text-5xl md:text-5xl">CAROL</h3>
                            <div className="flex items-center text-gray-500 text-sm mb-4">
                                <span className="mr-4">🎸 Cantora/Compositora</span>
                                <span>📍 Rio de Janeiro</span>
                            </div>
                        </div>
                        <p className="text-lg mb-8 leading-relaxed text-gray-700">
                            Carol traz uma energia única ao indie pop e folk alternativo. Suas composições autorais tocam o coração 
                            e suas melodias ficam na cabeça por dias. Uma das promessas da nova geração musical.
                        </p>
                        <div className="grid grid-cols-2 gap-6 px-4">
                            <div className="bg-gradient-to-br from-[#FF2C63]/10 to-[#FF2C63]/20 p-4 rounded-xl border border-[#FF2C63]/20">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-[#FF2C63] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">👥</div>
                                    <div>
                                        <span className="block font-bold text-[#FF2C63] text-xl">320K</span>
                                        <p className="text-gray-600 text-sm">Seguidores</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-[#7B00FF]/10 to-[#7B00FF]/20 p-4 rounded-xl border border-[#7B00FF]/20">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-[#7B00FF] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">🎵</div>
                                    <div>
                                        <span className="block font-bold text-[#7B00FF] text-xl">1.8M</span>
                                        <p className="text-gray-600 text-sm">Streams</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-4 rounded-xl border border-orange-200">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">⏱️</div>
                                    <div>
                                        <span className="block font-bold text-orange-600 text-xl">3 anos</span>
                                        <p className="text-gray-600 text-sm">Carreira</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-xl border border-blue-200">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">🏆</div>
                                    <div>
                                        <span className="block font-bold text-blue-600 text-xl">#2</span>
                                        <p className="text-gray-600 text-sm">Ranking</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Michael */}
                <div className="flex flex-col lg:flex-row md:flex-row items-center mb-20 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] min-h-[600px] border-2 border-gray-200 hover:border-gray-400">
                    <div className="w-full lg:w-1/2 md:w-1/2 relative overflow-hidden">
                        <img src={michael} alt="Michael" className="w-full object-cover hover:scale-110 transition-transform duration-700"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-800/20 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex gap-3">
                                <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">Rock</span>
                                <span className="bg-[#7B00FF] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">Eletrônico</span>
                                <span className="bg-[#FF2C63] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">Alternativo</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 md:w-1/2 lg:pl-12 md:pl-12 p-8 lg:p-8 md:p-8">
                        <div className="mb-4">
                            <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-gray-700 to-[#7B00FF] bg-clip-text text-transparent lg:text-5xl md:text-5xl">MICHAEL</h3>
                            <div className="flex items-center text-gray-500 text-sm mb-4">
                                <span className="mr-4">🎸 Multi-instrumentista</span>
                                <span>📍 Belo Horizonte</span>
                            </div>
                        </div>
                        <p className="text-lg mb-8 leading-relaxed text-gray-700">
                            Michael domina o rock alternativo e o eletrônico com maestria. Suas produções inovadoras e shows 
                            energéticos fazem dele um dos artistas mais requisitados da plataforma.
                        </p>
                        <div className="grid grid-cols-2 gap-6 px-4">
                            <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-4 rounded-xl border border-gray-200">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">👥</div>
                                    <div>
                                        <span className="block font-bold text-gray-800 text-xl">680K</span>
                                        <p className="text-gray-600 text-sm">Seguidores</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-[#7B00FF]/10 to-[#7B00FF]/20 p-4 rounded-xl border border-[#7B00FF]/20">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-[#7B00FF] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">🎵</div>
                                    <div>
                                        <span className="block font-bold text-[#7B00FF] text-xl">3.1M</span>
                                        <p className="text-gray-600 text-sm">Streams</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-4 rounded-xl border border-yellow-200">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">⏱️</div>
                                    <div>
                                        <span className="block font-bold text-yellow-600 text-xl">7 anos</span>
                                        <p className="text-gray-600 text-sm">Carreira</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-red-100 to-red-200 p-4 rounded-xl border border-red-200">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">🏆</div>
                                    <div>
                                        <span className="block font-bold text-red-600 text-xl">#1</span>
                                        <p className="text-gray-600 text-sm">Ranking</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Emerging Artists Section */}
            <div className="bg-[#FF2C63] w-[100vw] text-white p-15 py-30">
                <h2 className="text-3xl font-bold mb-15 text-center lg:text-5xl md:text-5xl">ARTISTAS EMERGENTES</h2>
                <p className="text-center text-lg mb-20 max-w-200 mx-auto text-white/90">Conheça os novos talentos que estão conquistando espaço na cena musical nacional e internacional.</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
                    {/* Luna */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="h-64 relative overflow-hidden">
                            <img 
                                src={luna}
                                alt="Luna" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-600/50 to-pink-400/30"></div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-[#7B00FF]">LUNA</h3>
                            <div className="flex gap-2 mb-3 flex-wrap">
                                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs">Dream Pop</span>
                                <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs">Synthwave</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">Jovem produtora de 22 anos que mistura sonoridades dreamy com elementos eletrônicos nostálgicos.</p>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <div><span className="font-bold">85K</span> seguidores</div>
                                <div><span className="font-bold">450K</span> streams</div>
                                <div><span className="font-bold">2 anos</span> carreira</div>
                                <div><span className="font-bold">Curitiba</span></div>
                            </div>
                        </div>
                    </div>

                    {/* Alex */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="h-64 relative overflow-hidden">
                            <img 
                                src={alex}
                                alt="Alex" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-green-400/30"></div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-[#FF2C63]">ALEX</h3>
                            <div className="flex gap-2 mb-3 flex-wrap">
                                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">Rap</span>
                                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">Hip Hop</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">Rapper consciente que aborda questões sociais com flows únicos e letras impactantes.</p>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <div><span className="font-bold">120K</span> seguidores</div>
                                <div><span className="font-bold">680K</span> streams</div>
                                <div><span className="font-bold">3 anos</span> carreira</div>
                                <div><span className="font-bold">Salvador</span></div>
                            </div>
                        </div>
                    </div>

                    {/* Sofia */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="h-64 relative overflow-hidden">
                            <img 
                                src={sophia}
                                alt="Sofia" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-orange-600/50 to-red-400/30"></div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-[#7B00FF]">SOFIA</h3>
                            <div className="flex gap-2 mb-3 flex-wrap">
                                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs">Jazz</span>
                                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs">Bossa Nova</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">Vocalista refinada que reimagina clássicos do jazz e bossa nova com arranjos modernos.</p>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <div><span className="font-bold">95K</span> seguidores</div>
                                <div><span className="font-bold">320K</span> streams</div>
                                <div><span className="font-bold">4 anos</span> carreira</div>
                                <div><span className="font-bold">Recife</span></div>
                            </div>
                        </div>
                    </div>

                    {/* Davi */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="h-64 relative overflow-hidden">
                            <img 
                                src={davi} 
                                alt="Davi" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-800/60 to-black/40"></div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-[#FF2C63]">DAVI</h3>
                            <div className="flex gap-2 mb-3 flex-wrap">
                                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">Metal</span>
                                <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-xs">Progressive</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">Guitarrista virtuoso que explora territórios complexos do metal progressivo instrumental.</p>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <div><span className="font-bold">200K</span> seguidores</div>
                                <div><span className="font-bold">890K</span> streams</div>
                                <div><span className="font-bold">6 anos</span> carreira</div>
                                <div><span className="font-bold">Porto Alegre</span></div>
                            </div>
                        </div>
                    </div>

                    {/* Marina */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="h-64 relative overflow-hidden">
                            <img 
                                src={marina}
                                alt="Marina" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-teal-600/50 to-blue-400/30"></div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-[#7B00FF]">MARINA</h3>
                            <div className="flex gap-2 mb-3 flex-wrap">
                                <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs">Eletrônica</span>
                                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">Ambient</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">Produtora experimental que cria paisagens sonoras imersivas e atmosféricas.</p>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <div><span className="font-bold">150K</span> seguidores</div>
                                <div><span className="font-bold">720K</span> streams</div>
                                <div><span className="font-bold">3 anos</span> carreira</div>
                                <div><span className="font-bold">Brasília</span></div>
                            </div>
                        </div>
                    </div>

                    {/* Bruno */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="h-64 relative overflow-hidden">
                            <img 
                                src={bruno}
                                alt="Bruno" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/50 to-orange-400/30"></div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-[#FF2C63]">BRUNO</h3>
                            <div className="flex gap-2 mb-3 flex-wrap">
                                <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-xs">Reggae</span>
                                <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs">Surf Rock</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">Músico versátil que une o relaxamento do reggae com a energia do surf rock californiano.</p>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <div><span className="font-bold">180K</span> seguidores</div>
                                <div><span className="font-bold">1.1M</span> streams</div>
                                <div><span className="font-bold">5 anos</span> carreira</div>
                                <div><span className="font-bold">Florianópolis</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-[#7B00FF] w-[100vw] text-white p-15 py-30 flex flex-col justify-center items-center text-center">
                <h2 className="text-3xl font-bold mb-5 lg:text-5xl md:text-5xl">ESTATÍSTICAS DOS ARTISTAS</h2>
                <p className="max-w-200 mb-20">Nossos artistas estão sempre crescendo e alcançando novos patamares na indústria musical.</p>
                <div className="flex flex-col gap-15 w-[100%] lg:flex-row lg:justify-between md:flex-row md:justify-between">
                    <div className="text-center">
                        <h3 className='text-4xl font-bold mb-3 lg:text-6xl md:text-6xl'>150+</h3>
                        <p className="text-lg">Artistas Ativos</p>
                    </div>
                    <div className="text-center">
                        <h3 className='text-4xl font-bold mb-3 lg:text-6xl md:text-6xl'>2M+</h3>
                        <p className="text-lg">Streams Mensais</p>
                    </div>
                    <div className="text-center">
                        <h3 className='text-4xl font-bold mb-3 lg:text-6xl md:text-6xl'>50+</h3>
                        <p className="text-lg">Países Alcançados</p>
                    </div>
                </div>
            </div>

            {/* Join Artists Section */}
            <div className="bg-[#FF2C63] w-[100vw] text-white py-30 px-15 flex flex-col justify-center items-center text-center">
                <h2 className="text-3xl font-bold mb-5 lg:text-5xl md:text-5xl">SEJA UM ARTISTA MELODIA</h2>
                <p className="max-w-200 mb-15 text-lg">
                    Você é músico, cantor ou produtor? Junte-se à nossa plataforma e alcance milhares de ouvintes 
                    ao redor do mundo. Compartilhe seu talento conosco!
                </p>
                <div className="flex justify-center">
                    <button 
                        onClick={openModal}
                        className="bg-white text-[#FF2C63] px-10 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all"
                    >
                        CADASTRAR COMO ARTISTA
                    </button>
                </div>
            </div>

            {/* Modal de Cadastro */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl max-w-lg w-full max-h-[95vh] overflow-y-auto shadow-2xl border border-gray-100">
                        <div className="relative">
                            {/* Header com gradiente */}
                            <div className="bg-gradient-to-r from-[#7B00FF] to-[#FF2C63] p-6 rounded-t-2xl">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h2 className="text-2xl font-bold text-white mb-1">CADASTRO DE ARTISTA</h2>
                                        <p className="text-white/80 text-sm">Faça parte da família Melodia</p>
                                    </div>
                                    <button 
                                        onClick={closeModal}
                                        className="text-white/80 hover:text-white text-2xl font-bold w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 transition-all"
                                    >
                                        ×
                                    </button>
                                </div>
                            </div>

                            {/* Formulário */}
                            <div className="p-6">
                                <form className="space-y-5">
                                    {/* Nome Artístico */}
                                    <div className="relative">
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            <span className="flex items-center">
                                                🎤 Nome Artístico
                                                <span className="text-red-500 ml-1">*</span>
                                            </span>
                                        </label>
                                        <input 
                                            type="text" 
                                            placeholder="Digite seu nome artístico"
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#7B00FF]/20 focus:border-[#7B00FF] outline-none transition-all bg-gray-50 focus:bg-white"
                                            required
                                        />
                                    </div>

                                    {/* Grid para Nome e Email */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                <span className="flex items-center">
                                                    👤 Nome Completo
                                                    <span className="text-red-500 ml-1">*</span>
                                                </span>
                                            </label>
                                            <input 
                                                type="text" 
                                                placeholder="Seu nome completo"
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#7B00FF]/20 focus:border-[#7B00FF] outline-none transition-all bg-gray-50 focus:bg-white"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                <span className="flex items-center">
                                                    📧 E-mail
                                                    <span className="text-red-500 ml-1">*</span>
                                                </span>
                                            </label>
                                            <input 
                                                type="email" 
                                                placeholder="seu@email.com"
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#7B00FF]/20 focus:border-[#7B00FF] outline-none transition-all bg-gray-50 focus:bg-white"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Grid para Telefone e Gênero */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                <span className="flex items-center">
                                                    📱 Telefone
                                                    <span className="text-red-500 ml-1">*</span>
                                                </span>
                                            </label>
                                            <input 
                                                type="tel" 
                                                placeholder="(11) 99999-9999"
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#7B00FF]/20 focus:border-[#7B00FF] outline-none transition-all bg-gray-50 focus:bg-white"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                <span className="flex items-center">
                                                    🎵 Gênero Musical
                                                    <span className="text-red-500 ml-1">*</span>
                                                </span>
                                            </label>
                                            <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#7B00FF]/20 focus:border-[#7B00FF] outline-none transition-all bg-gray-50 focus:bg-white" required>
                                                <option value="">Selecione o gênero</option>
                                                <option value="pop">🎤 Pop</option>
                                                <option value="rock">🎸 Rock</option>
                                                <option value="eletronica">🎛️ Eletrônica</option>
                                                <option value="hip-hop">🎤 Hip Hop</option>
                                                <option value="jazz">🎺 Jazz</option>
                                                <option value="reggae">🌴 Reggae</option>
                                                <option value="indie">🎸 Indie</option>
                                                <option value="folk">🪕 Folk</option>
                                                <option value="metal">⚡ Metal</option>
                                                <option value="outro">🎼 Outro</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Localização */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            <span className="flex items-center">
                                                📍 Cidade/Estado
                                                <span className="text-red-500 ml-1">*</span>
                                            </span>
                                        </label>
                                        <input 
                                            type="text" 
                                            placeholder="Ex: São Paulo/SP"
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#7B00FF]/20 focus:border-[#7B00FF] outline-none transition-all bg-gray-50 focus:bg-white"
                                            required
                                        />
                                    </div>

                                    {/* Grid para Redes e Link */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                <span className="flex items-center">
                                                    📱 Instagram/Redes
                                                </span>
                                            </label>
                                            <input 
                                                type="text" 
                                                placeholder="@seuinstagram"
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#7B00FF]/20 focus:border-[#7B00FF] outline-none transition-all bg-gray-50 focus:bg-white"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                <span className="flex items-center">
                                                    🎶 Link das Músicas
                                                </span>
                                            </label>
                                            <input 
                                                type="url" 
                                                placeholder="Spotify, YouTube..."
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#7B00FF]/20 focus:border-[#7B00FF] outline-none transition-all bg-gray-50 focus:bg-white"
                                            />
                                        </div>
                                    </div>

                                    {/* Sobre você */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            <span className="flex items-center">
                                                ✨ Conte sobre você
                                            </span>
                                        </label>
                                        <textarea 
                                            rows={3}
                                            placeholder="Sua trajetória musical, influências, projetos atuais..."
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#7B00FF]/20 focus:border-[#7B00FF] outline-none resize-none transition-all bg-gray-50 focus:bg-white"
                                        ></textarea>
                                    </div>

                                    {/* Card informativo */}
                                    <div className="bg-gradient-to-r from-[#7B00FF]/10 via-purple-50 to-[#FF2C63]/10 p-4 rounded-xl border border-purple-100">
                                        <div className="flex items-start space-x-3">
                                            <div className="bg-[#7B00FF] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">
                                                ℹ️
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-1">Próximos passos</h4>
                                                <p className="text-sm text-gray-600 leading-relaxed">
                                                    Nossa equipe analisará seu perfil em até <strong>7 dias úteis</strong>. 
                                                    Você receberá um e-mail com o resultado da avaliação e próximas instruções.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Botões */}
                                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                        <button 
                                            type="submit"
                                            className="flex-1 bg-gradient-to-r from-[#7B00FF] to-[#FF2C63] text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg hover:scale-[1.02] transition-all duration-200 flex items-center justify-center space-x-2"
                                        >
                                            <span>🚀</span>
                                            <span>ENVIAR CADASTRO</span>
                                        </button>
                                        <button 
                                            type="button"
                                            onClick={closeModal}
                                            className="flex-1 border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
                                        >
                                            CANCELAR
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Artistas