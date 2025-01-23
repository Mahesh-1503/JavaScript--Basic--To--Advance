//Extracting Specific Properties
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
const userNames = users.map((user) => user.name);
console.log(userNames); // Output: ['Alice', 'Bob', 'Charlie']
/**This example demonstrates how map can be used to extract specific 
 * properties (name) from an array of objects.
*/
