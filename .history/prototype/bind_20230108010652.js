// 1. bind
const student = {
    firstName : "Hồ",
    lastName : "Thuận",
    fullname: function(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}
const button = document.querySelector('.button');
button.addEventListener('click', student.fullname.bind(student));

function abc(level, time, message){
    console.log(`${level} ${time} ${message}`);
}
const logErrToday = abc.bind(null,"Eror","Today");
logErrToday("ok");
// 2. call and aplly
const person = {
    firstName: "A Thuận",
    lastName: "developer",
};
function say(str1,str2){
    console.log(`${str1} ${str2} ${this.firstname} ${this.lastname}`);
}
say.call(person,"Heloo","baby")
say.apply(person,"Hi","fr");