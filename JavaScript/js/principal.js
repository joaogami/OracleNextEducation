var titulo = (document.querySelector(".titulo"));
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
var tdpeso = paciente.querySelector(".info-peso")
var peso = tdpeso.textContent;

var tdaltura = paciente.querySelector(".info-altura");
var altura = tdaltura.textContent;

var tdimc = document.querySelector(".info-imc");

var alturaEhValida = true;
var pesoEhValido = true;

if(peso <= 0 || peso > 1000){
    console.log("Peso inválido");
    tdImc.textContent = "Peso inválido!";
    pesoEhValido = false;
}

if(altura <= 0 || altura >= 3){
    console.log("Altura inválida");

    tdImc.textContent = "Altura inválida!";
    alturaEhValida = false;
}
if(pesoEhvalido && alturaEhValida){
    var imc = peso / (altura * altura);
    tdimc.textContent = imc;
}

console.log(tdimg);
