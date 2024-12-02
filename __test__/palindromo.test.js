const palindromo = require('../utils/palindromo');

test('Comprobar palindromo hola', () => {
    expect(palindromo ("hola")).toBe('aloh');
})

test('Comprobar palindromo agua salada', () => {
    expect(palindromo ("agua salada")).toBe('adalas auga');
})
