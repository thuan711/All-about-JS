function wait(timer = 0){
    return new Promise(function(resolve, reject){
        setTimeout(resolve, timer);
    })
}

async function run() {
    console.log("Starting");
    await wait(2000);
    console.log("running");
    await wait(1000);
    console.log("ending");
}
// run
// arrow functions
const fn = async () => {};
const student = {
    fullname: async function() {},
    async callage(){},
    yearly: async () => {},
}

function makeTimer(timer=1000,str){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve(str);
        },timer);
    })
}
async function allTimer(){
    const timer1 = makeTimer(1000,"lần 1")
    const timer2 = makeTimer(1000,"lần 2")
    const [a,b] = await Promise.all([timer1,timer2])
    console.log(a,b);
}