// For words that begin with consonant sounds, 
// all letters before the initial vowel are placed at the end of the word sequence. 
// Then, "ay" is added, as in "pig" = "igpay"

//TODO - didn't do this one yet...
// When words begin with consonant clusters (multiple consonants that form one sound), 
// the whole sound is added to the end when speaking or writing.
// "trash" = "ashtray"

// For words that begin with vowel sounds, the vowel is left alone, and most commonly 
// 'ay' is added to the end. 
// "eat" = "eatay"

const translateToPigLatin = (string) => {
    let result = string;
    if( string.length === 0 ){
        return result;
    }

    // let firstCharacter = string[0];
    // console.log('firstCharacter =', firstCharacter);
    // if( isVowel( firstCharacter) === false){
    //     //remove first character from result & 
    //     //add 1st character + 'ay' to the end
    //     result = string.substring(1, string.length) + firstCharacter + 'ay';
    // }

    if( isVowel( firstCharacter )){ //true condition
        result = string + 'ay';
    } else { //false condition
        result = string.substring(1, string.length) + firstCharacter + 'ay'; 
    }

    return result; 
}

//TODO- should probably be in it's own module with it's own unit tests!
const isVowel = (character) => {
    let lowerCase = character.toLowerCase();
    if(lowerCase === 'a' || lowerCase === 'e' || lowerCase === 'i' || 
        lowerCase === 'o' || lowerCase === 'u') {
        return true;
    }
    return false;
}

module.exports = translateToPigLatin;