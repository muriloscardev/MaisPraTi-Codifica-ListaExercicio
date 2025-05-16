const prompt = require('prompt-sync')();

console.log("Exercício 04: Calculadora com Soma, Subtração e Exit")

// Exibe o menu principal
console.log("--------- MENU ---------");
console.log("(1) Somar dois números");
console.log("(2) Subtrair dois números");
console.log("(3) Sair");

//Lê a opção do usuário
const opcao = parseInt(prompt("Escolha uma opção (1-3): "));

// Processa a opção usando switch case
switch (opcao) {
  case 1:
    const num1 = parseFloat(prompt("Digite o primeiro número: "));
    const num2 = parseFloat(prompt("Digite o segundo número: "));
    console.log(`Resultado: ${num1 + num2}`);
    break;

  case 2:
    const num3 = parseFloat(prompt("Digite o primeiro número: "));
    const num4 = parseFloat(prompt("Digite o segundo número: "));
    console.log(`Resultado: ${num3 - num4}`);
    break;

  case 3 :
    console.log("Até logo!");
    break;

  default:
    console.log("Opção inválida! Escolha entre (1) e (3).");
}