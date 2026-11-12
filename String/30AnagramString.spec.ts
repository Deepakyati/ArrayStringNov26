function isAnagram(str1: string, str2: string): boolean{
    const format = (s:string)=>s.toLowerCase().replace(/[^a-z0-9]/g,"").split("").sort().join('');

    return format(str1)===format(str2);
}

console.log(isAnagram("listen", "silent"));