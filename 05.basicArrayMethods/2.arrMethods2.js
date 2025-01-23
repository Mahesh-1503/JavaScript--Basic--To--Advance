const pl = ["JavaScript", "Golang", "Python", "PHP"];
const numbers = [3, 5, 2, 4, 1];

//includes
console.log(pl.includes("Golang")); // true

//join
console.log(pl.join("-")); // JavaScript-Golang-Python-PHP

//join
console.log(pl.join("-M-")); // JavaScript-M-Golang-M-Python-M-PHP

//reverse
console.log(pl.reverse()); // [ 'PHP', 'Python', 'Golang', 'JavaScript' ]

//slice
console.log(pl.slice(0,2)); // [ 'PHP', 'Python' ]

//sort
console.log(numbers.sort()); // [ 1, 2, 3, 4, 5 ]
