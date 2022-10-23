var area = prompt("Qual área de programação você quer seguir? ");
var aprender;
var seguir;
var estudos = [];

continuar = "sim";

function linguagens(item) {

    if(item == "HTML") {
        alert("Antes de mais nada, é preciso esclarecer que o HTML não é uma linguagem de programação, mas sim, de marcação. Isso significa que ela não segue lógicas ou estruturas de controle, e por isso, não pode criar funcionalidades dinâmicas.")
    } if(item == "CSS") {
        alert("O CSS não é uma linguagem de programação, mas sim de design gráfico. É usado juntamente com o HTML na composição visual das páginas, ou seja, para cores, margens, formas, tipografia, imagens de fundo, entre outros elementos.")
    }if(item == "react") {
        alert("O React é uma biblioteca Javascript de código aberto criada e mantida pelo Facebook. Atualmente, ela é utilizada por grandes empresas de tecnologia, como Instagram, Netflix, Airbnb e Walmart. Trata-se de uma ferramenta fácil de utilizar, amigável ao SEO e que facilita a comunicação entre HTML, CSS e Javascript.")
    }if(item == "vue") {
        alert("É um framework JavaScript open source para a criação de aplicações web, criado por Evan You em 2014. O Vue. js possibilita criar aplicações de forma reativa.")
    }if(item == "jquery") {
        alert("Essa biblioteca para Front-End é muito popular, que tem como principal finalidade a criação de interfaces mais interativas e agradáveis aos usuários. Para isso, ele incrementa o código do Javascript como forma de simplificar o que está sendo desenvolvido.")
    }if(item == "python") {
        alert("Considerada umas das linguagens de programação que mais estão em alta, a Python é uma ótima linguagem para quem está iniciando o estudo em programação. Afinal, como tem o código aberto possibilita trabalhar de uma maneira muito mais otimizada, integrada e eficaz. A Phyton é muito utilizada para o desenvolvimento web e machine learning.")
    }if(item == "ruby") {
        alert("Ruby on Rails, ou apenas Rails, é um framework muito utilizado no desenvolvimento de aplicações web. Ele é basicamente uma coleção de bibliotecas escrita pela linguagem de programação Ruby, portanto, o profissional que compreender a linguagem, tem mais condições de interpretar erros e criar novas funções")
    }if(item == "java") {
        alert("Considerada uma das linguagens mais consagradas e populares do mundo, Java é orientada a objetos, roda em várias plataformas e serve para desenvolver aplicações web e mobile. Diferente do que ocorre em outras linguagens de programação, as aplicações criadas em Java não são compiladas em um código nativo.")
    }if(item == "c#") {
        alert("Muito utilizada para a construção de jogos e aplicativos Windows para celulares, C# é uma linguagem de programação de propósito geral,  de sintaxe simples e de fácil aprendizagem.")
    }
    
}

if(area == "front-end") {

    aprender = prompt("Você quer aprender react ou vue");
    estudos.push(aprender);
    linguagens(aprender);
    seguir = prompt("Você quer seguir se especializando na área escolhida ou se tornar fullstack ? ");

    while(continuar == "sim") {

        continuar = prompt("Tem mais alguma tecnologia que você gostaria de aprender?");

        if(continuar == "sim") {

            let tecnologia = prompt("Qual? ");
            estudos.push(tecnologia);
            linguagens(tecnologia);

        }

        alert("Sua lista é: " + estudos);
    }

}else if(area == "back-end") {

    aprender = prompt("Você quer aprender c# ou java");
    estudos.push(aprender);
    linguagens(aprender);
    seguir = prompt("Você quer seguir se especializando na área escolhida ou se tornar fullstack ? ");

    while(continuar == "sim") {

        continuar = prompt("Tem mais alguma tecnologia que você gostaria de aprender?");

        if(continuar == "sim") {

            let tecnologia = prompt("Qual? ");
            estudos.push(tecnologia);
            linguagens(tecnologia);

        }

        alert("Sua lista é: " + estudos);
    }

}