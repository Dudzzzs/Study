const calculuCombustivel = require('./exercicio')


test('distancia 160 com gasolina é igual 10 litros', () => {
    expect(calculuCombustivel.calculuCombustivel(160, 'gasolina')).toBe(10);
  });

test('distancia 220 com etanol é igual 20 litros', () => {
    expect(calculuCombustivel.calculuCombustivel(220, 'etanol')).toBe(20);
  });

test('Combustivel diferente de gasolina ou etanol', () => {
    expect(calculuCombustivel.calculuCombustivel(100, 'agua')).toMatch('Combustível inválido!');
  });

test('Distancia menor ou igual a 0', () => {
    expect(calculuCombustivel.calculuCombustivel(0, 'etanol')).toMatch('A distância deve ser maior que 0!');
  });
  
