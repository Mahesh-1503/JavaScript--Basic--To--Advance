//what is inside the function that logic happens

const words = ['hello','bird', 'table', 'football', 'pipe', 'code'];

const capWords = words.forEach((word, index, arr) => {
    arr[index] = word[0].toUpperCase()  + word.substring(1);
});

console.log(words);
console.log(capWords);