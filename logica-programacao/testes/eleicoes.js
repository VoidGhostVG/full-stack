let anoAtual = new Date().getFullYear()
let anoInicio = Number(prompt ("Digite o ano da primeira eleição que você acompanhou"))

while(anoInicio <= anoAtual) {
    let tipoAno = (anoInicio % 2 === 0) ? "Ano par" : "Ano ímpar"
    document.write("<strong> Eleições: " + anoInicio + "<hr>" + tipoAno + "<br> </strong>")
    anoInicio = anoInicio + 5
}