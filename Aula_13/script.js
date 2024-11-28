async function  carregarCardapio() {
    const url = 'https://6748c2ed5801f51535921711.mockapi.io/api/cardapio'
    const resposta = await fetch(url)
    const dadosCardapio = await resposta.json()
    const sectionMenu = document.querySelector('#menu')
    sectionMenu.innerHTML = ''
    dadosCardapio.forEach(comida => {
        const estruturaHtmlComida = `
        <div class="item">
            <img src="${comida.imagem}" alt="">
            <div class="details">
                <h2>${comida.nome}</h2>
                <p>${comida.descricao}</p>
                <span>R$ ${comida.preco}</span>
            </div>
        </div>`
        sectionMenu.innerHTML += estruturaHtmlComida
    })   
}

carregarCardapio()