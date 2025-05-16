const prompt = require('prompt-sync')();

console.log("Exercício 08: Ordenador de valores");

// Receber dois valores
const valor1 = parseFloat(prompt("Digite o primeiro número: "));
const valor2 = parseFloat(prompt("Digite o segundo número: "));

// verificar se são validos
if (isNaN(valor1) || isNaN(valor2)) {
  console.log("Erro: Digite apenas números!");
  
} else {
  // Comparar e mostrar em ordem
  if (valor1 < valor2) {
    console.log(`Ordem crescente: ${valor1} e ${valor2}`);
  } else {
    console.log(`Ordem crescente: ${valor2} e ${valor1}`);
  }
}