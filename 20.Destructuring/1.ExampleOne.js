/**
 * Destructuring allows us to "unpack" values from
 * data-structures (Arrays, objects) into separate
 * distinct variables.
 */

const foo = ['one', 'two', 'three'];



const[one] = foo;
console.log(one); // Output: one
console.log(`--------------------------`);
console.log(foo);// Output: (3) ["one", "two", "three"]
console.log(`--------------------------`);
console.log(foo[0]); // one
console.log(`--------------------------`);
console.log(foo[1]); // two
console.log(`--------------------------`);
console.log(foo[2]); // three

console.log(`--------------------------`);
console.log("DESTRUCTURING");
const [one1, two, three] = foo;
console.log(one1); // Output: one
console.log(two); // Output: two
console.log(three); // Output: three
