const prompt = require('prompt-sync')();

console.log("Exercício 12: Gerador de Tabuada do 1-10");

let numero;

// Loop para garantir que o número seja valido
while (true) {
  const input = prompt("Digite um número entre 1 e 10: ");
  numero = parseInt(input);

  // Verifica se é um número inteiro valido e dentro dos valores
  if (isNaN(numero) || numero < 1 || numero > 10) {
    console.log("Valor inválido! Digite apenas números inteiros de 1 a 10.\n");
  } else {
    break; //Sai do loop se o número for valido
  }
}

console.log(`\nTabuada do ${numero}:\n`);

// Mostra a tabuada
for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}

console.log("\nFim da tabuada!");