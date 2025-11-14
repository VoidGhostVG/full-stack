let anoAtual = 2025
let anoInicio = Number(prompt ("Digite o ano da primeira Copa do Mundo que você assistiu"))

while(anoInicio <= anoAtual) {
    document.write("<strong> Copa do Mundo: " + anoInicio + "<br> </strong>")
    anoInicio = anoInicio + 4
}