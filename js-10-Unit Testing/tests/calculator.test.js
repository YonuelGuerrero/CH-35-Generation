const calculator = require('../modules/calculator');

//primer test para la suma 
test('la suma de dos numeros y el valor resultante', ()=> {
    expect(calculator.sum(10,20)).toBe(30);
});

//segundo test para la resta 
test('la resta de dos numeros y el valor resultante', ()=> {
    expect(calculator.substract(10,20)).toBe(-10);
});