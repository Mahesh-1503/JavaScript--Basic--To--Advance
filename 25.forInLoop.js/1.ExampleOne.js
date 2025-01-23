/**
 * for...in Loop:
 * the for...in loop is used to loop over the properties of an object.
 * it is often used to iterate over the keys of an object.
 * 
 * Syntax:
 * for (let key in object) {
 *   // code to be executed for each key
 * }
 */

let person = {
    name: "John",
    age: 30,
    gender: "male"
};

for (let key in person) {
    console.log(key + ":" + person[key]);
}
console.log(person);
