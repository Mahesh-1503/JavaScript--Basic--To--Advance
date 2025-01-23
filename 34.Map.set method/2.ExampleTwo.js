/**
 * Updating a Value
 * If a key already exists in the Map, set() updates its value.
 */

const myMap = new Map();

myMap.set('name', 'Alice');
myMap.set('name', 'Bob'); // Updates the value for the key 'name'

console.log(myMap.get('name')); // Output: Bob
