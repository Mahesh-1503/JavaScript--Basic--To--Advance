/**
 * Using Non-String Keys
 * Unlike plain objects, Map keys can be any data type.
 */

const myMap = new Map();

const key1 = {};
const key2 = () => {};
const key3 = 42;

myMap.set(key1, 'This is an object key');
myMap.set(key2, 'This is a function key');
myMap.set(key3, 'This is a number key');

console.log(myMap);
// Output:
// Map(3) { {} => 'This is an object key', [Function] => 'This is a function key', 42 => 'This is a number key' }
