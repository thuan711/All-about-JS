const student = {
    firstName : "Hồ",
    lastName : "Thuận",
    fullname: function(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}
const button = document.querySelector('.button');
button.addEventListener('click', fullname.bind(student));