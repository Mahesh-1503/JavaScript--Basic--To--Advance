const obj1 = {x:1, y:2};
const obj2 = {z:3};
const obj3 = {...obj1, ...obj2};
console.log(obj3);// Output: { x: 1, y: 2, z: 3 }
