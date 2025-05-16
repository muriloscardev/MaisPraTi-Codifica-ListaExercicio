// Importa o prompt-sync
const prompt = require('prompt-sync')();

console.log ("Exercicio 01: Verificar se o numero é PAR ou IMPAR")

// Solicita o número ao usuário
const numero = parseInt(prompt('Digite um número inteiro: '));

// Verifica se é um número válido
if (isNaN(numero)) { //isNaN (isnotanumber)
  console.log('Por favor, digite um número válido!');
} else {
  // Verifica par ou ímpar
  if (numero % 2 === 0) { // A sobra da divisão por 2 do numero solicitado ao usuario deve ser 0 para ser PAR
    console.log(`${numero} é PAR!`);
  } else {
    console.log(`${numero} é ÍMPAR!`);
  }
}