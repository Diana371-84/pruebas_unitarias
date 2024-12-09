const palindromo = require('../utils/palindromo');

test('Comprobar palindromo hola', () => {
    expect(palindromo ("hola")).toBe('aloh');
})

test('Comprobar palindromo agua salada', () => {
    expect(palindromo ("agua salada")).toBe('adalas auga');
})


describe('palindromo', () => {
    test.each`
      firstValue |expectedResult   
      ${"nieve"}   | ${"evein"}       
      ${"amor"}    | ${"roma"}        
    `('$firstValue + should return $expectedResult', ({firstValue, expectedResult}) => {
      expect(palindromo(firstValue,)).toBe(expectedResult);
    });
  });