//Type Conversion

//-Covert string to number
let score = "100"
console.log(typeof score);//string

score = Number(score);
console.log(typeof score);//number

let result = score + 1;
console.log(`typeof result: ${typeof result}: ${result}`);//typeof result: number: 101

//-Covert number to string
let number = 100;
let string = String(number);
console.log(typeof string + " " + number);//string 100

let number1 = 100;
number1 = number1.toString();
console.log(typeof number1);//string


//-Covert string to number
let money = "100";
money = parseInt(money);
console.log(typeof money);//number

//-Covert string to decimal
let money1 = "100.50";
console.log(money1);//string

money1 = parseFloat(money1);
console.log(typeof money1);//number
