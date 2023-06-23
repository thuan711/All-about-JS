const student = {
    name : "thuan",
    age : 18,
    male : true,
    hi: function () {
        console.log("Hello!");
    },
};
console.log(student);
student.age = 22;
student.male = "trai";
student.isDeveloper = true;
student["isDeveloper"] = false;
student.hello = function() {
    console.log("Hello");
};
console.log(student);
for(let key in student) {
    if(key == "name"){
        console.log("Hello");
    }
    const value = student[key];
   
    console.log(key + ": " + value);
}
const keys = Object.keys(student);
console.log(keys);
const value = Object.values(student);
console.log(value);
const entries = Object.entries(student);
console.log(entries);

const a = {
    first_name : "Hồ",   
}
const b = {
    last_name: "thuan",
}
const c = Object.assign(a,b);
console.log(c);
const d = {...a,...b};
console.log(d);
const user = {
    userName : "thuận",
};
const newUser = Object.seal(user);
newUser.userName = "Hồ Viết Thuận";
newUser.lastName = "Lê";
console.log(newUser);

const student2 = {
    name : "Thuận",
    age : 19,
    male : true,
    "lastName": "Hồ",
    hi : function (){
        console.log("My name is " + this.name+"and I am " + this.age);
    }
}
student2.hi();
if(student2.fullname){
    if(student2.fullname.name){
        console.log(student2.fullname.name);
    }
}
console.log(student2.fullname?.name);

function info(obj){
    console.log(obj.name, obj.age, obj.male, obj.shool);
}
const newObj = {
    shool : "fpt",
    age : 19,
    name : "Thuận",
    male : true,
}
info(newObj);