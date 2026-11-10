function LinearSearch<T>(arr: T[], target: T): number{
    for (let i=0; i<arr.length;i++){
        if(arr[i]===target)
            return i;
    }
    return -1;

}

console.log(LinearSearch([10,20,30,40,50],40));