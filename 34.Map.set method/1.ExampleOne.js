/**
 * What is map.set() in JavaScript?
The map.set() method is used with the Map object in JavaScript. It allows you to add or update a key-value pair in the Map.

A Map is a collection of key-value pairs, where keys can be of any data type (not just strings). It preserves the insertion order of the elements.
 */

/**
 * Syntax of map.set():
 * map.set(key, value)
 */

/**
 * Parameters:
 *key: The key of the element to be added or updated.
 *value: The value associated with the key.
 */
/**
 * Returns:
 *The set() method returns the Map object, which allows for method chaining.
 */

 //Example of Creating and Using a Map

 const myMap = new Map();

// Adding key-value pairs using set()
myMap.set('name', 'Alice');
myMap.set('age', 25);
myMap.set('isStudent', true);

console.log(myMap);
// Output: Map(3) { 'name' => 'Alice', 'age' => 25, 'isStudent' => true }

