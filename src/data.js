const data = [
    {
      id: 1,
      titulo: "Naruto",
      imagem: "",
      banner: "",
      avaliacao: 4.7,
      episodios: 220,
      ano: 2002,
      genero: "Ação, Aventura",
      sinopse: "A história de Naruto Uzumaki, um jovem ninja que busca reconhecimento e sonha em se tornar Hokage, o líder de sua vila."
    },
    {
      id: 2,
      titulo: "Attack on Titan",
      imagem: "",
      banner: "/path/to/aot-banner.jpg",
      avaliacao: 4.8,
      episodios: 75,
      ano: 2013,
      genero: "Ação, Drama, Fantasia",
      sinopse: "Humanidade luta contra gigantes humanoides chamados Titãs, que quase exterminaram a civilização."
    },
    {
      id: 3,
      titulo: "One Piece",
      imagem: "/path/to/onepiece.jpg",
      banner: "/path/to/onepiece-banner.jpg",
      avaliacao: 4.9,
      episodios: 1000,
      ano: 1999,
      genero: "Ação, Aventura, Comédia",
      sinopse: "Monkey D. Luffy e sua tripulação de piratas exploram o mundo em busca do tesouro One Piece."
    },
    {
      id: 4,
      titulo: "Fullmetal Alchemist: Brotherhood",
      imagem: "/path/to/fma.jpg",
      banner: "/path/to/fma-banner.jpg",
      avaliacao: 4.9,
      episodios: 64,
      ano: 2009,
      genero: "Ação, Aventura, Drama",
      sinopse: "Dois irmãos alquimistas, Edward e Alphonse Elric, buscam a Pedra Filosofal para restaurar seus corpos após uma transmutação fracassada."
    },
    {
      id: 5,
      titulo: "My Hero Academia",
      imagem: "/path/to/mha.jpg",
      banner: "/path/to/mha-banner.jpg",
      avaliacao: 4.6,
      episodios: 88,
      ano: 2016,
      genero: "Ação, Super-herói",
      sinopse: "Em um mundo onde quase todos têm superpoderes, um jovem sem poderes sonha em se tornar o maior herói."
    },
    {
      id: 6,
      titulo: "Demon Slayer",
      imagem: "/path/to/demonslayer.jpg",
      banner: "/path/to/demonslayer-banner.jpg",
      avaliacao: 4.8,
      episodios: 26,
      ano: 2019,
      genero: "Ação, Fantasia",
      sinopse: "Tanjiro Kamado se junta a um grupo de caçadores de demônios para vingar sua família e curar sua irmã que foi transformada em demônio."
    },
    {
      id: 7,
      titulo: "Death Note",
      imagem: "/path/to/deathnote.jpg",
      banner: "/path/to/deathnote-banner.jpg",
      avaliacao: 4.7,
      episodios: 37,
      ano: 2006,
      genero: "Mistério, Sobrenatural",
      sinopse: "Light Yagami encontra um caderno que lhe permite matar qualquer pessoa ao escrever seu nome e decide usá-lo para eliminar criminosos."
    },
    {
      id: 8,
      titulo: "Sword Art Online",
      imagem: "/path/to/sao.jpg",
      banner: "/path/to/sao-banner.jpg",
      avaliacao: 4.5,
      episodios: 96,
      ano: 2012,
      genero: "Ação, Aventura, Fantasia",
      sinopse: "Jogadores ficam presos em um jogo de realidade virtual e precisam completar o jogo para escapar."
    },
    {
      id: 9,
      titulo: "Tokyo Ghoul",
      imagem: "/path/to/tokyoghoul.jpg",
      banner: "/path/to/tokyoghoul-banner.jpg",
      avaliacao: 4.6,
      episodios: 24,
      ano: 2014,
      genero: "Ação, Horror, Sobrenatural",
      sinopse: "Ken Kaneki é transformado em meio-ghoul após um ataque e precisa lidar com sua nova vida enquanto esconde sua identidade."
    },
    {
      id: 10,
      titulo: "Steins;Gate",
      imagem: "/path/to/steinsgate.jpg",
      banner: "/path/to/steinsgate-banner.jpg",
      avaliacao: 4.9,
      episodios: 24,
      ano: 2011,
      genero: "Ficção Científica, Thriller",
      sinopse: "Um grupo de amigos descobre um método de enviar mensagens ao passado, desencadeando uma série de eventos que mudam a história."
    },
    {
      id: 11,
      titulo: "Hunter x Hunter",
      imagem: "/path/to/hxh.jpg",
      banner: "/path/to/hxh-banner.jpg",
      avaliacao: 4.8,
      episodios: 148,
      ano: 2011,
      genero: "Ação, Aventura, Fantasia",
      sinopse: "Gon Freecss sai em uma jornada para se tornar um Hunter e encontrar seu pai desaparecido."
    },
    {
      id: 12,
      titulo: "Bleach",
      imagem: "/path/to/bleach.jpg",
      banner: "/path/to/bleach-banner.jpg",
      avaliacao: 4.5,
      episodios: 366,
      ano: 2004,
      genero: "Ação, Aventura, Sobrenatural",
      sinopse: "Ichigo Kurosaki obtém os poderes de um Shinigami e deve proteger os vivos dos Hollows."
    },
    {
      id: 13,
      titulo: "Cowboy Bebop",
      imagem: "/path/to/cowboybebop.jpg",
      banner: "/path/to/cowboybebop-banner.jpg",
      avaliacao: 4.8,
      episodios: 26,
      ano: 1998,
      genero: "Ação, Ficção Científica",
      sinopse: "Um grupo de caçadores de recompensas viaja pelo sistema solar em busca de criminosos."
    },
    {
      id: 14,
      titulo: "Neon Genesis Evangelion",
      imagem: "/path/to/evangelion.jpg",
      banner: "/path/to/evangelion-banner.jpg",
      avaliacao: 4.7,
      episodios: 26,
      ano: 1995,
      genero: "Ação, Drama, Mecha",
      sinopse: "Adolescentes pilotam robôs gigantes para proteger a humanidade de criaturas alienígenas conhecidas como Anjos."
    },
    {
      id: 15,
      titulo: "Fairy Tail",
      imagem: "/path/to/fairytail.jpg",
      banner: "/path/to/fairytail-banner.jpg",
      avaliacao: 4.6,
      episodios: 328,
      ano: 2009,
      genero: "Ação, Aventura, Fantasia",
      sinopse: "Lucy Heartfilia se junta à guilda de magos Fairy Tail e vive aventuras com seus novos amigos."
    },
    {
      id: 16,
      titulo: "Dragon Ball Z",
      imagem: "/path/to/dbz.jpg",
      banner: "/path/to/dbz-banner.jpg",
      avaliacao: 4.8,
      episodios: 291,
      ano: 1989,
      genero: "Ação, Aventura, Artes Marciais",
      sinopse: "Goku e seus amigos defendem a Terra contra uma variedade de vilões poderosos."
    },
    {
      id: 17,
      titulo: "JoJo's Bizarre Adventure",
      imagem: "/path/to/jojo.jpg",
      banner: "/path/to/jojo-banner.jpg",
      avaliacao: 4.7,
      episodios: 152,
      ano: 2012,
      genero: "Ação, Aventura, Sobrenatural",
      sinopse: "A saga da família Joestar, cujos membros possuem habilidades únicas e enfrentam inimigos sobrenaturais."
    },
    {
      id: 18,
      titulo: "Black Clover",
      imagem: "/path/to/blackclover.jpg",
      banner: "/path/to/blackclover-banner.jpg",
      avaliacao: 4.5,
      episodios: 170,
      ano: 2017,
      genero: "Ação, Fantasia",
      sinopse: "Asta, um jovem sem poderes mágicos, sonha em se tornar o Rei Mago."
    },
    {
      id: 19,
      titulo: "Code Geass",
      imagem: "/path/to/codegeass.jpg",
      banner: "/path/to/codegeass-banner.jpg",
      avaliacao: 4.8,
      episodios: 50,
      ano: 2006,
      genero: "Ação, Mecha, Thriller",
      sinopse: "Lelouch vi Britannia obtém um poder misterioso e lidera uma rebelião contra o Império da Britannia."
    },
    {
      id: 20,
      titulo: "Mob Psycho 100",
      imagem: "/path/to/mobpsycho.jpg",
      banner: "/path/to/mobpsycho-banner.jpg",
      avaliacao: 4.6,
      episodios: 25,
      ano: 2016,
      genero: "Ação, Comédia, Sobrenatural",
      sinopse: "Shigeo 'Mob' Kageyama, um jovem com poderes psíquicos, tenta viver uma vida normal enquanto enfrenta diversos desafios."
    },
    {
      id: 21,
      titulo: "Gintama",
      imagem: "/path/to/gintama.jpg",
      banner: "/path/to/gintama-banner.jpg",
      avaliacao: 4.7,
      episodios: 367,
      ano: 2006,
      genero: "Ação, Comédia, Ficção Científica",
      sinopse: "A história de Gintoki Sakata e seus amigos em uma versão alternativa do Japão Edo onde alienígenas invadiram o planeta."
    },
    {
      id: 22,
      titulo: "Akame ga Kill!",
      imagem: "/path/to/akamegakill.jpg",
      banner: "/path/to/akamegakill-banner.jpg",
      avaliacao: 4.6,
      episodios: 24,
      ano: 2014,
      genero: "Ação, Drama, Fantasia",
      sinopse: "Tatsumi se junta a um grupo de assassinos para derrubar um governo corrupto."
    },
    {
      id: 23,
      titulo: "The Seven Deadly Sins",
      imagem: "/path/to/sevendeadlysins.jpg",
      banner: "/path/to/sevendeadlysins-banner.jpg",
      avaliacao: 4.6,
      episodios: 76,
      ano: 2014,
      genero: "Ação, Aventura, Fantasia",
      sinopse: "Os Sete Pecados Capitais, um grupo de cavaleiros, luta para proteger o reino de Liones de diversas ameaças."
    },
    {
      id: 24,
      titulo: "One Punch Man",
      imagem: "/path/to/onepunchman.jpg",
      banner: "/path/to/onepunchman-banner.jpg",
      avaliacao: 4.8,
      episodios: 24,
      ano: 2015,
      genero: "Ação, Comédia, Super-herói",
      sinopse: "Saitama, um super-herói incrivelmente poderoso, luta contra monstros e vilões enquanto busca uma luta desafiadora."
    },
    {
      id: 25,
      titulo: "Re:Zero - Starting Life in Another World",
      imagem: "/path/to/rezero.jpg",
      banner: "/path/to/rezero-banner.jpg",
      avaliacao: 4.7,
      episodios: 50,
      ano: 2016,
      genero: "Ação, Drama, Fantasia",
      sinopse: "Subaru Natsuki é transportado para um mundo de fantasia e descobre que tem o poder de voltar no tempo toda vez que morre."
    },
    {
      id: 26,
      titulo: "Blue Exorcist",
      imagem: "/path/to/blueexorcist.jpg",
      banner: "/path/to/blueexorcist-banner.jpg",
      avaliacao: 4.5,
      episodios: 25,
      ano: 2011,
      genero: "Ação, Fantasia, Sobrenatural",
      sinopse: "Rin Okumura descobre que é o filho de Satanás e decide se tornar um exorcista para lutar contra as forças do mal."
    },
    {
      id: 27,
      titulo: "No Game No Life",
      imagem: "/path/to/nogamenolife.jpg",
      banner: "/path/to/nogamenolife-banner.jpg",
      avaliacao: 4.7,
      episodios: 12,
      ano: 2014,
      genero: "Aventura, Comédia, Fantasia",
      sinopse: "Sora e Shiro, dois irmãos gamers, são transportados para um mundo onde tudo é decidido por jogos."
    },
    {
      id: 28,
      titulo: "Your Lie in April",
      imagem: "/path/to/yourlieinapril.jpg",
      banner: "/path/to/yourlieinapril-banner.jpg",
      avaliacao: 4.8,
      episodios: 22,
      ano: 2014,
      genero: "Drama, Música, Romance",
      sinopse: "Kousei Arima, um prodígio do piano, perde a capacidade de tocar após a morte de sua mãe, mas é inspirado a retornar à música por uma jovem violinista."
    },
    {
      id: 29,
      titulo: "Erased",
      imagem: "/path/to/erased.jpg",
      banner: "/path/to/erased-banner.jpg",
      avaliacao: 4.8,
      episodios: 12,
      ano: 2016,
      genero: "Mistério, Sobrenatural, Thriller",
      sinopse: "Satoru Fujinuma tem a habilidade de voltar no tempo e tenta resolver um caso de sequestro e assassinato que aconteceu na sua infância."
    },
    {
      id: 30,
      titulo: "The Promised Neverland",
      imagem: "/path/to/promisedneverland.jpg",
      banner: "/path/to/promisedneverland-banner.jpg",
      avaliacao: 4.7,
      episodios: 23,
      ano: 2019,  
      genero: "Mistério, Horror, Suspense",
      sinopse: "Crianças de um orfanato descobrem a verdade sinistra sobre seu destino e planejam uma fuga desesperada."
    }
  ];
  
  export default data;
  