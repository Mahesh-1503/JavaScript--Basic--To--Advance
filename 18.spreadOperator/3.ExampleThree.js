const strNums = ['one', 'two', 'three', 'four', 'five'];
const moreStrNums = ['six', 'seven', 'eight', 'nine', 'ten'];

const allStrNums = [...strNums, ...moreStrNums];
console.log(allStrNums); // ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']