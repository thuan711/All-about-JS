// const st1 = ["a", "b", "c", "d", "e", "Thuận"];
// console.log(st1.length);
// console.log(st1.reverse());
// console.log(st1.join());
// console.log(st1.includes("a"));
// console.log(st1.push("abc"));
// console.log(st1.lastIndexOf("abc")); // cuối 
// console.log(st1.unshift("nn"));// thêm vào đầu chuổi
// console.log(st1);
// st1.pop(); // xóa cuối
// st1.shift(); // xóa đầu
// console.log(st1); 
// const st2 = st1.slice(1,3); // lấy vị trí số 1 và cuối 3 -1 là vị trí số 2
// console.log(st2);
// const st3 = st1.splice(0,2,"dinasour","pig",false,100);
// console.log(st3);
// const pets = ["dog", "cat", "bird", "dragon"];

// const pets2 = pets.splice(2); // [ "bird", "dragon"]

// // console.log(pets); // ["dog", "cat"];

// const pets3 = pets.splice(0, 1); // [ "cat"]

// console.log(pets); // ["cat"]

// const st= [1,2,3,4,10];
// console.log(st.sort());
// const st4= st.sort(function(a,b){
//     if(a>b) return 1;
//     if(a<b) return -1;
// });
// //sort
// console.log(st4);
// const st5= st.sort((a,b) => (a>b ? 1 : -1));
// const findindex = st.findIndex((element)=> element <0);
// console.log(findindex);
// // forEach
// const listNumbe = st.forEach((value,index,array) =>{
//     return value * 3;
// });
// console.log(listNumbe);
// //reduce
// const totalNumber = st.reduce(function(previousValue,currentValue){
//     console.log(previousValue, currentValue);
//     return previousValue + currentValue;
// },0);
// console.log(totalNumber);

function reverseString(str) { // đảo ngược
    if(!str) return null;
    const a = str.split(" ");
    const b = a.reverse().join(" ");
    return b;
}
console.log(reverseString("My name is Thuận"));
function reverseWord(str){ // đảo ngược hết
    if(!str) return null;
    const arrStr = str
    .split(" ")
    .map((item) => item.split("").reverse().join(""))
    .reverse()
    .join(" ");
    console.log(arrStr);
}
reverseWord("My name is Thuận");

function capitalizeWord(word = " "){
    if(word.length == 0) return null;
    let newWord = word.toLowerCase().charAt().toUpperCase();
    let otherWord = word.toLowerCase().slice(1);
    return newWord + otherWord;
}
function capitalizeStr(str){
    if( !str) return null;
    const result = str
    .split(" ")
    .map((item) => capitalizeWord(item))
    .join(" "); 
    console.log(result);
}
capitalizeStr("my name is thuận");