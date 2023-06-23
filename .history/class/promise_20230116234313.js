/**
 * status: pending
 * status: resolve
 * status: reject
 */
// new promise(function(resolve, reject))
// let buyiPhone = true;
// let willBuyiPhone = new Promise(function(resolve, reject) {
//     setTimeout(()=>{
//         if(buyiPhone){
//             resolve("Mua iPhone");
//         } else{
//             reject("Không mua");
//         }
//     },3000);

// });
//console.log(willBuyiPhone);
// .then(onFullfilled, onReject);
// function makePromise(buyiPhone){
//     return new Promise(function(resolve, reject){
//         setTimeout(()=>{
//             if(buyiPhone){
//                 resolve("Mua iPhone");
//             } else{
//                 reject("Không mua");
//             }
//         },3000);
//     });
// }
// let haveiPhone = makePromise(false);
// haveiPhone
//     .then(
//         (success) =>{
//             console.log(success);
//         }
//     )
//     .catch(
//         (error) =>{
//         console.log(error);
//         }
//     )
//     .finally(
//         () =>{
//             console.log("Tôi vẫn vui nhá!");
//         }
//     )

// new Promise(function(resolve,reject){
//     setTimeout(() =>{
//         resolve("1. chạy lần đầu");
//     }, 3000);
// })
//     .then((data) =>{
//         console.log(data);
//         return new Promise(function(resolve,reject){
//             setTimeout(()=>{
//                 resolve("2. Chạy lần hai");
//             },2000)
//         })
//     })
//     .then((data) =>{
//         console.log(data)
//         return new Promise(function(resolve,reject){
//             setTimeout(()=>{
//                 resolve("3. Chạy lần hai");
//             },2000)
//         })
//     })
//     .then((data) =>{
//         console.log(data)
//     })
// Promise.all

function makeTimer(timer = 1000,str){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve(str)
        },timer);
    })
}
const timer1 = makeTimer(5000,"lần 1");
const timer2 = makeTimer(5000,"lần 2");
const timer3 = makeTimer(2000,"lần 3");
const timerTotal = Promise.all([timer1,timer2,timer3]).then((data)=>{
    console.log(data);
})

// Promise.race
const timeTotal2 = Promise.race([timer1,timer2,timer3]).then((data)=>{
   // console.log(data);
})

// try catch
function isFont(languages){
    if(!languages.includes("html")){
        throw new Error("Bạn không biết gì cả");
    } return new Promise(function(resolve, reject) {
        setTimeout(() =>{
            resolve("oke bạn");
        },1000)
    })
}

isFont(["css"])
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })