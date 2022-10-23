var sorteado = Math.floor(Math.random() * 10 + 1);

for(let i = 0; i <= 3; i++) {

    let chute = prompt("Digite um numero: ");

    if(chute == sorteado) {

        alert("parabéns você acertou o numero");
        i = 4;

    }else if(i == 3) {

        alert("O numero sorteado era: " + sorteado)

    }
    
}