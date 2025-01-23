const computers = [
    {ram: 4, hdd: 100},
    {ram: 8, hdd: 200},
    {ram: 16, hdd: 500},
    {ram: 32, hdd: 1000},
    {ram: 64, hdd: 2000},
];

console.log(computers.filter((com) => com.ram >= 16));