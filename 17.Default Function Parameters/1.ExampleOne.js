/**
 * Default Function Parameters:
 * introduced in ES6 (ECMAScript 2015).
 * allows you to provide default values for function parameters.
 * when a function is called, and an argument is not provided for a parameter, the default value is used.
 * this feature makes it easier to handle cases where arguments might be missing or undefined.
 */

function countTo5(count){
    if (count === true){
        for(let i = 10; i >= 5; i--){
            console.log(`Count: ${i}`);
        }
    }
}

countTo5(true);
// countTo5(false); // this will not print anything to the console.