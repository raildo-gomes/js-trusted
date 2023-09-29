
function gerarNumeroAleatorio() {
    var numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    var resultado = document.getElementById("resultado");
    resultado.textContent = "Número Aleatório: " + numeroAleatorio;
}

var botaoGerarNumero = document.getElementById("gerarNumero");
botaoGerarNumero.addEventListener("click", gerarNumeroAleatorio);
