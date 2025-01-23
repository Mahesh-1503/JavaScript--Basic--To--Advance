const person = {
    name: 'Mahesh',
    age: 20,
    country: 'India'
}

function printPersonInfo({name, age, country}){
    console.log(`Name: ${name}`)
    console.log(`Age: ${age}`)
    console.log(`Country: ${country}`)
}

printPersonInfo(person)

