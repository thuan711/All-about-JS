const arr = [3,5,6,2,7,8,9,10]
// câu 1
let sum = 0
for(const a of arr){
    sum += a
}
const avg = sum / arr.length;
console.log("Trung bình các phần tử số lẻ "+avg)
// câu 2
const newArr=[]
for(let i = 0; i < arr.length; i++){
    if(arr[i]%2===0){
        newArr.push(arr[i]/2);
    } else{
        newArr.push(arr[i]);
    }
}
console.log("Mảng mới: "+newArr)