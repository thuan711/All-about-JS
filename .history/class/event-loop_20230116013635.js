// single thread
function talk(massage){
    let number = 100000000;
    while(number>0){
        number++;
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
// rời khỏi callbacks và chạy qua Web Apis -> Callback queue -> callbacks empty
console.log("hết"); // chạy xong và chạy khỏi callstack
// Web APIs: setTimeout, fetch Request, DOM Event