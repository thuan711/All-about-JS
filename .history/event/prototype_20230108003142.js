let str = "abc";
String.prototype.duplicate = function(){
    return this + this;
};
console.log(str.duplicate());
// prototype tính kế thừa
function Girl(){
    this.cook = function(){
        console.log("Biết nấu ăn");
    };
}
Girl.prototype.sing = function(){
    console.log("Biết hát");
}
Object.prototype.makeSandwich = function(){
    console.log("Biết làm bánh");
};
let anh = new anh();
anh.cook();
anh.sing();
anh.makeSandwich();