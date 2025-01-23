//1. Create a symbol provide a value of "foo"
//2. Check the type of the symbol
//3. Create Empty object
//4. Store symbol as the property to that object.

let sym = Symbol("foo");
console.log(typeof sym);//symbol
let obj = {
   firstName: "John",
   lastName: "Doe",
};
obj[Symbol("foo")] = "some value for foo";
console.log(obj);

for (let i in obj) {
    console.log(i);
}


/**
 * continue watching from 7:46:00 Where DOM concept starts
 */