/**
 * Template Strings
 * - Template literals are a feature introduced in ES6 (ECMAScript 2015) that allows you to create multi-line strings and embed expressions within them.
 * - They are similar to regular strings, except that they are enclosed in back ticks (``).
 * - They are also called "template strings" or "template literals".
 * - They are used to create strings with embedded expressions.
 * - They are useful for creating dynamic strings that can be constructed with data from variables or expressions.
 */

// Example
let name = "Mahesh";
let age = 20;
let message = `Hello, my name is ${name} and I'm ${age} years old.`;
let message2 = `Hello, my name is ${name} 
and I'm ${age} years old.`;
console.log(message); // Output: "Hello, my name is John and I'm 30 years old."
console.log(`--------------------------`);

console.log(message2);// Output: "Hello, my name is John\nand I'm 30 years old."
console.log(`--------------------------`);
console.log(`${['one', 'two', 'three']}`); // Output: "['one', 'two', 'three']"