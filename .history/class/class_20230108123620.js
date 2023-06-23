// contructor/ protype way
function Person(name){
    this.name = name;
}
Person.prototype.getName = function(){
    console.log(this.name);
};
const thuan = new Person("thuận");
thuan.getName();