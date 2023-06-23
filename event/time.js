// const now = new Date();
// console.log(now);
// console.log(now.getTime());
// const myTime = new Date("Sat Dec 10 2022 23:34:01 GMT+0700 (Indochina Time)");
// const myYear = myTime.getFullYear();
// const myMonth = myTime.getMonth() + 1;
// const myDate = myTime.getDate();
// const prefixMonth = myMonth <10?"0":"";
// console.log('${myYear}/${prefixMonth}/${myMonth}/${myDate}');
// // setTimeout(function() {
// //     alert("call me");
// // },3);
// const timer = setInterval(function() {
//     console.log("call me");
// },1000);
// clearInterval(timer);
// function getAge(year){
//     const now = new Date();
//     const currentYear = now.getFullYear();
//     return currentYear - year;
// }
// let age = getAge(2003);
// console.log('tuổi '+age);
// function countdown(munites = 1){
//     let seconds = munites * 60;
//     let counter = 0;
    
//     const timer = setInterval(function() {
//         counter = counter + 1;
//         console.log(counter);   
//         if(counter  === seconds){
//             clearInterval(timer);
//             console.log("Your time is the end");
//         } 
//     },1000);
// }
// countdown(1);
function timeSince(date){
    const now = new Date();
    const yourday = new Date(date);
    const seconds = Math.floor((now.getTime()-yourday.getTime())/1000);
    let timer = seconds / 31536000; // sô giây trong 1 năm
    
    if(timer > 1){
        console.log(Math.floor(timer) +" năm trước");
    }
    timer = seconds / 2678400;
    if(timer > 1){
        console.log(Math.floor(timer) +" tháng trước");
    }
    timer = seconds / 604800;
    if(timer > 1){
        console.log(Math.floor(timer) +" tuần trước");
    }
    timer = seconds / 864800;
    if(timer > 1){
        console.log(Math.floor(timer) +" ngày trước");
    }
    timer = seconds / 3600;
    if(timer > 1){
        console.log(Math.floor(timer) +" giờ trước");
        return;
    }
    timer = seconds / 60;
    if(timer > 1){
        console.log(Math.floor(timer) +" phút trước");
        return;
    }
}
timeSince("Sat Dec 10 2022 23:34:01 GMT+0700 (Indochina Time)");