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