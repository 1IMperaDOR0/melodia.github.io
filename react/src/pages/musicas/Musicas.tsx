{/*Capa de músicas */}
import natural from "../../assets/images/natural.webp";
import mtr from "../../assets/images/mtr.webp";
import rise from "../../assets/images/rise.webp";
import empitness from "../../assets/images/emptiness.webp";
import slavic from "../../assets/images/slavixqueen.webp";
import wickedgame from "../../assets/images/wickedgame.webp";
import radioactive from "../../assets/images/radioactive.jpg";
import mockingbird from "../../assets/images/mockingbird.jpg";
import maneira from "../../assets/images/maneira.jpg";
import temporal from "../../assets/images/temporal.jpg";
import zombie from "../../assets/images/zombie.jpg";
import atravessei from "../../assets/images/atravessei.webp";
{/*Capa de músicas */}
import album1 from "../../assets/images/album1.jpg";
import album2 from "../../assets/images/album2.jpg";
import album3 from "../../assets/images/album3.jpg";
import album4 from "../../assets/images/album4.jpg";
import album5 from "../../assets/images/album5.jpg";
import album6 from "../../assets/images/album6.jpg";
import album7 from "../../assets/images/album7.jpg";


function Musicas() {
    return (
        <>
            <div className="p-15">
                <p className="text-2xl">Novidades</p>
                <div className="flex mt-3 flex-wrap gap-3">
                    <div className="w-95 h-60 rounded-lg">
                        <p className="text-black text-xl ml-2">Natural</p>
                        <p className="text-gray-800 ml-2">Imagine Dragons</p>
                        <div className="w-90 h-0.5 bg-[#f1f1f1] mb-1 ml-2"></div>
                        <img src={natural} alt="" className="w-95 h-45 rounded-lg" />
                    </div>
                    <div className="w-95 h-60 rounded-lg">
                        <p className="text-black text-xl ml-2">Miss the Rage</p>
                        <p className="text-gray-800 ml-2">Jeethz</p>
                        <div className="w-90 h-0.5 bg-[#f1f1f1] mb-1 ml-2"></div>
                        <img src={mtr} alt="" className="w-95 h-45 rounded-lg" />
                    </div>
                    <div className="w-95 h-60 rounded-lg">
                        <p className="text-black text-xl ml-2">Rise</p>
                        <p className="text-gray-800 ml-2">Skillet</p>
                        <div className="w-90 h-0.5 bg-[#f1f1f1] mb-1 ml-2"></div>
                        <img src={rise} alt="" className="w-95 h-45 rounded-lg" />
                    </div>
                </div>
            </div>
            <div className="bg-[#7B00FF] h-auto p-15">
                <p className="text-2xl text-white mb-3">Músicas mais recentes &gt;</p>
                <div>
                    <div className="h-auto flex gap-3 justify-center bg-[#460091] p-2 rounded-lg">
                        <div>
                            <div className="w-80 flex hover:bg-[#542685]">
                                <img src={natural} alt="" className="w-10 h-10" />
                                <p className="mt-2 ml-1 text-white">Natural - Imagine Dragons</p>
                            </div>
                            <div className="w-90 h-0.5 bg-[#370072] mb-1 mt-1"></div>
                            <div className="w-80 flex hover:bg-[#542685]">
                                <img src={rise} alt="" className="w-10 h-10" />
                                <p className="mt-2 ml-1 text-white">Rise - Skillet</p>
                            </div>
                            <div className="w-90 h-0.5 bg-[#370072] mb-1 mt-1"></div>
                            <div className="w-80 flex hover:bg-[#542685]">
                                <img src={mtr} alt="" className="w-10 h-10" />
                                <p className="mt-2 ml-1 text-white">Miss The Rage - Jeethz</p>
                            </div>
                            <div className="w-90 h-0.5 bg-[#370072] mb-1 mt-1"></div>
                            <div className="w-80 flex hover:bg-[#542685]">
                                <img src={empitness} alt="" className="w-10 h-10" />
                                <p className="mt-2 ml-1 text-white">The Emptiness Machine - Linkin Park</p>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="w-80 flex hover:bg-[#542685]">
                                <img src={slavic} alt="" className="w-10 h-10" />
                                <p className="mt-2 ml-1 text-white">Slavic Queen - Filip Lackovic</p>
                            </div>
                            <div className="w-90 h-0.5 bg-[#370072] mb-1 mt-1"></div>
                            <div className="w-80 flex hover:bg-[#542685]">
                                <img src={wickedgame} alt="" className="w-10 h-10" />
                                <p className="mt-2 ml-1 text-white">Wicked Game - Chris Isaak</p>
                            </div>
                            <div className="w-90 h-0.5 bg-[#370072] mb-1 mt-1"></div>
                            <div className="w-80 flex hover:bg-[#542685]">
                                <img src={radioactive} alt="" className="w-10 h-10" />
                                <p className="mt-2 ml-1 text-white">Radioactive - Imagine Dragons</p>
                            </div>
                            <div className="w-90 h-0.5 bg-[#370072] mb-1 mt-1"></div>
                            <div className="w-80 flex hover:bg-[#542685]">
                                <img src={mockingbird} alt="" className="w-10 h-10" />
                                <p className="mt-2 ml-1 text-white">Mockingbird - Eminem</p>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <div className="w-80 flex hover:bg-[#542685]">
                                <img src={maneira} alt="" className="w-10 h-10" />
                                <p className="mt-2 ml-1 text-white">À Sua Maneira - Capital Inicial</p>
                            </div>
                            <div className="w-90 h-0.5 bg-[#370072] mb-1 mt-1"></div>
                            <div className="w-80 flex hover:bg-[#542685]">
                                <img src={temporal} alt="" className="w-10 h-10" />
                                <p className="mt-2 ml-1 text-white">Temporal - Hungria</p>
                            </div>
                            <div className="w-90 h-0.5 bg-[#370072] mb-1 mt-1"></div>
                            <div className="w-80 flex hover:bg-[#542685]">
                                <img src={zombie} alt="" className="w-10 h-10" />
                                <p className="mt-2 ml-1 text-white">Zombie - The Cranberries</p>
                            </div>
                            <div className="w-90 h-0.5 bg-[#370072] mb-1 mt-1"></div>
                            <div className="w-80 flex hover:bg-[#542685]">
                                <img src={atravessei} alt="" className="w-10 h-10" />
                                <p className="mt-2 ml-1 text-white">Atravessei São Paulo - Duzz</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#FF2C63] h-auto py-15">
                <p className="text-2xl mb-3 ml-15">Playlists &gt;</p>
                <div className="flex flex-wrap gap-3 ml-15">
                    <div className="flex flex-col w-45">
                        <img src={album1} alt="" className="w-45 h-45" />
                        <p>Novidades do dia</p>
                    </div>
                    <div className="flex flex-col w-45">
                        <img src={album2} alt="" className="w-45 h-45" />
                        <p>Marília Mendonça</p>
                    </div>
                    <div className="flex flex-col w-45">
                        <img src={album3} alt="" className="w-45 h-45" />
                        <p>Só sertanejo</p>
                    </div>
                    <div className="flex flex-col w-45">
                        <img src={album4} alt="" className="w-45 h-45" />
                        <p>Racionais</p>
                    </div>
                    <div className="flex flex-col w-45">
                        <img src={album5} alt="" className="w-45 h-45" />
                        <p>O Rei 👑</p>
                    </div>
                    <div className="flex flex-col w-45">
                        <img src={album6} alt="" className="w-45 h-45" />
                        <p>Sétimo Som</p>
                    </div>
                    <div className="flex flex-col w-45">
                        <img src={album7} alt="" className="w-45 h-45" />
                        <p>Skillet</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Musicas