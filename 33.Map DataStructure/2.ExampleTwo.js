const birthYears = [2000,2002,2004,2006]

const ageFind = (ele) => 2024 - ele;
const ages = birthYears.map(ageFind);
console.log(ages); // [24,22,21,19]