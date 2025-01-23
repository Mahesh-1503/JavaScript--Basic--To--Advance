//Comparing Symbols

const mySymbol1 = Symbol("name");
const mySymbol2 = Symbol("name");

console.log(mySymbol1 === mySymbol2); //false(Symbols are unique)
