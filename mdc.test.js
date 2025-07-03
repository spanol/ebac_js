const calcularMDC = require("./mdc.js").mdc;

describe("Calculadora de MDC", () => {
  it("deve retornar o MDC de dois números", () => {
    const resultado = calcularMDC(48, 18);
    expect(resultado).toBe(6);
  });

  it("deve retornar o número quando um dos números é 0", () => {
    const resultado = calcularMDC(0, 5);
    expect(resultado).toBe(5);
  });
});
