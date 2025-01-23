//Using map with Chaining
const numbers = [1, 2, 3, 4, 5];
const result = numbers
  .map(num => num * 2)  // Double the numbers
  .filter(num => num > 5); // Keep only numbers > 5
console.log(result); // Output: [6, 8, 10]
//This shows how map can be chained with filter for more complex transformations.