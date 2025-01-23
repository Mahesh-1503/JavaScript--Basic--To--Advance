/**
 * Global Scope:
 * Global variables are declared outside any function and are accessible from anywhere in your JavaScript code.
 * 
 * Local Scope:
 * Local variables are declared within a JavaScript function and are only accessible from within that function.
 * 
 * Block Scope:
 * Block variables are declared within a block of code, such as a loop or if statement, and are only accessible from within that block.
 * 
 */


let textMessage = 'Hi!';
console.log(textMessage); // Output: Hello!
function showMessage() {
    let textMessage = 'Hello!';
    console.log(textMessage);
}

showMessage(); // Output: Hello!

//Global Scope example
let globalVariable = 'Hello!';

function myFunction() {
    console.log(globalVariable); // Output: Hello!
}

myFunction();

//Local Scope example
function myFunction() {
    let localVariable = 'Hello!';
    console.log(localVariable); // Output: Hello!
}

myFunction(); // Output: Hello!


/**
 * 04:02:00(Scopes in JavaScript) completed 
 * next ===>  Methods in javaScript
 */