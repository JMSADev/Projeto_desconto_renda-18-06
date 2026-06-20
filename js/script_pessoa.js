const pessoas = []

const formPessoa = document.querySelector('#form-pessoa')
const divResult = document.querySelector('#div-lista-pessoas')

formPessoa.addEventListener('submit', (evt) => { // capturando o submit do form
    evt.preventDefault() // interrompe o refresh
//criando o objeto dataform
    const dadosForm = new FormData(formPessoa) 

// criando e preenchendo o objeto literal pessoa (definindo os elementos no array)
    const pessoa ={
        nome: dadosForm.get('nome'),
        idade: dadosForm.get('idade'),
        renda: dadosForm.get('renda')
    }
// chamando a função addPessoa e passando o objeto literal pessoa (os elementos)
    addPessoa(pessoa)

    // limpando o formulário
    formPessoa.reset()
})

// funções para crud
// função para adicionar pessoa
const addPessoa = (objPessoa) => {
    pessoas.push(objPessoa)
    // ^ adicionado o objeto (elemento) no array, vindo do paraêmtro da função 

    listaPessoa()
}

// função listar pessoas
const listaPessoa = () => {
// limpando a div
    divResult.innerHTML = ''

    //percorrendo o array com a estrutura de repetição foreach
    pessoas.forEach((elem, i) => {
        divResult.innerHTML += `
            <div class="item-pessoa">
                ${i + 1} - ${elem.nome}
                <br>
                Idade: ${elem.idade}
                <br>
                Renda: R$ ${parseFloat(elem.renda).toFixed(2).replace('.', ',')}
            </div>
        `
    })
}
