const arr = [3,5,6,2,7,8,9,10]
// câu 1
let sum = 0
for(const a of arr){
    sum += a
}
const avg = sum / arr.length;
console.log(sum)
console.log("Trung bình các phần tử số lẻ"+avg)