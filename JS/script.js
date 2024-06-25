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

// check the input for the word

// display the result for each letter 
