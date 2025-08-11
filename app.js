/*let nome = prompt('Qual é seu nome?')
console.log (nome);
let idade = prompt ('Qual é sua idade?')
console.log(idade);
if (idade >= 18)
    console.log ('Pode tirar habilitação')
else
    console.log('Não pode tirar habilitação')

let diaDaSemana = prompt('Qual é o dia da semana?')
if(diaDaSemana == 'sabado' || diaDaSemana == 'domingo'){
    alert('Bom final de semana');
}else{
    alert('Boa semana');

let numero = prompt('Digite um numero:')
if (numero > 0){
    alert('Numero positivo');
}else {
    (numero < 0)
    alert('Numero negativo');
}}
let pontuacao = prompt('Digite sua pontuação no jogo:')
if(pontuacao >= 100){
    alert('Parabéns você venceu')
}else{
    alert('Tente novamente para ganhar')
}
let saldoConta = '1000'
alert(`O saldo da sua conta é ${saldoConta}`);

let nome = prompt('Qual é seu nome?')
alert(`Bem vindo ${nome}`);

let contador = 10

while (contador > 0){
    contador--
    console.log(contador);
}

*/


//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
/*let numero = prompt ('Digite um numero:');
while (numero > 0){
    numero--
    console.log(numero);
}*/



//Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
/*let numero = prompt('Digite um numero:');
contador = 0
while(contador < numero){
   contador++
    console.log(contador);
}
*/



alert('Boas vindas ao jogo do numero secreto!');
let numeroMaximo = 500;
let numeroSecreto = parseInt(Math.random()*numeroMaximo+1);
console.log(numeroSecreto);
let chute;
console.log(chute == numeroSecreto)
let tentativas = 1;


while (chute != numeroSecreto) {
   chute =  prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);
    if (chute == numeroSecreto) {
        break;
    }
    else {
    } if (chute > numeroSecreto) {
        alert(`O numero secreto é menor do que ${chute}`);
    } else {
        alert(`O numero secreto é maior do que ${chute}`);
    }
    // Essa é a forma arcaica
    // tentativas = tentativas + 1;
    
    // Essa é a forma utilizada no mercado atualmente (2025)
      tentativas++
}
// Essa é a forma que o mercado escreve, com operadores ternários
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}!`);

// Essa forma é uma forma mais básica e leiga de escrever o código
/*if (tentativas > 1){
    alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} em ${tentativas} tentativas!`);
}else{
    alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} em ${tentativas} tentativa!`);
}

/*
//Utilizando operador ternário
let quantidadePessoas = prompt('Digite quantas pessoas irão a festa:');
let palavraPessoa = quantidadePessoas >1 ? ('pessoas') : ('pessoa')
alert(`Comparecerão na festa ${quantidadePessoas} ${palavraPessoa}`);


if(quantidadePessoas == 1){
    palavraPessoa = "pessoa";
}else{
    palavraPessoa = "pessoas"
}
*/
/*
Exercicios Finais
1.Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

2.Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

Use um loop while para imprimir os números de 1 a 10 no console.

Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
*/

