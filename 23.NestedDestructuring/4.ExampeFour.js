// Nested Array Destructuring

const numbers = [1, [2, 3], 4];

const [first, [second, third], fourth] = numbers;

console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(third);  // Output: 3
console.log(fourth); // Output: 4
