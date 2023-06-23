// contructor/ protype way
function Person(name){
    this.name = name;
}
Person.prototype.getName = function(){
    console.log(this.name);
};
const thuan = new Person("thuận");
thuan.getName();
// class
class Person2{
    constructor(name){
        this.name = name;
    }
    getName(){
        console.log(this.name);
    }
}
const phat = new Person("phát");
phat.getName();