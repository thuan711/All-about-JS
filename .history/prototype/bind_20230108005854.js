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
const logErrToday = log.bind(null,"Eror","Today");
logErrToday("ok");