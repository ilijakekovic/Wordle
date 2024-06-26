/**
 * Function that validates the input of the user
 * @param {string} word - The word that is passed in for validation
 * @param {number} n - The number that is passed in for validation
 * @returns {boolean} - Returns true if the word is valid, false otherwise
 */
function isWordNNumbers(word, n) {
    return /^\d+$/.test(word) && word.length === n;
}

/**
 * Function that validates the input of the user
 * @param {string} word - The word that is passed in for validation
 * @returns {boolean} - Returns true if the word is valid, false otherwise
 */
function isWord(word) {
    return /^[a-zA-Z]+$/.test(word);
}

/**
 * Function that performs a full check on the input word
 * @param {string} word - The word that is passed in for validation
 * @param {number} n - The number that is passed in for validation
 * @returns {boolean} - Returns true if the word is valid, false otherwise
 */
function FullCheck(word, n) {
    return isWord(word) || isWordNNumbers(word, n);
}

export { isWordNNumbers, isWord, FullCheck };