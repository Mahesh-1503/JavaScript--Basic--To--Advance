const symbol1 = Symbol(`name`)
const symbol2 = Symbol(`name`)

const huxn = {}
    huxn.age = 19
    huxn['gender'] = 'male'
    huxn['gender'] = 'female'//gender will be updated to female
    huxn[symbol1] = 'alex'
    huxn[symbol2] = 'john'
console.log(huxn);