/*
1.---> Logical AND (&&):
The logical AND operator (&&) returns true if both the operands are true. It returns false if
2.---> Logical OR (||):
The logical OR operator (||) returns true if either of the operands is true. It returns false
3.---> Logical NOT (!):
The logical NOT operator (!) returns true if the operand is false and vice versa.
*/
const a = true;
const b = false;
const c = 4;
console.log(a && b); // false
console.log(a && c); // true
console.log(b && c); // false
console.log(a || b); // true
console.log(a || c); // true
console.log(b || c); // true
console.log(!a); // false
console.log(!b); // true
console.log(!c); // false
console.log(!0); // true