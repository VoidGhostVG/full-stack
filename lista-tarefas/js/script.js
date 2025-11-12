// Função em JavaScript
function adicionar() {
    let tarefas = document.getElementById("tarefas");
    let lista = document.getElementById("lista");

    let item = document.createElement("li");
    item.textContent = tarefas.value;

    lista.appendChild(item);


    tarefas.value = "";
}