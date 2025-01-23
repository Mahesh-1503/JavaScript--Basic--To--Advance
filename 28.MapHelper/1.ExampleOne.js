/**
 * map helper(map() method):
 * the map() method creates a new array populated with the results
 * of calling a provided function on every element in the calling 
 * array.
 */

let number = [1, 2, 3, 4, 5];

let double = number.map(num => num * 2);
console.log(double);// [2, 4, 6, 8, 10]
console.log(`----------------------`);
let square = number.map(num => num * num);
console.log(square);// [1, 4, 9, 16, 25]
console.log(`----------------------`);
console.log(number);// [1, 2, 3, 4, 5]
console.log(`----------------------`);