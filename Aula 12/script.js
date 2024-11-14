//Crie um objeto JSON que represente informações sobre 03 livros. O objeto deve ter propriedades como título, autor, ano de publicação e o link da capa desse livro.

const livros = [
    {
        "titulo": "As 5 Linguagens do Amor",
        "autor": "Gary Chapman",
        "anoDePublicação": "2013",
        "linkCapa": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaSkWfwdRgbr-U8PbIzK64u08Cvq8pQMnclg&s"
    },
    {
        "titulo": "O Poder do Hábito",
        "autor": "Charles Duhigg",
        "anoDePublicação": "2012",
        "linkCapa": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6u94t33vQG7APpwHx-2zhQZX23Zee171Tgw&s"
    },
    {
        "titulo": "Os segredos da Mente Milionária",
        "autor": "Robert G Allen",
        "anoDePublicação": "2017",
        "linkCapa": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBVinnRHX4HoB6isMOvlZdMub1UMuVXSGFJg&s"
    }
]

function carregarLivros(livros) {
    const divBiblioteca = document.querySelector('#biblioteca')
    divBiblioteca.innerHTML = ''

    livros.forEach(livro => {
        const estruturaHtmlLivro = `
        <h2>${livro.titulo}</h2>
        <ul>
            <li>Autor: ${livro.autor}</li>
            <li>Ano de Publicação: ${livro.anoDePublicação}</li>
            <li>
                <img src="${livro.linkCapa}" alt="">
            </li>
        </ul>
        <hr>`
        divBiblioteca.innerHTML += estruturaHtmlLivro
})
}
carregarLivros(livros)
