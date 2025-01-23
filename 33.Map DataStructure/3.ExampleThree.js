/**
 * Syntax:
 * array.map(callbackFunction(currentValue, index, array))

 */

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares); // Output: [1, 4, 9, 16, 25]
