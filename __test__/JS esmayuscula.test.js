const isUpperCase = require('../utils/esmayuscula');

test('Comprobar mayuscula True', () => {
    expect(isUpperCase("HOLA")).toBe(true);
})

test('Comprobar mayuscula False', () => {
    expect(isUpperCase("hola")).toBe(false);
})

describe('mayuscula', () => {
    test.each`
      firstValue | expectedResult    
      ${"GIGA"}    | ${true} 
      ${"giga"}    | ${false}
    `('$firstValue + $secondValue should return $expectedResult', ({firstValue, expectedResult}) => {
      expect(isUpperCase(firstValue)).toBe(expectedResult);
    });
  });