const prompt = require('prompt-sync')();

function exercicio01() {
  const numero = parseInt(prompt('Digite um número inteiro: '));
  if (isNaN(numero)) {
    console.log('Por favor, digite um número válido!');
  } else {
    if (numero % 2 === 0) {
      console.log(`${numero} é PAR!`);
    } else {
      console.log(`${numero} é ÍMPAR!`);
    }
  }
}

function exercicio02() {
  const idade = parseInt(prompt("Digite a idade: "));
  if (isNaN(idade)) {
    console.log("Por favor, digite uma idade válida!");
  } else if (idade < 0) {
    console.log("Idade não pode ser negativa!");
  } else {
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
}

function exercicio03() {
  const nota = parseFloat(prompt("Digite a sua nota: "));
  if (isNaN(nota) || nota < 0 || nota > 10) {
    console.log("Nota inválida! Digite um valor entre 0 e 10.");
  } else {
    if (nota >= 7) {
      console.log("Aprovado! :)");
    } else if (nota >= 5) {
      console.log("Recuperação!:(");
    } else {
      console.log("Reprovado! :(");
    }
  }
}

function exercicio04() {
  console.log("(1) Somar dois números");
  console.log("(2) Subtrair dois números");
  console.log("(3) Sair");
  const opcao = parseInt(prompt("Escolha uma opção (1-3): "));
  switch (opcao) {
    case 1:
      const num1 = parseFloat(prompt("Digite o primeiro número: "));
      const num2 = parseFloat(prompt("Digite o segundo número: "));
      console.log(`Resultado: ${num1 + num2}`);
      break;
    case 2:
      const num3 = parseFloat(prompt("Digite o primeiro número: "));
      const num4 = parseFloat(prompt("Digite o segundo número: "));
      console.log(`Resultado: ${num3 - num4}`);
      break;
    case 3:
      console.log("Até logo!");
      break;
    default:
      console.log("Opção inválida! Escolha entre (1) e (3)." );
  }
}

function exercicio05() {
  const peso = parseFloat(prompt("Digite seu peso em kg (ex: 70): "));
  const altura = parseFloat(prompt("Digite sua altura em metros (ex: 1.75): "));
  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    console.log("Valores inválidos! Use apenas números positivos.");
  } else {
    const imc = peso / (altura * altura);
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
    console.log(`Seu IMC é: ${imc.toFixed(1)}`);
    console.log(`Categoria: ${categoria}`);
  }
}

function exercicio06() {
  const ladoA = parseFloat(prompt("Digite o primeiro lado (A): "));
  const ladoB = parseFloat(prompt("Digite o segundo lado (B): "));
  const ladoC = parseFloat(prompt("Digite o terceiro lado (C): "));
  if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)) {
    console.log("Erro: Digite apenas números!");
  } else {
    const formaTriangulo = ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA;
    if (!formaTriangulo) {
      console.log("Não é um triângulo! Tente outros valores.");
    } else {
      if (ladoA === ladoB && ladoB === ladoC) {
        console.log("Triângulo EQUILÁTERO (3 lados iguais)");
      } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log("Triângulo ISÓSCELES (2 lados iguais)");
      } else {
        console.log("Triângulo ESCALENO (os 3 lados diferentes)");
      }
    }
  }
}

function exercicio07() {
  const quantidade = parseFloat(prompt("Quantas maçãs você comprou? "));
  if (isNaN(quantidade) || quantidade <= 0) {
    console.log("Inválido! Digite um número maior que zero!");
  } else {
    const precoUnitario = quantidade >= 12 ? 0.25 : 0.30;
    const total = quantidade * precoUnitario;
    console.log(`Total a pagar: R$ ${total.toFixed(2)}`);
  }
}

function exercicio08() {
  const valor1 = parseFloat(prompt("Digite o primeiro número: "));
  const valor2 = parseFloat(prompt("Digite o segundo número: "));
  if (isNaN(valor1) || isNaN(valor2)) {
    console.log("Erro: Digite apenas números!");
  } else {
    if (valor1 < valor2) {
      console.log(`Ordem crescente: ${valor1} e ${valor2}`);
    } else {
      console.log(`Ordem crescente: ${valor2} e ${valor1}`);
    }
  }
}

function exercicio09() {
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
}

function exercicio10() {
  const numero = parseInt(prompt("Digite um número inteiro: "));
  if (isNaN(numero)) {
    console.log("Valor inválido! Digite apenas números.");
  } else {
    for (let i = 1; i <= 10; i++) {
      console.log(numero);
    }
  }
}

function exercicio11() {
  let total = 0;
  for (let i = 0; i < 5; i++) {
    const numero = parseFloat(prompt("Digite um número: "));
    total += numero;
  }
  console.log("Total:", total);
}

function exercicio12() {
  let numero;
  while (true) {
    numero = parseInt(prompt("Digite um número entre 1 e 10: "));
    if (isNaN(numero) || numero < 1 || numero > 10) {
      console.log("Valor inválido!");
    } else {
      break;
    }
  }
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

function exercicio13() {
  let soma = 0;
  let quantidade = 0;
  while (true) {
    const entrada = prompt("Digite um número (0 para sair): ");
    const numero = parseFloat(entrada);
    if (entrada === '0') break;
    if (isNaN(numero)) {
      console.log("Valor inválido!");
      continue;
    }
    soma += numero;
    quantidade++;
  }
  if (quantidade === 0) {
    console.log("Nenhum número válido foi inserido!");
  } else {
    const media = soma / quantidade;
    console.log(`Média: ${media.toFixed(2)}`);
  }
}

function exercicio14() {
  const numero = Number(prompt("Digite um número inteiro não negativo: "));
  if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
    console.log("Erro: Digite apenas números inteiros não negativos!");
  } else {
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
    console.log(`${numero}! = ${fatorial}`);
  }
}

function exercicio15() {
  let primeiro = 0;
  let segundo = 1;
  console.log(primeiro);
  console.log(segundo);
  for (let i = 3; i <= 10; i++) {
    let proximo = primeiro + segundo;
    console.log(proximo);
    primeiro = segundo;
    segundo = proximo;
  }
}

function menu() {
  while (true) {
    console.log("\nMENU INTERATIVO");
    console.log("1. Par ou Ímpar");
    console.log("2. Classificar idade");
    console.log("3. Status escolar");
    console.log("4. Calculadora simples");
    console.log("5. IMC");
    console.log("6. Tipo de triângulo");
    console.log("7. Valor das maçãs");
    console.log("8. Ordem crescente");
    console.log("9. Contagem regressiva");
    console.log("10. Repetir número 10x");
    console.log("11. Soma de 5 números");
    console.log("12. Tabuada");
    console.log("13. Média aritmética");
    console.log("14. Fatorial");
    console.log("15. Fibonacci");
    console.log("0. Sair");

    const escolha = prompt("Escolha uma opção: ");

    switch (escolha) {
      case '1': exercicio01(); break;
      case '2': exercicio02(); break;
      case '3': exercicio03(); break;
      case '4': exercicio04(); break;
      case '5': exercicio05(); break;
      case '6': exercicio06(); break;
      case '7': exercicio07(); break;
      case '8': exercicio08(); break;
      case '9': exercicio09(); break;
      case '10': exercicio10(); break;
      case '11': exercicio11(); break;
      case '12': exercicio12(); break;
      case '13': exercicio13(); break;
      case '14': exercicio14(); break;
      case '15': exercicio15(); break;
      case '0': console.log("Saindo"); return;
      default: console.log("Opção inválida!");
    }
  }
}

menu();
