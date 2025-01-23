/**
 * callBack Function:
 * - A callback function is a function that is passed as an argument to another function.
 * - The function that is passed as an argument to another function is called a callback function.
 * - The callback function is executed after the function that passed it as an argument has completed execution.
 */

function showCallFun(fn){
    const value = 10;
    fn(value);
}
showCallFun(function(value){
    console.log(value);
});
