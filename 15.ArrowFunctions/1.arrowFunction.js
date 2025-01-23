/**
 * Arrow Functions
 * 1. Arrow functions are a new way to define functions in JavaScript.
 * 2. They are more concise and easier to read than regular functions.
 * 3. They are often used in combination with higher-order functions.
 * 4. They are often used in combination with array methods.
 * 5. They are often used in combination with object methods.
 * 6. They are often used in combination with callback functions.
 * 7. They are often used in combination with promises.
 * 8. They are often used in combination with async/await.
 * 9. They are often used in combination with classes.
 */
/**
 * Arrow Functions also known as fat arrow functions,
 * are a concise and shorter way to write functions in JavaScript.
 * They were introduced in ES6 (ECMAScript 2015). and provide a
 * more compact syntax compared to traditional function expressions.
 */


//Normal regular function
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));//5
console.log(`--------------------------`);

//Arrow function
const add1 = (a, b) => {
    return a + b;
};
console.log(add1(2, 6));//8
console.log(`--------------------------`);

//Arrow function with implicit return
const add2 = (a, b) => a + b;
console.log(add2(2, 6));//8
console.log(`--------------------------`);

//Arrow function with single parameter
const add3 = a => a + 10;
console.log(add3(2));//12
console.log(`--------------------------`);
//Arrow function with no parameters and implicit return
const add4 = () => 10;
console.log(add4());//10
console.log(`--------------------------`);

//Arrow function with no parameters and explicit return
const add5 = () => {
    return 10;
}
console.log(add5());//10
console.log(`--------------------------`);
