const vitórias = Number(prompt("Quantas vitórias o seu time tem?"))

const empates = Number(prompt("Quantos empates o seu time tem?"))

console.log("Mult: " + (vitórias * 3) + empates)

if((vitórias * 3) + empates >= 45) {
    console.log("Indo bem")
    document.write("<strong> Seu time está indo bem! </strong>")
}

else {
    console.log("Indo mal")
    document.write("<strong> Seu time tem que melhorar! </strong>")
}