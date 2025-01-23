const mySymbol1 = Symbol("name");
const mySymbol2 = Symbol("name");

const obj = {}
obj[mySymbol1] = "John value 1";
obj[mySymbol2] = "Doe value 2"; 

console.log(obj);