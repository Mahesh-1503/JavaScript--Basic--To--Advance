/**
 * The find() method is another built-in array helper in javascript 
 * that allows you to find the first element in array that matches a 
 * specific condition. It returns the value of the first element that 
 * satisfies the given function, or undefined if no such element is found.
 */

const peoples = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 35 },
    { name: 'Alice', age: 28 },
    { name: 'Charlie', age: 32 },
  
];

const res = peoples.find((person) => person.name === `Alice`);
console.log(res); // Output: { name: 'Alice', age: 28 }