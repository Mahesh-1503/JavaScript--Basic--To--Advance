const ages = [32, 33, 16, 40];

function checkAdults(age) {
    return age >= 18;
}

const res = ages.filter(checkAdults);
console.log(res);