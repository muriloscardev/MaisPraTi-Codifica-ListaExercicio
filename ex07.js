const prompt = require('prompt-sync')();

console.log("Exercício 07: Calculando o valor das maçãs");

//Pedir a quantidade de maçãs
const quantidade = parseFloat(prompt("Quantas maçãs você comprou? "));

// Validação numero valido
if (isNaN(quantidade) || quantidade <= 0) {
  console.log("Inválido! Digite um número maior que zero!");
} else {
  // Calcular o preço
  let precoUnitario;
  
  if (quantidade >= 12) {
    precoUnitario = 0.25; // Preço unitario se comprar 12+
  } else {
    precoUnitario = 0.30; // Preço unitário 11-
  }

  // Calcular total
  const total = quantidade * precoUnitario;

  //Mostrar resultado formatado
  console.log(`\nTotal a pagar: R$ ${total.toFixed(2)}`);
}