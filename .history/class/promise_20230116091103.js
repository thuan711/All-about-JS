/**
 * status: pending
 * status: resolve
 * status: reject
 */
// new promise(function(resolve, reject))
let buyiPhone = true;
let willBuyiPhone = new Promise(function(resolve, reject) {
    setTimeout(()=>{
        if(buyiPhone){
            resolve("Mua iPhone");
        } else{
            reject("Không mua");
        }
    },3000);

});
//console.log(willBuyiPhone);
// .then(onFullfilled, onReject);
function makePromise(buyiPhone){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            if(buyiPhone){
                resolve("Mua iPhone");
            } else{
                reject("Không mua");
            }
        },3000);
    });
}
let haveiPhone = Promise(true);
haveiPhone.then(
    (success) => console.log(success),
    (reason) => console.log(reason)
);