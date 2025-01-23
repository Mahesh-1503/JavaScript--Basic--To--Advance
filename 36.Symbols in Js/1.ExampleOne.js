/**
 * Symbol is a unique and immutable primitive data type introduced in ES6.
 * A symbol  is often used as an identifier for object properties to avoid
 * potential naming conflicts.
 */

/**
 * Unlike strings or numbers, symbols are guaranteed to be unique.
 * when you create a symbol, it is unique and cannot be recreated or
 * changed. This uniqueness ensures that symbols will not collide with
 * other property names, even is they have the same string representation.
 */

const mySymbol = Symbol("My Custom Symbol");
console.log(typeof mySymbol);//symbol
console.log(mySymbol);//Symbol(My Custom Symbol)