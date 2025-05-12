const dados = [
  {
    "id": 1,
    "titulo": "Prefeitura Lança Novo Plano de Mobilidade Urbana",
    "descricao": "Novo plano visa melhorar o transporte público e reduzir o trânsito na cidade.",
    "conteudo": "A Prefeitura apresentou um novo plano com corredores exclusivos de ônibus, ciclovias e requalificação de vias.",
    "categoria": "Cidades",
    "autor": "Joana Ribeiro",
    "data": "2025-03-30",
    "imagem": "img/mobilidade.jpg"
  },
  {
    "id": 2,
    "titulo": "Tecnologia 6G Está em Desenvolvimento",
    "descricao": "Pesquisadores anunciam avanços na próxima geração de redes móveis.",
    "conteudo": "Universidades e empresas testam tecnologias para o 6G, prometendo 100x mais velocidade que o 5G.",
    "categoria": "Tecnologia",
    "autor": "Carlos Mendes",
    "data": "2025-03-28",
    "imagem": "img/tecnologia_6g.jpg"
  },
  {
    "id": 3,
    "titulo": "Festival de Música Reúne Mais de 50 Mil Pessoas",
    "descricao": "Evento cultural movimentou o final de semana com atrações nacionais e internacionais.",
    "conteudo": "Mais de 40 artistas participaram do festival que também contou com atividades culturais e gastronômicas.",
    "categoria": "Cultura",
    "autor": "Ana Clara Silva",
    "data": "2025-03-27",
    "imagem": "img/festival_musica.jpg"
  }
];

if (document.getElementById("container-cards")) {
  const container = document.getElementById("container-cards");
  dados.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.imagem}" alt="${item.titulo}">
      <h2>${item.titulo}</h2>
      <p>${item.descricao}</p>
      <a href="detalhes.html?id=${item.id}">Ver mais</a>
    `;
    container.appendChild(card);
  });
}

if (document.getElementById("detalhes-container")) {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const item = dados.find(n => n.id === id);

  const container = document.getElementById("detalhes-container");

  if (item) {
    container.innerHTML = `
      <h1>${item.titulo}</h1>
      <img src="${item.imagem}" alt="${item.titulo}">
      <p><strong>Categoria:</strong> ${item.categoria}</p>
      <p><strong>Autor:</strong> ${item.autor}</p>
      <p><strong>Data:</strong> ${item.data}</p>
      <p>${item.conteudo}</p>
      <a href="index.html">Voltar para home</a>
    `;
  } else {
    container.innerHTML = "<p>Item não encontrado.</p>";
  }
}
