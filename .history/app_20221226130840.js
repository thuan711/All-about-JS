// function a(a,b){
//     if(typeof a !== "number" || typeof b !== "number"){
//         console.log("CC");
//         return;
//     }
//     return Math.max(a,b);
// }
// console.log(a(10,abc));
// function a(word = ""){
//     if(word.length == 0) return null;
//     let abc = word.toLowerCase().charAt(0).toUpperCase();
//     let other = word.toLowerCase().slice(1);
//     return abc + other; 
// }
// console.log(a("nam"));
// let errorInternet = document.getElementById('error');
// let successInternet = document.getElementById('success');

// window.addEventListener('offline', function(){
//     errorInternet.style.display = 'block';
// })
// window.addEventListener('online', function(){
//     successInternet.style.display = 'block';
// })
let alerts = document.querySelectorAll('.alert');
    alerts.forEach(item=>{
        item.addEventListener('click', function(event){
            if(event.target.classList.contains('close')){
                item.style.display = 'none';
            }
        })
    })
window.addEventListener('offline', function(){
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'grid';
    document.body.insertAdjacentHTML("beforeend", alerts);
});
window.addEventListener('online', function(){
    document.getElementById('error').style.display = 'none';
    document.getElementById('success').style.display = 'grid';
});