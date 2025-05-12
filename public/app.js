const API_URL = "http://localhost:3000/noticias";

async function carregarNoticias() {
  const resposta = await fetch(API_URL);
  const dados = await resposta.json();

  const container = document.getElementById("container-cards");
  if (container) {
    container.innerHTML = "";
    dados.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="\${item.imagem}" alt="\${item.titulo}">
        <h2>\${item.titulo}</h2>
        <p>\${item.descricao}</p>
        <a href="detalhes.html?id=\${item.id}">Ver mais</a>
      `;
      container.appendChild(card);
    });
  }
}

async function carregarDetalhes() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (id) {
    const resposta = await fetch(`\${API_URL}/\${id}`);
    const item = await resposta.json();

    const container = document.getElementById("detalhes-container");
    if (container && item) {
      container.innerHTML = `
        <h1>\${item.titulo}</h1>
        <img src="\${item.imagem}" alt="\${item.titulo}">
        <p><strong>Categoria:</strong> \${item.categoria}</p>
        <p><strong>Autor:</strong> \${item.autor}</p>
        <p><strong>Data:</strong> \${item.data}</p>
        <p>\${item.conteudo}</p>
        <a href="index.html">Voltar para home</a>
      `;
    } else {
      container.innerHTML = "<p>Item não encontrado.</p>";
    }
  }
}

if (document.getElementById("container-cards")) {
  carregarNoticias();
}

if (document.getElementById("detalhes-container")) {
  carregarDetalhes();
}