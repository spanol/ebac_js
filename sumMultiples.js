// • Implemente a solução para o seguinte desafio:
// 3. Listando todos os números inteiros abaixo de 10 que são múltiplos de 3 ou 5, ficamos com 3, 5, 6 e 9. A soma desses múltiplos é 23. Crie uma função que retorne a soma de todos os múltiplos de 5 ou 7 abaixo de 1000.

const sumMultiples = (cap = 1000) => {
  let sum = 0;
  for (let i = 0; i < cap; i++) {
    if (i % 5 === 0 || i % 7 === 0) sum += i;
  }
  return sum;
};

console.log(sumMultiples());
