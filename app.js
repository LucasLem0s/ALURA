

let titulo = document.querySelector('h1');
titulo.innerHTML= 'Hora do desafio';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML= 'Escolha um numero entre 1 e 10';

function verificarChute(){
    console.log('chute');
}

// Exercicios de fixação:

//1. Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
/*let titulo = document.querySelector('h1');
titulo.innerHTML= 'Hora do desafio';*/

//2.Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
/*function botaoConsole(){
    console.log('O botão foi');
}*/

//3.Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
/*function btnAlerta(){
    alert('Eu amo JS');
}*/

//4.Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
/*function btnSaudacao(){
    let cidade = prompt('Cite uma cidade do Brasil:');
    alert(`Estive em ${cidade} e lembrei de você :)`);
}*/

//5.Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
/*function soma(){
    let a = Number(prompt('Digite um numero:'));
    let b = Number(prompt('Digite outro numero:'));
    let r = a+b
    alert(`A soma entre ${a} e ${b} é ${r}!`)
}*/