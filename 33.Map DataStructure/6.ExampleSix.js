//Adding an Index

const numbers = [10, 20, 30];
const indexed = numbers.map((num, index) => `Index ${index}: ${num}`);
console.log(indexed);
// Output: ['Index 0: 10', 'Index 1: 20', 'Index 2: 30']
//Here, the callback function uses both the element (num) and its index (index).