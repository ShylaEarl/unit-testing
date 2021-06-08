const translateToPigLatin = require('./piglatin');

//write a test to make sure if we get a blank string in, 
//we give a blank string back

describe('Testing translating to piglatin...', () => {

    test('If empty string goes in, empty string comes out', () => {
        expect( translateToPigLatin('') ).toBe('');
    })

    test('starting consonant moves to end with \'ay\'... ', () => {
        expect( translateToPigLatin('pig') ).toBe('igpay');
    })

    test('starting vowel stays but add to end \'ay\'... ', () => {
        expect( translateToPigLatin('eat') ).toBe('eatay');
    })

})

// function blank(string){
//     if(string === ''){
//       return '';
//     }
//     return string;
// }
