let number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// for(let i = 0; i < number.length; i++){
//     if(number[i] == 8){
//         continue; // bỏ qua số 8
//     }
//     console.log("Number: " + number[i]);
// }

// for(let i = number.length -1; i >= 0; i --){   
//     console.log("Number: " + number[i]);
//     for(let j = number.length -1; j >= 0; j--){ 
//         console.log("Number: " + j);
//     }
// }

// for(let i = 0; i >= 1000 ; i ++){
//     console.log("Number: " + i);
// }
// const array = [1,1000,false,NaN,"",null,undefined,[1,2,3],"thuan"];
// const filter = array.filter((item)=> Boolean(item));
// console.log(filter);
function countVowels(string){
    let count = 0;
    const cheracter = "ueoai";
    for(let c of string.toLowerCase(    )){
        if(cheracter.includes(c)) count++;
    }
    return count;
}
console.log(countVowels("thuan"));

function unique(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(!result.includes(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(unique([1,2,3,1,2,3,4,5]));

function splitArray(array,number){
    let result = [];
    let index = 0;
    while (index <array.length) {
        result.push(array.slice(index,index + number));
        index += number;
    }
    console.log(result);
    return result;
}
splitArray([1,2,3,4,5],2);