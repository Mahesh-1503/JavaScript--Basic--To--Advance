let x = '0'
let bulb;

switch (x) {
    case '0':
        bulb = 'Off';
        break;
    case '1':
        bulb = 'On';
        break;
    default:
        bulb = 'No value found!.';
}

console.log(bulb); // Off