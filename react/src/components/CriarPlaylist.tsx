import { useState } from "react";
import play1 from "../assets/images/play1.jpeg";
import play2 from "../assets/images/play2.jpeg";
import play3 from "../assets/images/play3.jpeg";
import play4 from "../assets/images/play4.jpeg";
import play5 from "../assets/images/play5.jpeg";
import play6 from "../assets/images/play6.jpeg";

const imagensDisponiveis: string[] = [play1, play2, play3, play4, play5, play6];

interface Playlist {
  nome: string;
  imagem: string;
}

interface CriarPlaylistProps {
  adicionarPlaylist: (nova: Playlist) => void;
}

const CriarPlaylist: React.FC<CriarPlaylistProps> = ({ adicionarPlaylist }) => {
  const [nome, setNome] = useState<string>("");
  const [imagemSelecionada, setImagemSelecionada] = useState<string>(imagensDisponiveis[0]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!nome.trim()) return;

    const novaPlaylist: Playlist = {
      nome,
      imagem: imagemSelecionada,
    };

    adicionarPlaylist(novaPlaylist);
    setNome("");
    setImagemSelecionada(imagensDisponiveis[0]);
  };

  return (
    <section className="w-full flex flex-col items-center gap-10">
      <h2 className="text-4xl text-white font-bold lg:text-7xl md:text-7xl">CRIAR NOVA PLAYLIST</h2>
      <p className="text-white text-base md:text-max-w-140">Dê nome à sua nova playlist, escolha uma imagem que combine com o seu estilo e organize suas músicas favoritas do seu jeito.</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md bg-white p-15 rounded-2xl">
        <input
          type="text"
          placeholder="Nome da Playlist"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 outline-0"
          required
        />
        <label className="text-xl font-bold">Escolha uma imagem:</label>
        <div className="grid gap-3 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          {imagensDisponiveis.map((img, index) => (
            <img
              key={index}
              src={img}
              onClick={() => setImagemSelecionada(img)}
              className={`cursor-pointer rounded-md border-4 ${
                imagemSelecionada === img ? "border-[#FF2C63]" : "border-transparent"
              }`}
              alt={`Imagem ${index + 1}`}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <button type="submit" className="text-white max-w-60 px-5 cursor-pointer bg-[#7B00FF] py-3 rounded-full hover:bg-[#542685]">ADICIONAR PLAYLIST</button>
        </div>
      </form>
    </section>
  );
};

export default CriarPlaylist;