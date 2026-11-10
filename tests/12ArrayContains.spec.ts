function ArrayContains<T>(arr: T[], target: T): boolean{
    return arr.includes(target);
}

console.log(ArrayContains([10,20,30,40],10));
console.log(ArrayContains(['a','b','c'],'v'));