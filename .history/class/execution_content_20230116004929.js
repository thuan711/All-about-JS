let x = 10;
function timeTen(a){
    return a * 10;
}
let y = timeTen(x);
console.log(y); //100
// Global execution context
// the creation phase
/** 
 * Global object: window
 * this: window
 * x: undefined
 * timeTen: function(){}
 * y: undefined
 */
// the execution phase
/***   
 * Global object: window
 * this: window
 * x: 10
 * timeTen: function(){}
 */