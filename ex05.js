const prompt = require('prompt-sync')();

console.log("Exercício 05: Calculadora de IMC");

// Pegar os dados do usuário
const peso = parseFloat(prompt("Digite seu peso em kg (ex: 70): "));
const altura = parseFloat(prompt("Digite sua altura em metros (ex: 1.75): "));

// Validar os números
if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
  console.log("Valores inválidos! Use apenas números positivos.");
} else {
  // Calcular o IMC
  const imc = peso / (altura * altura);


  // Determinar a categoria
  let categoria;
  if (imc < 18.5) {
    categoria = "Baixo peso";
  } else if (imc < 25) {
    categoria = "Peso normal";
  } else if (imc < 30) {
    categoria = "Sobrepeso";
  } else {
    categoria = "Obesidade";
  }
  // mostrar resultado
  console.log(`Seu IMC é: ${imc.toFixed(1)}`); // toFixed faz com que use o numero determinado de casas decimais no resultado \n é um linebreaker
  console.log(`Categoria: ${categoria}`);
}