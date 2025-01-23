function calculateProduct(numbers) {
    return numbers.reduce((product, number) => product * number);
}

const numbers = [2,3,4,5];
const product = calculateProduct(numbers);
console.log(product);// Output: 120