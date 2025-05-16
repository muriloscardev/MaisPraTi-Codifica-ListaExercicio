const prompt = require('prompt-sync')();

console.log("Exercício 06: Verificador de Triângulo Simples");

//  Pedir os lados do triângulo
const ladoA = parseFloat(prompt("Digite o primeiro lado (A): "));
const ladoB = parseFloat(prompt("Digite o segundo lado (B): "));
const ladoC = parseFloat(prompt("Digite o terceiro lado (C): "));

// Verificar se são números válidos
if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)) {
  console.log("Erro: Digite apenas números!");
} else {
  
  // Verificar se os 3 valores conseguem formar um triângulo
  const regra1 = ladoA + ladoB > ladoC;
  const regra2 = ladoA + ladoC > ladoB;
  const regra3 = ladoB + ladoC > ladoA;
  
  const formaTriangulo = regra1 && regra2 && regra3;

  if (!formaTriangulo) {
    console.log("Não é um triângulo! Tente outros valores.");
  } else {
    
    //descobrir o tipo de triângulo e classificar ele
    if (ladoA === ladoB && ladoB === ladoC) {
      console.log("Triângulo EQUILÁTERO (3 lados iguais)");
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
      console.log("Triângulo ISÓSCELES (2 lados iguais)");
    } else {
      console.log("Triângulo ESCALENO (os 3 lados diferentes)");
    }
  }
}