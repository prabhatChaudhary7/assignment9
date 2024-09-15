function isPalindrome(word) {
    const lowerCasedWord = word.toLowerCase();
    const reversedWord = lowerCasedWord.split('').reverse().join('');
    return lowerCasedWord === reversedWord;
}

function checkPalindrome(word) {
    if (isPalindrome(word)) {
        console.log(`${word} is a palindrome`);
    } else {
        console.log(`${word} is not a palindrome`);
    }
}

const input1 = 'Hindi';
const input2 = 'Malayalam';

checkPalindrome(input1);  
checkPalindrome(input2);  
