/**
 * Enhanced object literals, introduced in ECMAScript 2015 (ES6), are a set of enhancements to the syntax
 * for defining objects in javascript. these enhancements make
 * it more convenient and concise to define objects, properties, and methods.
 */

function user(name, age, work){
    return{
        name: name,//name==>key and name==>value key is optional in ES6 enhanced object literals
        age: age,
        work: work,
    };
}

const user1 = user("Mahesh", 20, "Programmer");
console.log(user1);
console.log(`-----------------------------------------------`);
const user2 = user("Kumar", 23, "Developer");
console.log(user2);
console.log(`-----------------------------------------------`);

