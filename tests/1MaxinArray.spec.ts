function findMax(arr: number[]): number {

    if(arr.length===0)
        throw new Error('Array is empty');

    let max=arr[0];
    for(const i of arr){
        if(i>max)
            max=i
    }
    return max
        
}

console.log(findMax([10,12,15,67,222,45,6,7,9]));
console.log(findMax([]));