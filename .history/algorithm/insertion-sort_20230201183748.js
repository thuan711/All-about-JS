function insertionSort(arr){
    for(let i=0; i<arr.length; i++){
        const current = arr[i];
        for(let j = i-1;j>=0 && arr[j] > current;j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = current;
    }
}
const data = [3,1,0,9]
console.log(insertionSort(data))