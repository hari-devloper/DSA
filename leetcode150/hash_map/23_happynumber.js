/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const seen = new Set();

    while (n !== 1) {
        if (seen.has(n)) return false; // cycle detected
        seen.add(n);
        n = getNext(n);
    }

    return true; // n == 1
};

// Helper function to compute sum of squares of digits
function getNext(num) {
    let total = 0;
    while (num > 0) {
        const digit = num % 10;
        total += digit * digit;
        num = Math.floor(num / 10);
    }
    return total;
}
