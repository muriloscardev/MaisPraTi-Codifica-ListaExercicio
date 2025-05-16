const prompt = require('prompt-sync')();

console.log ("Exercício 10: Ler um número inteiro e repetir na tela 10 vezes ")

// Pede numero 
const numero = parseInt(prompt("Digite um número inteiro: "));

// Verifica se é válido
if (isNaN(numero)) {
  console.log("Valor inválido! Digite apenas números.");
} else {
  // Repete 10 vezes
  console.log("\nNúmero repetido 10 vezes:");
  for (let i = 1; i <= 10; i++) { // i++ aumenta o contador em 1 por repetição
    console.log(numero);
  }
}