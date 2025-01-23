/**
 * Iterate over objects and log the property and the value of that object using for in looop.
 * 
 * const object = {a: 1, b: 2, c: 3};
 */

const object = {a: 1, b: 2, c: 3};

for (let key in object){
    console.log(`${key} : ${object[key]}`);
}