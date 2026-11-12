 function toTitleCase(sentence: string): string{
    return sentence.split(" ").map((word)=>(word ? word[0].toUpperCase()+word.slice(1).toLowerCase(): "")).join(" ");
 }

 console.log(toTitleCase("deepak is good boy"));