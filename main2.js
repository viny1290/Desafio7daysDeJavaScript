var nome = prompt("Qual o seu nome?");
var idade = prompt("Quantos anos você tem?");
var linguagem = prompt("Qual linguagem de programação você está estudando?");

alert("Olá " + nome + " , você tem " + idade + " anos e já está aprendendo " + linguagem + "!");

var gosto = prompt("Você gosta de estudar " + linguagem + "? Responda com o número 1 para SIM ou 2 para NÃO.");

if(gosto == 1) {

    alert("Muito bom! Continue estudando e você terá muito sucesso.");

}else if(gosto == 2) {

    alert("Ahh que pena... Já tentou aprender outras linguagens?");

}