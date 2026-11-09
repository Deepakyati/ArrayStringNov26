function reverseArray(arr: number[]): number[] {
    let left=0;
    let right=arr.length-1;
    while(left<right){
        [arr[left],arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}

console.log(reverseArray([10,20,30,40,50]));