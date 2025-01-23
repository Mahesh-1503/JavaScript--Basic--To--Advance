/**
 * 1. Make a clone of "arr, arr2" by using spread operator.
 * 2. make a clone of "user" object using spread operator.
 */

let arr = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr, ...arr2];

console.log(arr3);

let user = {
    name: 'John',
    age: 30,
    city: 'New York'
}

const clonedUser = {...user};

console.log(clonedUser);