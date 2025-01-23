/**
 * The rest operator (...) is used to collect multiple arguments into an array.
 * It is often used with functions that accept variable number of arguments.
 */

//the rest parameter syntax allows a function to accept an indefinite number of arguments 
//as an array, providing a way to represent variadic functions in JavaScript.

function user(x,...userData){
    console.log(x);
    console.log(userData);
}

user('HuXn', '19', 'Male', 'programmer');

// Output:
// HuXn
// [ '19', 'Male', 'programmer' ]