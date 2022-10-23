var adicionar = prompt("Deseja adicionar ou remover uma comida na sua lista de compras? sim, nao ou remover");

var frutas = []
var laticinios = []
var congelados = []
var doces = []

var compra = [frutas, laticinios, congelados, doces]

function posicao(nome) {

    if(nome == "frutas") {
        return frutas
    }
    if(nome == "laticinios") {
        return laticinios
    }
    if(nome == "congelados") {
        return congelados
    }
    if(nome == "doces") {
        return doces
    }

}

function posicaoLista(lista, produto) {

    for(let i = 0; i <= lista.length; i++) {

        if(produto == lista[i]) {

            return i;

        }

    }

}

function adicionarLista(nome, produto) {

    if(nome == "frutas") {
        frutas.push(produto)
    }
    if(nome == "laticinios") {
        laticinios.push(produto)
    }
    if(nome == "congelados") {
        congelados.push(produto)
    }
    if(nome == "doces") {
        doces.push(produto)
    }

}

function removerLista(nome, produto) {

    for(let i = 0; i <= compra.length; i++) {

        if(posicao(nome) == compra[i]) {

            let local = posicao(nome);
            
            local.splice(posicaoLista(local, produto), 1)

        }

    }

}

while(adicionar == "sim" || adicionar == "remover") {

    if(adicionar == "sim") {

        let comida = prompt("Qual comida você deseja inserir?");
        adicionarLista(prompt("em qual categoria essa comida se encaixa? frutas, laticinios, congelados, doces"), comida);
    

    }else if(adicionar == "remover") {

        let comida = prompt("Qual comida você deseja remover?");
        removerLista(prompt("em qual categoria essa comida se encontra? frutas, laticinios, congelados, doces"), comida);
    

    }

    adicionar = prompt("Deseja adicionar ou remover uma comida na sua lista de compras? sim, nao ou remover");

}

console.log("Sua lista");
console.log("Frutas: " + frutas)
console.log("Laticinios: " + laticinios)
console.log("Congelados: " + congelados)
console.log("Doces: " + doces)