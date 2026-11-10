function MergeRemoveDuplicate<T>(arr1: T[], arr2: T[]): T[]{
    return [...new Set([...arr1,...arr2])];
}

console.log(MergeRemoveDuplicate([1,2,3,4,5],[2,3,4,5,6,7,8,9]));