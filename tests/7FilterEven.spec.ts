function filterEven(arr: number[]): number[]{
    return arr.filter((i)=>i%2===0)
}

function filterEven2(arr: number[]): number[]{
    const result: number[] = []
    for (let i =0; i<arr.length;i++){
        if(arr[i]%2===0){
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(filterEven([1,2,3,4,5,6,7,8]));
console.log(filterEven2([1,2,3,4,5,6,7,8]));


