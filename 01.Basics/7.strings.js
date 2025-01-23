//Strings

let firstName = "Mahesh";
let middleName = 'Kumar';
let lastName = `Pothu`;
//string concatenation
console.log(firstName + " " + middleName + " " + lastName);

//2.append
firstName += " Pothu";
console.log(firstName);

//3.length
console.log(firstName.length);

//4.lowerCase
console.log(firstName.toLowerCase());

//5.upperCase    
console.log(firstName.toUpperCase());

//6.Slice
console.log(firstName.slice(0,3));  //Mah 

//7.substring
console.log(firstName.substring(0,3)); //Mah

//8.split
console.log(firstName.split(" ")); //['Mahesh', 'Pothu']
console.log(firstName.split("")); //['M', 'a', 'h', 'e', 's', 'h', ' ', 'P', 'o', 't', 'h', 'u']
//Split & Join
console.log(firstName.split("").join("-")); //M-a-h-e-s-h- - P-o-t-h-u

//8.replace
console.log(firstName.replace("Pothu", "Kumar")); //Mahesh Kumar

//9.trim
console.log("    Mahesh    ".trim()); //Mahesh

//10.includes
console.log(firstName.includes("Pothu")); //true
console.log(firstName.includes("Poth")); //false

//Back Ticks in Strings (template literals)
console.log(`My name is ${firstName} ${middleName} ${lastName}`);


/*
===> 1:47:40 //Type Conversion
*/