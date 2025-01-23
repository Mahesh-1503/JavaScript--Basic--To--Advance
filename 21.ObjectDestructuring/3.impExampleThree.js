/**
 * Object Destructuring and rest operator
 */

let {a, b, ...rest} = {a: 1, b: 2, c: 3, d: 4, e: 5};
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(rest); // Output: { c: 3, d: 4, e: 5 }