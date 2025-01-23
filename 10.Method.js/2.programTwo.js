const person = {
    name: 'Mahesh',
    age: 20,
    greet: function(){
        return `Hello, my name is ${person.name} & I am ${person.age} years old.`;
        
    }
}

console.log(person.greet()); // Hello, my name is Mahesh & I am 20 years old.