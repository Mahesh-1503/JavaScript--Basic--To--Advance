const a = 1;
const b = 2;
const c = 3;


const obj = {a, b, c, d:() => a + b + c};//this arrow function is extra added

console.log(obj);
console.log(obj.d());