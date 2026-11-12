function sortedSquare(nums: number[]): number[]{
    return nums.map((n)=>n*n).sort((a,b) => a-b);
}

console.log(sortedSquare([-4, -1, 0, 3, 10]));