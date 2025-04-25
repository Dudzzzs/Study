const calculadora = require("./calculadora")

test('somar 10 mais 5 é igual a 15', () => {
    expect(calculadora.somar(10, 5)).toBe(15);
  });

test('subtrair 10 menos 5 é igual a 5', () => {
    expect(calculadora.subtrair(10, 5)).toBe(5);
  });

test('multiplicar 10 por 5 é igual a 50', () => {
    expect(calculadora.multiplicar(10, 5)).toBe(50);
  });

test('dividir 10 por 5 é igual a 2', () => {
    expect(calculadora.dividir(10, 5)).toBe(2);
  });