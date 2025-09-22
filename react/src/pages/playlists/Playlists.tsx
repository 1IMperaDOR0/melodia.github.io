import { useState } from "react";
import play1 from "../../assets/images/play1.jpeg";
import play2 from "../../assets/images/play2.jpeg";
import play3 from "../../assets/images/play3.jpeg";
import play4 from "../../assets/images/play4.jpeg";
import play5 from "../../assets/images/play5.jpeg";
import play6 from "../../assets/images/play6.jpeg";
import CriarPlaylist from "../../components/CriarPlaylist";

interface Playlist {
  nome: string;
  imagem: string;
}

function Playlists() {
  const [playlists, setPlaylists] = useState<Playlist[]>([
    { nome: "Playlist 1", imagem: play1 },
    { nome: "Playlist 2", imagem: play2 },
    { nome: "Playlist 3", imagem: play3 },
    { nome: "Playlist 4", imagem: play4 },
    { nome: "Playlist 5", imagem: play5 },
    { nome: "Playlist 6", imagem: play6 },
  ]);

  const adicionarPlaylist = (novaPlaylist: Playlist) => {
    setPlaylists((prev) => [...prev, novaPlaylist]);
  };

  return (
    <div className="min-h-screen w-full">
      <section className="bg-[#FF2C63] w-full py-12 px-15 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-white font-bold text-4xl md:text-7xl font-family: Instrument Sans, sans-serif;">
            PLAYLISTS
          </h1>
          <p className="text-white text-base md:text-lg max-w-md font-family: Instrument Sans, sans-serif;">
            Com a melodia, você encontra a trilha sonora perfeita para todos os momentos. Explore playlists personalizadas e compartilhe suas músicas favoritas com os amigos.
          </p>
          <span className="text-white font-bold mt-2 text-sm md:text-base font-family: Instrument Sans, sans-serif;">
            ESSA É SUA PLAYLIST MAIS ESCUTADA:
          </span>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="rounded-xl overflow-hidden bg-black max-w-[260px] md:max-w-[300px] lg:max-w-[400px] mx-auto">
            <img
              src={play3}
              className="aspect-square w-full shadow-lg object-cover transition duration-300 ease-in-out hover:scale-105"
              alt="Playlist"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#7B00FF] w-full py-14 px-15 flex flex-col items-center">
        <h2 className="text-[#FFF] font-bold text-3xl md:text-7xl mb-2 font-family: Instrument Sans, sans-serif;">
          SUAS PLAYLISTS
        </h2>
        <p className="text-[#FFF] text-base md:text-lg mb-8 max-w-xl text-center font-family: Instrument Sans, sans-serif;">
          Descubra e compartilhe suas playlists favoritas com a melodia. A música certa para cada momento!
        </p>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 justify-center">
          {playlists.map((playlist, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden bg-black max-w-[160px] md:max-w-[200px] lg:max-w-[300px] mx-auto flex flex-col items-center"
            >
              <img
                src={playlist.imagem}
                className="aspect-square w-full shadow-lg object-cover transition duration-300 ease-in-out hover:scale-105"
                alt={playlist.nome}
              />
              <p className="text-white py-2 font-semibold mt-2 text-center">{playlist.nome}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#FF2C63] w-full py-12 px-15 ">
        <CriarPlaylist adicionarPlaylist={adicionarPlaylist} />
      </section>

      <section className="w-full flex-col md:flex-row items-center justify-between gap-8 bg-white">
        <div className="bg-[url('../assets/images/smiley-young-friends-together-copy-space.jpg')] bg-center bg-cover md:h-[90vh] md:w-[90vw] lg:h-[100vh] lg:w-[100vw] text-white p-15 flex flex-col justify-center flex-1 flex flex-col gap-4">
          <h2 className="text-[#FF2C63] font-bold text-3xl md:text-5xl font-family: Instrument Sans, sans-serif;">
            COMPARTILHAR
          </h2>
          <p className="text-[#FF2C63] text-base md:text-lg font-family: Instrument Sans, sans-serif;">
            Compartilhe suas playlists com amigos!
          </p>
          <button className="bg-[#FF2C63] text-white font-bold py-3 px-15 rounded-full mt-4 w-fit shadow-lg hover:bg-[#e02657] transition-colors font-family: Instrument Sans, sans-serif;">
            COMPARTILHAR AGORA
          </button>
        </div>
      </section>
    </div>
  );
}

export default Playlists;