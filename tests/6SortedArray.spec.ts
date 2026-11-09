function isSorted(arr: number[]): boolean {

    for (let i=0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1])
            return false
    }
    return true
}

console.log(isSorted([10,20,30,40,50]));