function arrayIntersection<T>(arr1: T[], arr2:T[]): T[] {

    const set2 = new Set(arr2);
    return [...new Set(arr1.filter((item) => set2.has(item)))];

}

console.log(arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6]));