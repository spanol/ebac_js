// • Implemente a solução para os seguintes desafios:
// 1. Calcule o MDC (máximo divisor comum) entre dois números.
// 2. Dado um array numérico qualquer sem valores repetidos, descubra qual é o índice do maior valor e o índice do menor valor.
// 3. Listando todos os números inteiros abaixo de 10 que são múltiplos de 3 ou 5, ficamos com 3, 5, 6 e 9. A soma desses múltiplos é 23. Crie uma função que retorne a soma de todos os múltiplos de 5 ou 7 abaixo de 1000.

const mdc = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const findIndices = (arr) => {
  const maxIndex = arr.indexOf(Math.max(...arr));
  const minIndex = arr.indexOf(Math.min(...arr));
  return { maxIndex, minIndex };
};

const sumMultiples = (cap = 1000) => {
  let sum = 0;
  for (let i = 0; i < cap; i++) {
    if (i % 5 === 0 || i % 7 === 0) sum += i;
  }
  return sum;
};

console.log(mdc(12, 18));
console.log(findIndices([10, 20, 5, 30, 15]));
console.log(sumMultiples());
