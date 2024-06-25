// DOM method
function $(selector) {
    return document.querySelector(selector);
}
let wordArray = [];
let guessArray = [];
let nClicks = 0;
let word = getRandomFiveLetterWord();
// get the elements
let guess = $('#guess');
let w1l1 = $('#w1l1');
let w1l2 = $('#w1l2');
let w1l3 = $('#w1l3');
let w1l4 = $('#w1l4');
let w1l5 = $('#w1l5');
let w2l1 = $('#w2l1');
let w2l2 = $('#w2l2');
let w2l3 = $('#w2l3');
let w2l4 = $('#w2l4');
let w2l5 = $('#w2l5');
let w3l1 = $('#w3l1');
let w3l2 = $('#w3l2');
let w3l3 = $('#w3l3');
let w3l4 = $('#w3l4');
let w3l5 = $('#w3l5');
let w4l1 = $('#w4l1');
let w4l2 = $('#w4l2');
let w4l3 = $('#w4l3');
let w4l4 = $('#w4l4');
let w4l5 = $('#w4l5');
let w5l1 = $('#w5l1');
let w5l2 = $('#w5l2');
let w5l3 = $('#w5l3');
let w5l4 = $('#w5l4');
let w5l5 = $('#w5l5');

// get word from api
async function getRandomFiveLetterWord() {
    const response = await fetch('https://random-word-api.herokuapp.com/word?number=1&length=5');
    if (response.ok) {
        const data = await response.json();
        return data[0];
    } else {
        throw new Error('Failed to fetch the word');
    }
}

getRandomFiveLetterWord().then(word => {
    console.log(`Random 5-letter word: ${word}`);
}).catch(error => {
    console.error('Error:', error);
});


// separate the word into an array 
for (let i = 0; i < word.length; i++) {
    wordArray.push(word.charAt(i));
}

for (let i = 0; i < wordArray.length; i++) {
    guessArray.push(guess.innerHTML.charAt(i));
}

// check the input for the word
guess.addEventListener('click', function() {
    if(nClicks <5){
        for(let i = 0; i < guessArray.length; i++){
            if(guessArray[i] === wordArray[i]){
                w1l1.innerHTML = guessArray[i];
                w1l1.classList.add('grid-item-correct');
                if(word.includes(guessArray[i])){
                    w1l1.classList.add('grid-item-wrong');
                }
            }
        }
    }
});

// display the result for each letter in the word