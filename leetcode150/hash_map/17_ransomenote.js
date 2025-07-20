/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map = new Map();

    // Build the frequency map from the magazine
    for (let char of magazine) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    // Check if ransomNote can be formed
    for (let char of ransomNote) {
        if (!map.has(char) || map.get(char) === 0) {
            return false;
        }
        map.set(char, map.get(char) - 1);
    }

    return true;
};
