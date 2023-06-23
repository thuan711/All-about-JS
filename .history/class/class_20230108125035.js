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
// getter setter
class Person3{
    constructor(name){
        this.name = name;
    }
    get name(){
        return this._name;
    }
    set name(newname){
        return this.name = newname;
    }
}
const abc = new Person3("xyz");
console.log(abc.name);
abc.name = "thuan";
console.log(abc.name);