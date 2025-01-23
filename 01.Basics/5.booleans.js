//Boolean true or false

let isTrue = true;
console.log(isTrue);

let isFalse = false;
console.log(isFalse);

let isNull = NaN;
console.log(isNull);

let number = 10;
console.log(number + undefined);

//falsey values
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

//truthy values
console.log(Boolean(1));
console.log(Boolean("Mahesh"));
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean(" "));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean("false"));

//Difference between null and undefined
//null is an object
//undefined is not an object
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean("null"));
console.log(Boolean("undefined"));