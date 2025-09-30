function mergeAlternately(word1, word2) {
    let merged = '';
    let i = 0;
    let j = 0;

    // Iterate while at least one pointer is within its word
    while (i < word1.length || j < word2.length) {
        if (i < word1.length) {
            merged += word1[i];
            i++;
        }
        if (j < word2.length) {
            merged += word2[j];
            j++;
        }
    }
    return merged;
}
