/**
 * Map is a built in data structure introduced in ES6
 * that allows you to store key-value pairs. where both the keys and values can be of any data type.
 * It is similar to an object, but it has some additional features and methods.
 */

/**
 * Keys can be of any data type:Unlike objects, where keys are limited to strings
 * and symbols, Map allows you to use any data type as keys,
 * including numbers, booleans, objects, and even other Map instances.
 */

/**
 * MAintains the insertion order: Map preserves the insertion order of its key-value pairs.
 * as they were inserted into the map. This means that when you iterate over a Map,
 * the keys will be in the order they were inserted into the map.This is different from objects,
 * where the keys are unordered.
 */

/**
 * Iteration: Map provides built-in methods for easy iteration over its elements.
 */

const map = new Map();
const keyOne = "string"
const keyTwo = {}
const keyThree = function() {}

map.set(keyOne, "value1");
map.set(keyTwo, "value2");
map.set(keyThree, "value3");
console.log(map)
console.log(map.keys());
console.log(map.values());
// console.log(map.delete(keyOne));
console.log(map.has(keyOne));
console.log(map.size);

//continue watching from 7:25:00