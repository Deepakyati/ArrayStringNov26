function sumArray(arr: number[]): number{
    if(arr.length===0)
        throw new Error('Array is empty');
    let sum=0;
    for (const i of arr){
        sum=sum+i;
    }
    return sum
}

function sum2(arr:number[]):number{
    return arr.reduce((sum,i)=>sum+i,0)
}

console.log(sumArray([10,20,30,40]));
console.log(sum2([11,22,33,44]));