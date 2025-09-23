# Front-End - Melodia

## 🧠 1. Descrição

A melodia é uma plataforma digital de música que conecta artistas e ouvintes, oferecendo playlists exclusivas, descoberta de novos talentos e experiências sonoras únicas.
O objetivo é criar um espaço vibrante para quem deseja explorar novos estilos, acompanhar turnês, participar de eventos e construir uma jornada musical personalizada.

![Preview da Home](react/src/assets/images/home_preview.png)

---

## 🚀 2. Como executar

1. Clone este repositório:

   ```bash
   git clone https://github.com/1IMperaDOR0/melodia.github.io
   ```

2. Vá para a pasta react:

   ```bash
   cd react
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Rode o projeto em ambiente local:

   ```bash
   npm run dev
   ```

---

## 🧭 3. Estrutura geral/padronizada

### Navegação

* **Menu Web (`MenuWeb.tsx`)**: navegação principal com links para Home, Artistas, Músicas, Playlists e Conta.
* **Menu Mobile (`MenuMobile.tsx`)**: menu responsivo em tela lateral, controlado por `useState`.

### Cabeçalhos e Rodapés

* Todas as páginas possuem **cabeçalho responsivo** (menus) e blocos de **conteúdo centralizado**, com chamadas claras para ação.
* Estilo visual marcado pelas cores **#7B00FF** (roxo) e **#FF2C63** (rosa).

### Interatividade

* Uso de **React Hooks (`useState`, `useRef`)** para gerenciamento de estado e rolagem suave.
* Formulários funcionais (login, cadastro, contato, criação de playlist).

---

## 📄 4. Páginas e funções específicas

### 🏠 `Home.tsx` – Página Inicial

* Hero Section com chamada **“Viva a Música”**.
* Apresentação de artistas em destaque (Jessica, Carol, Michael).
* Bloco de estatísticas (número de clubes, membros e artistas).
* Formulário de inscrição para newsletter.

---

### 🎤 `Artistas.tsx` – Artistas

* Exibição de artistas com fotos, descrições e destaque de carreira.
* Layout em cards responsivos.

---

### 🎵 `Musicas.tsx` – Músicas

* Catálogo de músicas disponíveis.
* Estrutura em cards organizados por capa, nome e informações adicionais.

---

### 🎧 `Playlists.tsx` – Playlists

* Destaque para a playlist mais escutada.
* Grade de playlists personalizadas.
* Integração com o componente **`CriarPlaylist.tsx`**, que permite adicionar novas playlists com nome e imagem customizada.
* Seção “Compartilhar” para incentivar interação entre usuários.

---

### 👤 `Conta.tsx` – Conta

* Hero Section com chamada para acessar/gerenciar conta.
* Formulário de login.
* Sessão de benefícios de criar uma conta (playlists personalizadas, descoberta de artistas, experiências exclusivas e live streaming).

---

### 📬 `Contato.tsx` – Contato

* Hero Section com background personalizado.
* Formulário de contato com nome, e-mail e mensagem.
* Seção de outros canais (Facebook, Instagram, Twitter, YouTube e e-mail).

---

## 🎯 5. Resumo da estrutura

| Página              | Propósito                     | Destaques principais                                                                 |
| ------------------- | ----------------------------- | ------------------------------------------------------------------------------------ |
| `MenuWeb.tsx`       | Menu para desktops            | Navegação principal entre páginas; usa `NavLink` para destacar rota ativa            |
| `MenuMobile.tsx`    | Menu para dispositivos móveis | Menu lateral responsivo; controlado por `useState`; inclui overlay e botão de fechar |
| `Home.tsx`          | Apresentação inicial          | Hero section, artistas em turnê, estatísticas, inscrição                             |
| `Artistas.tsx`      | Catálogo de artistas          | Cards com imagens e informações                                                      |
| `Musicas.tsx`       | Catálogo de músicas           | Lista organizada de faixas                                                           |
| `CriarPlaylist.tsx` | Criar playlists               | Formulário com nome e imagem; seleção de capas pré-definidas; integração com state   |
| `Playlists.tsx`     | Gerenciamento de playlists    | Playlists pessoais + criação de novas playlists                                      |
| `Conta.tsx`         | Gestão da conta do usuário    | Login, benefícios exclusivos                                                         |
| `Contato.tsx`       | Canal de comunicação          | Formulário de contato + links para redes sociais                                     |

---

## 😎 6. Efeitos visuais e interações

* **Animações de hover** em botões e cards (`transform: scale`, `transition`).
* **Backgrounds com gradientes e imagens** personalizadas.
* **Formulários estilizados** com bordas arredondadas e foco destacado.
* **Menus responsivos** para dispositivos móveis e desktops.

---

## 👥 Integrantes A-Z

- Henrique de Oliveira Gomes
- Henrique Kolomyes Silveira
- Matheus Santos de Oliveira
- Lucas Henrique Viana Estevam Sena
- Vinicius Alexandre Aureliano Ribeiro

---

## 🔗 Links

- Solution URL: [https://github.com/1IMperaDOR0/melodia.github.io](https://github.com/1IMperaDOR0/melodia.github.io)
- Live Site URL: [https://1imperador0.github.io/melodia.github.io/](https://1imperador0.github.io/melodia.github.io/)

---

## 📜 Licença

Projeto acadêmico. Uso livre para fins educacionais.