
function AvgArray(arr: number[]):number{
    if(arr.length===0)
        return 0;
    let avg=0;
    let sum=0;
    for (const i of arr){
        sum=sum+i;
    }
    avg =  sum/arr.length;
    return avg
}

function avg2(arr:number[]):number{
    const sum = arr.reduce((sum,i)=>sum+i,0)
    return sum/arr.length;
}

console.log(AvgArray([10,20,30,40,50]));
console.log(avg2([10,20,30,40]));