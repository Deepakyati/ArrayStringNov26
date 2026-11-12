function isPalindrome(str: string): boolean {
    let left = 0;
    let right = str.length-1;
    while(left<right){
        if(str[left]!==str[right])
            return false
        left++;
        right--;

    }
    return true
}

function isPalindrome2(str: string): boolean{
    const clean = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    return clean === clean.split('').reverse().join('');
}

console.log(isPalindrome2('ABCBA'));
console.log(isPalindrome2('DEEPAK'));