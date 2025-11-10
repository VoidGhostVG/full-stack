const anoAtual = 2025;

const userAge = Number(prompt("Qual é a sua idade?"))

console.log("Sub: ", anoAtual - userAge)

document.write("Você nasceu em: " + "<strong>" + (anoAtual - userAge) + "</strong>")