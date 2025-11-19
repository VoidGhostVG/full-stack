const form = document.querySelector("form")
const lista = document.querySelector(".lista")
const inputNome = document.getElementById("nome")
const inputEmail = document.getElementById("email")
const inputTel = document.getElementById("telefone")
const listaMsg = document.querySelector(".lista-msg")

form.addEventListener("submit", function(event) {
    event.preventDefault()

    if (inputNome.value == "" || inputEmail.value == "" || inputTel.value == "") {
        alert("Digite seus dados")
        return false
    }

    // Condição para retirar a li > .lista-msg
    if (listaMsg) {
      listaMsg.remove()
    }

    const li = document.createElement("li")

    const btnExcluir = document.createElement("button")
    btnExcluir.textContent = "Excluir"
    btnExcluir.className = "btnExcluir"

    btnExcluir.addEventListener("click", function() {
      alert("Você vai excluir seu contato!")
    })

    li.innerHTML = `
        <span class="contato-nome">${inputNome.value}</span>
        <span class="contato-email">${inputEmail.value}</span>
        <span class="contato-telefone">${inputTel.value}</span>
    `;

    console.log(li)

    lista.appendChild(li)
    li.appendChild(btnExcluir)

    // Limpar inputs
    form.reset()

})