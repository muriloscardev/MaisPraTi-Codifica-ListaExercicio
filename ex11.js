const prompt = require('prompt-sync')();

console.log ("Exercício 11: Peça 5 números e some eles ")

let total = 0; // Variável para armazenar a soma

for (let i = 0; i < 5; i++) { //Loop que repete 5 vezes
  const numero = parseFloat(prompt("Digite um número: ")); // Pede numero ao usuario
  total += numero; //Adiciona ao total
}

console.log("Total:", total);