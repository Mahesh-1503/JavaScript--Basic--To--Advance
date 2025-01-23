let products = [
    {name: "Checkers", category: "chess"},
    {name: "Harry Potter", category: "Books"},
    {name: "iPhone", category: "Electronics"},
    {name: "Learn Golang", category: "Books"},
];

const product = products.find((product) => product.category === "Books");
console.log(product);

console.log(`-------------------------------------------`);


const product2 = products.filter((product) => product.category === "Books");
console.log(product2);