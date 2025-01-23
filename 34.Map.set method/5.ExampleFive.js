//Map with Iteration
//You can use set() to add elements and then iterate over the Map.

const myMap = new Map();

myMap.set('name', 'Alice');
myMap.set('age', 25);

myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
// Output:
// name: Alice
// age: 25
