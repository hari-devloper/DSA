// reverseString.js
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage:
const inputString = 'hello';
const reversedString = reverseString(inputString);
console.log(`Reversed string: ${reversedString}`);
