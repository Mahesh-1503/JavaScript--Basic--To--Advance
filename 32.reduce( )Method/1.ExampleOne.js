/**
 * reduce( ) Method:
 * - The reduce() method is used to reduce an array to a single value.
 * the reduce() method applies the reducer function to each element of an 
 * array to reduce it to a single value. It is often used to perform calculations
 * or aggregations on array elements and returns a single value.
 * 
 * it wont changes the original array but returns a single value that means 
 * it will not change the original array
 */


const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((p, c) => {
    console.log(`Previous Value: ${p}`);
    console.log(`Current Value:  ${c}`);
    // console.log(`Return Value:   ${p + c}`);
    
    return p + c;
}, 0);
console.log(sum);
