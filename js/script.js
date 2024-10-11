

const nome = document.getElementById("nome");
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const dialogResultado = document.getElementById("dialogResultado");


function calcularImc() {
    let imc = peso.value / (altura.value * altura.value);
    let mensagem = "Seu IMC é: "+imc.toFixed(1);
    alert(mensagem);
}