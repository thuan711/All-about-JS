let str = "abc";
String.prototype.duplicate = function(){
    return this + this;
};
console.log(str.duplicate());