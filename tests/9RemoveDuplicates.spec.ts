function removeDuplicates(arr: number[]): number[]{
    return [...new Set(arr)]
}


console.log(removeDuplicates([1,2,3,3,4,5,5,6,7,8,7,8,7,8]))