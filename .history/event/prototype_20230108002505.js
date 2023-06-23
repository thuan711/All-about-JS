let str = "abc";
String.prototype.duplicate = function(){
    return this;
};
console.log(str.duplicate());