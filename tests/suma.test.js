const { suma } = require('../src/app');

test('la función suma debe devolver el resultado correcto', () => {
  expect(suma(2, 3)).toBe(5);
});
