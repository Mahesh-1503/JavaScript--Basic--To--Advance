/**
 * the spread operator is a new addition to the set of operators
 * in Javascript ES6.
 * It takes in an iterable (like an array or string) and expands it into individual elements.
 * The spread operator is commonly used to make shallow copies of JS objects.
 * Using this operator makes code concise and enhances its readability.
 */

function giveMe4(a, b, c){
    console.log('a', a);
    console.log('b', b);
    console.log('c', c);

    
}
const colors = ['red', 'green', 'blue', 'teal'];
giveMe4(colors);// Output: a [ 'red', 'green', 'blue', 'teal' ]
console.log('------------------');
giveMe4(...colors);// Output: a red b green c blue d teal
console.log('------------------');

giveMe4(1, 2, 3);