const prompt = require('prompt-sync')();

console.log("Exercício 02: Definir idade e classifica-lá")

// Solicita a idade ao usuário
const idade = parseInt(prompt("Digite a idade: "));

// Validação básica
if (isNaN(idade)) {
    console.log("Por favor, digite uma idade válida!");
} else if (idade < 0) {
    console.log("Idade não pode ser negativa!");
} else {
    // Classifica a idade
    if (idade <= 12) {
        console.log("Criança");
    } else if (idade <= 17) {
        console.log("Adolescente");
    } else if (idade <= 60) {
        console.log("Adulto");
    } else {
        console.log("Idoso");
    }
}