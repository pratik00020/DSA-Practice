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


/* 
How it Works
Start with two pointers, both at the beginning of each string.

Iterate as long as either pointer is within its string's bounds.

On each step:

Take the character from the first string (if there).

Take the character from the second string (if there).

Append any remaining characters from the longer string after one runs out.

Concatenate each chosen character to the result string.

*/

/* 
Repetiton of logic for clarity:

var mergeAlternately = function(word1, word2) {
let merged = '';
let i = 0;
let j = 0;

// Iterate while at least one pointer is within its word 
while (i < word1.length || j < word.length){
    if (i < word1.length){
    merged += word1[i];
    i++;
    }
    if (j < word2.length){
    merged += word2[j];
    j++;}
    }
    return merged;
};


var mergeAlternately = function(word1, word2) {
let merged = '';
let i = 0;
let j = 0;

while(i < word1.length || j< word2.length){
if(i < word1.length){
merged += word1[i];
i++;
}
if(j < word2.length){
merged += word[j];
j++;}  
  }
 return merged;

}


*/