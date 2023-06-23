function bubbleSort(){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length-i; j++){
            let num = array[j];
            let next = array[j+1];
            if(num > next){
                const temp = next;
                next = num;
                num = temp;
            }
        }
    }
    console.log(array);
}
bubbleSort([9,2,4,6,1])