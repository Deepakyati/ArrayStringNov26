function countVowelConsonant(str: string): {vowels: number, consonants: number}{

    let vowels = 0;
    let consonants = 0;
    const lower = str.toLowerCase();

    for (const char of lower){
        if(char>='a' && char<='z'){
            if('aeiou'.includes(char))
                vowels++;
            else
                consonants++
        }
    }
    return {vowels, consonants};
}

console.log(countVowelConsonant('hellow world'));