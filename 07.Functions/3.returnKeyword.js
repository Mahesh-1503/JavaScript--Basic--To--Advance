/**
 * return keyword
 * - The return keyword is used to return a value from a function.
 * - The value returned by the function is stored in a variable that is specified after the return keyword.
 * - If no value is specified after the return keyword, the function returns undefined.
 * - The return keyword can be used to return multiple values from a function.
 * - The return keyword can be used to return a value from a function that is called from another function.
 */

function add(a, b) {
    return a + b;// return keyword is used to return the sum of a and b
}

let result = add(10, 20);
console.log(result);//30
let result1 = add(30, 50); //return keyword is used to return the sum of 30 and 50
console.log(result1);//80
