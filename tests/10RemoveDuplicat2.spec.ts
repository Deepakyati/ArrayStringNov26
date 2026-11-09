function removeDuplicate2<T>(arr: T[]): T[]{
    return arr.filter((item,index)=> arr.indexOf(item)===index);
}

console.log(removeDuplicate2(['a', 'b', 'a', 'c']))