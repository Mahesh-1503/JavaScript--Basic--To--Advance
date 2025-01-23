function greet(name, cb){
    console.log(`Hello ${name}`);
    cb();
}

greet('Mahesh', function cb(){
    console.log('This is callback function');
})

function cb(){
    console.log('This is callback function');
}

greet('Mahesh', cb);