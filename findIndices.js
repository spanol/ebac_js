// • Implemente a solução para o seguinte desafio:
// 2. Dado um array numérico qualquer sem valores repetidos, descubra qual é o índice do maior valor e o índice do menor valor.
const findIndices = (arr) => {
  const maxIndex = arr.indexOf(Math.max(...arr));
  const minIndex = arr.indexOf(Math.min(...arr));
  return { maxIndex, minIndex };
};

console.log(findIndices([10, 20, 5, 30, 15]));
