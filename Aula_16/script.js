async function carregarProdutos() {
  const url = 'https://6748c2ed5801f51535921711.mockapi.io/api/produtos'
  const resposta = await fetch(url)  // Faz a requisição para a API
  const dadosProdutos = await resposta.json()  // Converte a resposta para JSON

  // Pega o local da página onde vamos mostrar os produtos
  const sectionProdutos = document.querySelector('.grade-itens')
  sectionProdutos.innerHTML = ''  // Limpa o conteúdo da seção antes de inserir novos produtos

  // Para cada produto, criamos um HTML dinâmico
  dadosProdutos.forEach(produto => {
      const estruturaHtmlProduto = `
          <section class="cartao-item">
              <img src="${produto.imagem}" alt="${produto.nome}" />
              <h3>${produto.nome}</h3>
              <p class="preco-item">R$ ${produto.preco}</p>
              <p class="descricao-item"> ${produto.descricao}</p>
              <button class="botao-comprar">Comprar</button>
          </section>`

      // Adiciona o HTML gerado na seção
      sectionProdutos.innerHTML += estruturaHtmlProduto
  })
}


// Função para abrir o formulário
function abrirFormulario() {
    document.getElementById("modalCadastroProduto").style.display = "block";
  }
  
  // Função para fechar o formulário
  function fecharFormulario() {
    document.getElementById("modalCadastroProduto").style.display = "none";
  }
  
  // Fechar o modal se o usuário clicar fora da caixa de conteúdo
  window.onclick = function (evento) {
    if (evento.target == document.getElementById("modalCadastroProduto")) {
      fecharFormulario();
    }
  };
  
  carregarProdutos()


