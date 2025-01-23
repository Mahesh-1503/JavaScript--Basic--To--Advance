const fruits = [
    'apple',
    'banana',
    'mango',
    'grapes',
    'watermelon'
];

const newFruits = [
    'strawberry',
    'blueberry',
    'pineapple', 
    'cherry', 
    'peach'
]

//concat
const allFruits = fruits.concat(newFruits);
console.log(allFruits);

console.log(fruits.length);
fruits.push('orange');
console.log(fruits.length);
console.log(fruits);

//pop
fruits.pop();
console.log(fruits);

//shift
fruits.shift();
console.log(fruits);

//unshift
fruits.unshift('kiwi');
console.log(fruits);