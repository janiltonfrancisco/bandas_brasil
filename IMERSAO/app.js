function pesquisar() {
  // Seleciona a seção onde os resultados serão exibidos pelo ID.
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (campoPesquisa == "") {
    section.innerHTML = "Não foi pesquisado nada";
    return;
  }

  //pesquisa com letra mínuscula

  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para concatenar os resultados.
  let resultados = "";
  let titulo = "";
  let descricao = "";

  // Itera sobre cada dado da lista de resultados.
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();

    // se titulo includes campoPesquisa

    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
      // Constrói o HTML de cada item de resultado, formatando os dados.
      resultados += `
      <div class="item-resultado">
      <img src="${dado.imagem}" alt="${dado.titulo}">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        
        <a href=${dado.link} target="_blank">Site Oficial da banda</a>
         <audio controls>
                    <source src="${dado.musica}" type="audio/mp3">
                    Seu navegador não suporta este formato de áudio.
                </audio>
      </div>
     
     `;
    }

    if (!resultados) {
      resultados = "<p>...</p>";
    }
  }

  // Atribui o HTML construído à seção de resultados, substituindo o conteúdo anterior.
  section.innerHTML = resultados;
}
