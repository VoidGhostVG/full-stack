const form = document.querySelector("form")
const lista = document.querySelector(".lista")
const inputNome = document.getElementById("nome")
const inputEmail = document.getElementById("email")
const inputTel = document.getElementById("telefone")

form.addEventListener("submit", function(event) {
    event.preventDefault()

   if(inputNome.value == "" || inputEmail.value == "" || inputTel.value == "") {
    alert("Ainda há algo para preencher!")
    return false
}

    console.log(inputNome.value)
    console.log(inputEmail.value)
    console.log(inputTel.value)

    const li = document.createElement("li")
lista.appendChild(li)
})



li.innerHTML = `
  <span class="contato-nome">${inputNome.value}</span>
  <span class="contato-email">${inputEmail.value}</span>
  <span class="contato-telefone">${inputTel.value}</span>
`