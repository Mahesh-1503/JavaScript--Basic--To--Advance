const words = [
    "apple",
    "banana",
    "orange",
    "banana",
    "apple",
    "orange",
    "apple",
    "grape",
];

const wordFrequency = words.reduce((frequencyMap, word) => {
    frequencyMap[word] = (frequencyMap[word] || 0) + 1;
    return frequencyMap;
}, {});

console.log(wordFrequency);