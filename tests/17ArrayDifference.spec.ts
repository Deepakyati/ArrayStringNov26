function ArrayDifference<T> (arr1: T[], arr2: T[]): T[]{

    const setB = new Set(arr2);
    return arr1.filter((item) => !setB.has(item));
}

console.log(ArrayDifference([1, 2, 3, 4], [2, 4]));