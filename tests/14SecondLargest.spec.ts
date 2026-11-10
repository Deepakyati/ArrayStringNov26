function SecondLargest(arr: number[]): number|null{
    if (arr.length <2)
        return null;
    let largest = -Infinity
    let Second = -Infinity

    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            Second = largest;
            largest=arr[i];
            
        }
        else if (arr[i] > Second && arr[i]!==largest){
            Second = arr[i]
        }
    }
    return Second === -Infinity ? null : Second;
}

console.log(SecondLargest([56,22,78,88,98,102,304]))