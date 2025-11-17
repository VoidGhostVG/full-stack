const inputNome = document.getElementById("nome")
const inputEmail = document.getElementById("email")
const inputTel = document.getElementById("telefone")

function botao(event) {
    event.preventDefault()
    console.log(inputNome.value)
    console.log(inputEmail.value)
    console.log(inputTel.value)
}