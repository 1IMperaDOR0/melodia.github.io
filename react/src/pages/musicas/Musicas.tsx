import natural from "../../assets/images/natural.webp";
import mtr from "../../assets/images/mtr.webp";
import rise from "../../assets/images/rise.webp";
import empitness from "../../assets/images/emptiness.webp";
import slavic from "../../assets/images/slavixqueen.webp";
import wickedgame from "../../assets/images/wickedgame.webp";

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
                            <div className="w-80 flex">
                                <img src={natural} alt="" className="w-10 h-10" />
                                <p className="mt-2 ml-1 text-white">Natural - Imagine Dragons</p>
                            </div>
                            <div className="w-90 h-0.5 bg-[#370072] mb-1 mt-1"></div>
                            <div className="w-80 flex">
                                <img src={rise} alt="" className="w-10 h-10" />
                                <p className="mt-2 ml-1 text-white">Rise - Skillet</p>
                            </div>
                            <div className="w-90 h-0.5 bg-[#370072] mb-1 mt-1"></div>
                            <div className="w-80 flex">
                                <img src={mtr} alt="" className="w-10 h-10" />
                                <p className="mt-2 ml-1 text-white">Miss The Rage - Jeethz</p>
                            </div>
                            <div className="w-90 h-0.5 bg-[#370072] mb-1 mt-1"></div>
                            <div className="w-80 flex">
                                <img src={empitness} alt="" className="w-10 h-10" />
                                <p className="mt-2 ml-1 text-white">The Emptiness Machine - Linkin Park</p>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="w-80 flex">
                                <img src={slavic} alt="" className="w-10 h-10" />
                                <p className="mt-2 ml-1 text-white">Slavic Queen - Filip Lackovic</p>
                            </div>
                            <div className="w-90 h-0.5 bg-[#370072] mb-1 mt-1"></div>
                            <div className="w-80 flex">
                                <img src={wickedgame} alt="" className="w-10 h-10" />
                                <p className="mt-2 ml-1 text-white">Wicked Game - Chris Isaak</p>
                            </div>
                            <div className="w-90 h-0.5 bg-[#370072] mb-1 mt-1"></div>
                            <div className="w-80 flex">
                                <img src="" alt="" className="w-10 h-10" />
                                <p className="mt-2 ml-1 text-white">==================</p>
                            </div>
                            <div className="w-90 h-0.5 bg-[#370072] mb-1 mt-1"></div>
                            <div className="w-80 flex">
                                <img src="" alt="" className="w-10 h-10" />
                                <p className="mt-2 ml-1 text-white">==================</p>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <div className="w-80 flex">
                                <img src="" alt="" className="w-10 h-10" />
                                <p className="mt-2 ml-1 text-white">==================</p>
                            </div>
                            <div className="w-90 h-0.5 bg-[#370072] mb-1 mt-1"></div>
                            <div className="w-80 flex">
                                <img src="" alt="" className="w-10 h-10" />
                                <p className="mt-2 ml-1 text-white">==================</p>
                            </div>
                            <div className="w-90 h-0.5 bg-[#370072] mb-1 mt-1"></div>
                            <div className="w-80 flex">
                                <img src="" alt="" className="w-10 h-10" />
                                <p className="mt-2 ml-1 text-white">==================</p>
                            </div>
                            <div className="w-90 h-0.5 bg-[#370072] mb-1 mt-1"></div>
                            <div className="w-80 flex">
                                <img src="" alt="" className="w-10 h-10" />
                                <p className="mt-2 ml-1 text-white">==================</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#FF2C63] h-auto p-15">
                <p>Lançamentos de Álbuns &gt;</p>
            </div>
        </>
    )
}

export default Musicas