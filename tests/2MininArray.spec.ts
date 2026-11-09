function findMin(arr: number[]): number{

    if(arr.length===0)
        throw new Error('Array is empty');
    let min=arr[0];
    for (const i of arr){
        if(i<min)
            min=i;
    }
    return min;
}

console.log(findMin([23,45,6,3,1]))
console.log(findMin([]))