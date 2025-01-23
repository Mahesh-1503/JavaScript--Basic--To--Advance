//Chaining set() Calls
//Since set() returns the Map object, you can chain calls.

const myMap = new Map()
  .set('name', 'Alice')
  .set('age', 25)
  .set('country', 'USA');

console.log(myMap);
// Output: Map(3) { 'name' => 'Alice', 'age' => 25, 'country' => 'USA' }
