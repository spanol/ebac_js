const somarMultiplos = require("./sumMultiples.js").somarMultiplos;

describe("Somador de múltiplos", () => {
  it("deve retornar a soma de todos os múltiplos de 5 ou 7 até o valor do input", () => {
    const resultado = somarMultiplos(1000);
    expect(resultado).toBe(156361);
  });

  it("deve retornar 0 se o limite for menor que 5", () => {
    const resultado = somarMultiplos(4);
    expect(resultado).toBe(0);
  });
});
