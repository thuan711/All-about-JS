// single thread
function talk(massage){
    let number = 100000000;
    while(number>0){
        number--;
    }
    console.log(massage);
}
// main
// call stack
/** 
 * Start
 * talk
 * end
 */
// call back
console.log("bắt đầu")
setTimeout(()=>{
    talk("abc")
},2000);
console.log("hết");