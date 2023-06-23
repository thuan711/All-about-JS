function bubbleSort(array){
    const arr = [...array];
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - i; j++){
            let num = arr[j];
            let next = arr[j+1];
            if(num > next){
                const temp = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
                //[arr[j+1], arr[j]] = [arr[j], next[j+1]];
            }
        }
    }
    return arr;
}
const arr = [9,2,4,6,1];
console.log(bubbleSort(arr));