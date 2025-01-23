function greet(){
    return `Hello, my name is ${person.name} & I am ${person.age} years old.`;
}

const person = {
    name: 'Mahesh',
    age: 20,
    greet,
};

console.log(person.greet());

/**
 * Concept explanation:
 * 1. A function can be assigned to a variable
 * 2. A variable can be assigned to a object
 * 3. A object can be assigned to a variable
 * 4. A variable can be assigned to a function
 * 5. A function can be assigned to a object
 * 6. A object can be assigned to a function
 */

/**
 * Methods in JavaScript:
 * 1. A method is a function that is a property of an object
 * 2. A method can be defined in a object using the function keyword
 * 3. A method can be defined in a object using the function expression
 * 4. A method can be defined in a object using the arrow function
 * 5. A method can be defined in a object using the method shorthand
 */