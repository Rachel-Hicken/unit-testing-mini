const fns = require('./functions');

test('returnTwo should return the number 2', () => {
    let result = fns.returnTwo();
    expect(result).toBe(2);
})

test('greeting should say "Hello"', () => {
    let result = fns.greeting('James');
    expect(result).toEqual('Hello, James.')
})
test('greeting should say "Hello"', () => {
    let result = fns.greeting('Jill');
    expect(result).toEqual('Hello, Jill.')

})
test('add should add to numbers', () => {
    let result = fns.add(1, 2);
    expect(result).toBe(3);
})
test('add should add to numbers', () => {
    let result = fns.add(5, 9);
    expect(result).toBe(14);
})
test('multiply should multiply two numbers', () => {
    let result = fns.multiply(4, 6);
    expect(result).toBe(24);
})
test('divide should divide two numbers', ()=>{
    let result = fns.divide(10, 2);
    expect(result).toBe(5);
})
test('subtract should subtract two numbers',()=>{
    let result = fns.subtract(36, 6);
    expect(result).toBe(30);
})