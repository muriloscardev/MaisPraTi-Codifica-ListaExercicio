console.log("Exercício 15: Sequência de Fibonacci (os 10 primeiros números)");

let primeiro = 0;
let segundo = 1;

// Mostra os dois primeiros números
console.log(primeiro);
console.log(segundo);

// Usa o loop para calcular os 8 próximos (totalizando 10)
for (let i = 3; i <= 10; i++) {
  let proximo = primeiro + segundo;
  console.log(proximo);

  // Atualiza os valores para a próxima repetição
  primeiro = segundo;
  segundo = proximo;
}