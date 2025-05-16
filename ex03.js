const prompt = require('prompt-sync')();

console.log("Exercício 03: Status Escolar ")

// Solicita dado de entrada (nota 0-10)
const nota = parseFloat(prompt("Digite a sua nota: "));

// Validando a nota
if (isNaN(nota) || nota < 0 || nota > 10) {
    console.log("Nota inválida! Digite um valor entre 0 e 10.");
} else {
    // Classificação da nota
    if (nota >= 7) {
        console.log("Aprovado! :)");
    } else if (nota >= 5) {
        console.log("Recuperação!:(");
    } else {
        console.log("Reprovado! :(");
    }
}