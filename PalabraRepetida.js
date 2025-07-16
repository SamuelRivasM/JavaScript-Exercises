// Crea una función que tome una oración y una palabra, y determine si la palabra está contenida al menos dos veces en la oración.

function repSentence(sentence, word){
 let fIdx = sentence.indexOf(word);
 if (fIdx !== -1 && sentence.indexOf(word,fIdx+1) !== -1) {
    return true;
 }
 return false;
}
console.log(repSentence("so so","so"));
