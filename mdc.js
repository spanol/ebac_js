// • Implemente a solução para o seguinte desafio:
// 1. Calcule o MDC (máximo divisor comum) entre dois números.

const mdc = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

module.exports = { mdc };
