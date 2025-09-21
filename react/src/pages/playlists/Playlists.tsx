import play1 from "../../assets/images/play1.jpeg"
import play2 from "../../assets/images/play2.jpeg"
import play3 from "../../assets/images/play3.jpeg"
import play4 from "../../assets/images/play4.jpeg"
import play5 from "../../assets/images/play5.jpeg"
import play6 from "../../assets/images/play6.jpeg"


function Playlists() {
    return (
        <>
            <div className="min-h-screen w-full">

                <section className="bg-[#FF2C63] w-full py-12 px-8 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1 flex flex-col gap-4">
                        <h1 className="text-white font-bold text-4xl md:text-7xl font-family: Instrument Sans, sans-serif;">
                            PLAYLISTS</h1>
                        <p className="text-white text-base md:text-lg max-w-md font-family: Instrument Sans, sans-serif;">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </p>
                        <span className="text-white font-bold mt-2 text-sm md:text-base font-family: Instrument Sans, sans-serif;">
                            ESSA É SUA PLAYLIST MAIS ESCUTADA!
                        </span>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <img src={play3} className="rounded-xl w-60 h-60 md:w-80 md:h-80 lg:w-100 lg:h-100 shadow-lg object-cover"
                            alt="Playlist" />
                    </div>
                </section>


                <section className="bg-[#7B00FF] w-full py-14 px-8 flex flex-col items-center">
                    <h2 className="text-[#39FF14] font-bold text-3xl md:text-7xl mb-2 font-family: Instrument Sans, sans-serif;">
                        SUAS PLAYLISTS</h2>
                    <p className="text-[#39FF14] text-base md:text-lg mb-8 max-w-xl text-center font-family: Instrument Sans, sans-serif;">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-15 mt-4">
                        <img src={play1} className="rounded-xl w-60 h-60 md:w-80 md:h-80 lg:w-100 lg:h-100 shadow-lg object-cover"
                            alt="Playlist" />
                        <img src={play2} className="rounded-xl w-60 h-60 md:w-80 md:h-80 lg:w-100 lg:h-100 shadow-lg object-cover"
                            alt="Playlist" />
                        <img src={play3} className="rounded-xl w-60 h-60 md:w-80 md:h-80 lg:w-100 lg:h-100 shadow-lg object-cover"
                            alt="Playlist" />
                        <img src={play4} className="rounded-xl w-60 h-60 md:w-80 md:h-80 lg:w-100 lg:h-100 shadow-lg object-cover"
                            alt="Playlist" />
                        <img src={play5} className="rounded-xl w-60 h-60 md:w-80 md:h-80 lg:w-100 lg:h-100 shadow-lg object-cover"
                            alt="Playlist" />
                        <img src={play6} className="rounded-xl w-60 h-60 md:w-80 md:h-80 lg:w-100 lg:h-100 shadow-lg object-cover"
                            alt="Playlist" />    
                        
                    </div>
                     <p className="text-[#39FF14] text-base md:text-lg mt-10 max-w-xl text-center font-family: Instrument Sans, sans-serif;">
                        Carregar Mais
                    </p>
                </section>

                <section className="w-full flex-col md:flex-row items-center justify-between gap-8 bg-white">
                    <div
                        className= "bg-[url('../assets/images/smiley-young-friends-together-copy-space.jpg')] bg-center bg-cover md:h-[90vh] md:w-[90vw] lg:h-[100vh] lg:w-[100vw] text-white p-15 flex flex-col justify-center flex-1 flex flex-col gap-4">
                        <h2 className="text-[#FF2C63] font-bold text-3xl md:text-5xl font-family: Instrument Sans, sans-serif;">
                            COMPARTILHAR</h2>
                        <p className="text-[#FF2C63] text-base md:text-lg font-family: Instrument Sans, sans-serif;">
                            Compartilhe suas playlists com amigos!
                        </p>
                        <button
                            className="bg-[#FF2C63] text-white font-bold py-3 px-8 rounded-full mt-4 w-fit shadow-lg hover:bg-[#e02657] transition-colors font-family: Instrument Sans, sans-serif;">
                            COMPARTILHAR AGORA
                        </button>
                    </div>

                </section>
            </div>
        </>
    )
}

export default Playlists