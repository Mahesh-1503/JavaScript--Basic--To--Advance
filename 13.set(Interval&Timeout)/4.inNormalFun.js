
/**
 * Stop the interval after 10 seconds
 */
const intervalId = setInterval(function (){
    let i = 0;
    console.log(`This function is being executed at the interval`);
},1000)

//stop the interval after 10 seconds
setTimeout(function(){
    clearInterval(intervalId);
    console.log(`The interval has been stopped after 10 seconds`);
},10000)