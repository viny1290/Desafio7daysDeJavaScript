var primeiro = parseFloat(prompt("Digite um numero"));
var operador = prompt("Digite um operador, + - * /");
var segundo = parseFloat(prompt("Digite o segundo numero"));

function operacao(num, num2, sinal) {

    if(sinal == "+") {
        return num + num2;
    }
    if(sinal == "-") {
        return num - num2;
    }
    if(sinal == "*") {
        return num * num2;
    }
    if(sinal == "/") {
        return num / num2;
    }

}

console.log(operacao(primeiro, segundo, operador))