/**
 * Challange:
 * 1.Iterate over "ages" array
 * 2.Print only those ages which is greater than 18
 */

const ages = [32, 33, 16, 40];

function checkAdults(age) {
    return age > 18;
}

const adults = ages.filter(checkAdults);
console.log(adults);

const adults2 = ages.filter((age) => age > 18);
console.log(adults2);