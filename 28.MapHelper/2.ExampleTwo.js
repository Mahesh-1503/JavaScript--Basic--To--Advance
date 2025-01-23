let people = [
    {firstName: `Mahesh`, lastName: `Kumar`},
    {firstName: `Ramesh`, lastName: `Kumar`},
    {firstName: `Suresh`, lastName: `Kumar`},
]

const results = people.map(person => {
    return [person.firstName, person.lastName];
});
console.log(results);
console.log(`---------------------`);
const result2 = people.map(person => {
    return `${person.firstName} ${person.lastName}`;
})
console.log(result2);