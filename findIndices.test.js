const encontrarIndices = require("./findIndices.js").findIndices;

describe("Encontrar Índices", () => {
  it("deve retornar os índices do maior e do menor elemento de uma array", () => {
    const resultado = encontrarIndices([1, 2, 3, 4, 5]);
    expect(resultado).toEqual({ maxIndex: 4, minIndex: 0 });
  });

  it("deve retornar -1 para um array vazio", () => {
    const resultado = encontrarIndices([]);
    expect(resultado).toEqual({ maxIndex: -1, minIndex: -1 });
  });
});
