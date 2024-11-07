function adicionarItem() {
    const itenDigitado = document.querySelector('#item').value 
    const lista = document.querySelector('#lista')
    lista.innerHTML += `<li>${itenDigitado}</li>`
}