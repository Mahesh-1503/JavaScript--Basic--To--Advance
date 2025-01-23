//Basic Example

const person = { name: "John", age: 30, city: "New York" };
const { name, age, city } = person;
console.log(name); // Output: "John"
console.log(age);  // Output: 30
console.log(city); // Output: "New York"

console.log(`=========================================`);

//Using Different Variable Names
const personDetails = { name: "John", age: 30 };
const { name: fullName, age: years } = person;
console.log(fullName); // Output: "John"
console.log(years);    // Output: 30

console.log(`=========================================`);

//Using Default Values
const car = { brand: "Toyota" };
const { brand, model = "Corolla" } = car;
console.log(brand); // Output: "Toyota"
console.log(model); // Output: "Corolla"

console.log(`=========================================`);
