/**
 * 
The spread operator (...) in JavaScript is used to spread elements 
of an array, object, or iterable into individual elements. It's 
commonly used to copy, merge, or expand arrays and objects.
 */

//spread in array
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr2); // Output: [1, 2, 3]
console.log(`--------------------------`);

//merging arrays
const arr3 = [4, 5, 6];
const arr4 = [...arr1, ...arr3];
console.log(arr4); // Output: [1, 2, 3, 4, 5, 6]
console.log(`--------------------------`);

//spread in object
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // Output: { a: 1, b: 2, c: 3 }
console.log(`--------------------------`);
//spread in object with different keys
const obj3 = { d: 4, e: 5 };
const obj4 = { ...obj1, ...obj3 };
console.log(obj4); // Output: { a: 1, b: 2, d: 4, e: 5 }   
console.log(`--------------------------`); 

//spread in function arguments
function add(a, b, c) {
    return a + b + c;
}
const args = [1, 2, 3];
console.log(add(...args)); // Output: 6

console.log(`--------------------------`);

//copying an object
const obj5 = { a: 1, b: 2 };
const obj6 = { ...obj5 };
console.log(obj6); // Output: { a: 1, b: 2 }

/**
 * continue watching from 5:09:38
 */