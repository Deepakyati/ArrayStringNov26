function CountOccurence<T>(arr: T[], target:T):number{
    return arr.reduce((count, curr)=> (curr ===target ? count+1: count),0)

} 

function CountOccurence2<T>(arr: T[], target:T):number{
    let count=0;
    for (let i=0;i<arr.length;i++){
        if (arr[i]===target){
            count=count+1;
        }
    }
    return count

} 


console.log(CountOccurence2([10,10,20,30,40,50,6,6,6,6],6));
console.log(CountOccurence([10,10,20,30,40,50,6,6,6,6],10));