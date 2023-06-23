// function insertionSort(arr){
//     //let  = [...arr]
//     for(let i=1; i<arr.length; i++){
//         const current = arr[i];
//         let j;
//         for(j = i-1;j>=0 && arr[j] > current;j--){
//             arr[j+1] = arr[j];
//         }
//         arr[j+1] = current;
//     }
// }
// console.log(insertionSort(3,1,0,9));
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let currentVal = arr[i];
      for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
        arr[j + 1] = arr[j];
      }
      arr[j + 1] = currentVal;
    }
    return arr;
  }
  
  const arr = [2, 1, 9, 76, 4];
  console.log(insertionSort(arr));
  // Output: [1, 2, 4, 9, 76]
  