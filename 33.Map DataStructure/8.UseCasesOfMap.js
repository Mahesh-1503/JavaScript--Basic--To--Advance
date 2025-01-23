/**
 * Use Cases of map in JavaScript:
Data Transformation: Converting an array of objects into another format (e.g., extracting names or IDs).
Modifying Array Elements: Changing all elements of an array (e.g., scaling numbers, transforming strings).
Rendering Lists: Frequently used in frameworks like React to render lists dynamically.
 */

const items = ['Apple', 'Banana', 'Cherry'];
const listItems = items.map(item => `<li>${item}</li>`);
console.log(listItems);
// Output: ['<li>Apple</li>', '<li>Banana</li>', '<li>Cherry</li>']

//Unit Conversion: Convert one unit of measurement to another
const celsius = [0, 10, 20, 30];
const fahrenheit = celsius.map(temp => (temp * 9/5) + 32);
console.log(fahrenheit); // Output: [32, 50, 68, 86]
