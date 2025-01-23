/**
 * Challange:
 * 1. Iterate over "words" array.
 * 2. Print only those words which length is greater than 6.
 */
const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
];

const results = words.filter((word) => word.length > 6);
console.log(results);
console.log(`----------------------`);

words.filter((word) => {
    if (word.length > 6) {
        console.log(word);
    }
});

//6:46:28
