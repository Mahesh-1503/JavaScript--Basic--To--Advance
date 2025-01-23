const person = {
    
        name: "Mahesh",
        age: 20,
        isProgrammer: true,
        languages: ["JavaScript", "Python", "Java"],
        email: "q2b7y@example.com",
        address: {
            street: "123 Main St",
            city: "New York",
            state: "NY",
            zip: "10001"
        },
        
    
};

/**
 * JSON.stringify() method converts a JavaScript object or value to a JSON string.
 */

const jsonString = JSON.stringify(person);
console.log(jsonString);
console.log(`============================================`);

/**
 * JSON.parse() method converts a JSON string to a JavaScript object.
 * 
 */

const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);

console.log(`============================================`);

console.log(person.address);