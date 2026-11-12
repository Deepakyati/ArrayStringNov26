function reverse1(str: string): string{
    return str.split('').reverse().join('');
}

function reverse2(str: string): string{
    let reversed = '';
    for (let i=str.length-1;i>=0;i--){
        reversed+=str[i];
    }
    return reversed

}

console.log(reverse1('Deepak'));
console.log(reverse2('Deepak'));