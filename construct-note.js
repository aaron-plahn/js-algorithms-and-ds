'use strict';
console.log(`constructNote("bleep","bpl") ${constructNote("bleep","bpl")}`);
function constructNote(message,letters){
    message = message.split('');
    letters = letters.split('');
    let messageFC = getFrequenciesForArray(message);
    let lettersFC = getFrequenciesForArray(letters);

    for(let key in messageFC){
        if(!lettersFC.hasOwnProperty(key) || lettersFC[key] < messageFC[key]) return false;
    }
    return true;
}

function getFrequenciesForArray(a){
    let frequencyCounter = {};
    for(let e of a){
        frequencyCounter[e] = (frequencyCounter[e] || 0) + 1;
    }
    return frequencyCounter;
 }