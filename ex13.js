const prompt = require('prompt-sync')();

console.log("Exercício 13: Média aritmética");

let soma = 0;
let quantidade = 0;

while (true) {
  const entrada = prompt("Digite um número (0 para sair): ");
  
  // Converte para número decimal
  const numero = parseFloat(entrada);
  
  // Verifica se o usuário quer sair
  if (entrada === '0') {
    break;
  }
  
  // Validação de numero
  if (isNaN(numero)) {
    console.log("Valor inválido! Use apenas números.\n");
    continue;
  }
  
  // Adiciona aos calculos
  soma += numero;
  quantidade++;
}

// Verifica se foram inseridos números
if (quantidade === 0) {
  console.log("\nNenhum número válido foi inserido!");
} else {
  const media = soma / quantidade;
  console.log(`\nMédia dos ${quantidade} números: ${media.toFixed(2)}`);
}