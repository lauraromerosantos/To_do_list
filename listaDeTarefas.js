const criarTarefa = (evento) => {

    evento.preventDefault()

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${valor}</p>`

    tarefa.innerHTML = conteudo

    lista.appendChild(tarefa)
    input.value = " "
}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)

/*
Na função abaixo, a partir do momento que vc clicar no botão,
irá percorrer o DOM, buscar o INPUT, pegar o valor que está
dentro do INPUT colocar no CONSOLE.LOG e exibir no navegador

novaTarefa.addEventListener('click', () => {
    const input = document.querySelector('[data-form-input]')
    const valor = input.value
    console.log(valor)
})

*/