const prompt = require('prompt-sync')();

console.log("Exercício 14: Calculadora de Fatorial");

const input = prompt("Digite um número inteiro não negativo: ");
const numero = Number(input);

// Validação
if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) { // !Number.isInteger garante que é um numero inteiro
  console.log("Erro: Digite apenas números inteiros não negativos!");
} else {
  let fatorial = 1;
  
  // Calcula o fatorial (0! e 1! = 1)
  for (let i = 2; i <= numero; i++) {
    fatorial *= i; // fatorial = fatorial * i
  }

  console.log(`\n${numero}! = ${fatorial}`);
}