/**
 * The ternary operator (?:) is a conditional operator in JavaScript that allows you to choose between two values based on a condition.
 * It is often used in place of the if-else statement.
 * The syntax of the ternary operator is: condition ? trueValue : falseValue.
 */
/**
 * The ternary operator is a shorthand for if-else statements. It evaluates a condition and returns one value if the condition is true and another value if it's false.
 */
/**
 * Syntax:
 * condition ? expressionIfTrue : expressionIfFalse;
 */

//Basic Example

const age = 18;
const result = age >= 18 ? "You can vote" : "You cannot vote";
console.log(result); // Output: "You can vote"

console.log(`--------------------------`);

const isLoggedIn = false;
const message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message); // Output: "Please log in."

console.log(`--------------------------`);

const num = 5;
const evenOrOdd = num % 2 === 0 ? "Even" : "Odd";
console.log(evenOrOdd); // Output: "Odd"

console.log(`--------------------------`);

const temperature = 30;
temperature > 25 ? console.log("It's hot!") : console.log("It's cool!");
// Output: "It's hot!"

