//nested array

const nestArr = ['one',['two','three'], 'four'];
console.log(nestArr);
console.log(nestArr[1]);
console.log(nestArr[1][1]);// Output: three['one',['two','three'], 'four']



const myLetters = [{id:1,letter:'a'},{id:2,letter:'b'},{id:3,letter:'c'}];
console.log(myLetters);

console.log(myLetters[0].letter); // Output: a
