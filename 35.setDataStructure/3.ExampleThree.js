//1. Create a set name (letters).
//2. Add ("a", "b", "c") as values.
//3. Iterate over set & log the values.

const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");

for (let letter of letters){
    console.log(letter);
}