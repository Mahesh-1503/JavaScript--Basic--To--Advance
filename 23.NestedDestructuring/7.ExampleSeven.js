//Example with Mixed Array and Object:

function processData([first, { key1, key2 }]) {
  console.log(first); // Output: 10
  console.log(key1); // Output: value1
  console.log(key2); // Output: value2
}

const data = [10, { key1: "value1", key2: "value2" }];
processData(data);

/**
 * Nested destructuring simplifies accessing
 * deep data structures and improves code
 * readability, especially for objects and arrays with
 * multiple layers.
 */

/**
 * completed (6:09:39) Nested Destructuring
 * start watching from 6:09:39 ===> Ternary Operator
 */
