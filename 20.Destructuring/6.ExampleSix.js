function f(){
    return [1,2,3];
}

function g(){
    return [4,5,6];
}

const [a,b,c] = f();
console.log(a, b, c);

console.log(`--------------------------`);

const [x, , z] = g();
console.log(x, z);