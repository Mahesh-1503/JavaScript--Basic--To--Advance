const num = [1, 2, 3, 4, 5];
console.log(num);

const stringArr = ['Mahesh', 'Kumar', 'Pothu'];
console.log(stringArr);

//Accessing Array Elements
console.log(num[0]);
console.log(num[1]);
console.log(num[2]);
console.log(num[3]);
console.log(num[4]);

//Accessing Array Elements
console.log(stringArr[0]);  
console.log(stringArr[1]);
console.log(stringArr[2]);

//Updating Array Elements
num[0] = 10;
console.log(num);

stringArr[0] = 'Mahesh Kumar';
console.log(stringArr);
//Adding Array Elements
num.push(6);
console.log(num);

stringArr.push('Pothu');
console.log(stringArr);
//Removing Array Elements
num.pop();
console.log(num);

stringArr.pop();
console.log(stringArr);

//Inserting Array Elements
num.unshift(0);
console.log(num);

stringArr.unshift('Mahesh');
console.log(stringArr);

//Removing Array Elements
num.shift();
console.log(num);

stringArr.shift();
console.log(stringArr);

//Sorting Array Elements
num.sort();
console.log(num);

stringArr.sort();
console.log(stringArr);