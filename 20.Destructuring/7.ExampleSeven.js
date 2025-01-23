//Assigning the rest of an array to a variable

const [a, ...b] = [1, 2, 3, true, ['One', 'Two']];
console.log(a); // 1
console.log(b); // [2, 3, true, ['One', 'Two']]