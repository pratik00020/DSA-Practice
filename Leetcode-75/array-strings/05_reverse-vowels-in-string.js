var reverseVowels = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const vowelChars = [];

    //collect vowels 
    for(let char of s) {
        if(vowels.has(char)) {
            vowelChars.push(char)
        }
    }

    // Reverse the collected vowels
    vowelChars.reverse();

    let result = '';
    let vowelIndex = 0;

    //Rebuild string with reversed vowels
    for(let char of s ) {
        if(vowels.has(char)) {
            result += vowelChars[vowelIndex++];
        }
        else {
            result += char;
        }
    }
    return result;
};


// ----LOGIC----

function reverseVowels(s) {
const vowels = new Set (['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U' ]);
// Purpose: Creates a set of vowels for quick loop. The set includes both lowercase and uppercase vowels for case insensitivity.
let vowelChars = [];
// Purpose: Initializes an empty array to store vowels as they are found in the string.
for (let char of s) {
    if(vowels.has(char)) {
        vowelChars.push(char);
    }
  }
  // Collect vowels
  // Purpose: Loop through each character in the string.
  // How it Works: for each character:
  // - check if it's a vowel using vowels.(char).
  // - it true, add the character to vowelChars.

  vowelChars.reverse();
  // Reverse vowels collected
  // Purpose: Reverse the order of vowels stored in vowelChars.
  // outcome: The first vowel becomes the last , the second becomes the second last, etc.

   let result = '';
   let vowelIndex = 0;
   // Purpose: initializes an empty string result to build the final output.
   // vowelindex: keeps track of which vowel to insert from the reversed vowel list.

   for(let char of s) {
    if(vowels.has(char)){
        result += vowelChars[vowelIndex];
   }
   else {
    result += char;
     }
   }
   // Purpose: loop again through the original string
   // How it works: 
   //  -- if the character is vowel:
   //     - Append the current vowel from vowelChars(using vowelIndex) to result.
   //     - Increment vowelIndex to point to the next vowel in vowelChars.
   //  -- if not a vowel:
   //     - Append the original character to result.
   // Outcome: A new string with vowels replaced by their reversed counterparts, non-vowels unchanged.
   return result;
}


/* 
- Initialize a set of vowels for quick membership checking(both lowercase and uppercase).
- create an empty array to collect all vowels found in the input string.
- Iterate over each character in the input string:
 -- If the character is a vowel(present in the set), add it to the vowel array.
- Reverse the collected vowel array to prepare to place vowels in reverse order.
- Initialize a result string and an index to track which reversed vowel to insert next.
- Iterate over the input string again:
  -- If the character is a vowel, append the vowel from the reversed vowel array at the current index, then increment the index.
  -- If not a vowel, append the original character to the result.
- Return the rebuilt string with vowels reversed and other characters unchanged.
*/

var reverseVowels = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let vowelChars = [];
    // collect vowels 
    for(let char of s ) {
        if(vowels.has(char)) {
            vowelChars.push(char)
        }
    }

    // reverse vowels collected 
    vowelChars.reverse()

    let result = '';
    let vowelIndex = 0;

    // Rebuild string with reversed vowels 
    for (let char of s) {
        if(vowels.has(char)) {
            result += vowelChar[vowelIndex++];
        }
        else {
            result += char;
        }
    }
    return result;
};


var reverseVowels = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u','A','E', 'I', 'O', 'U']);
    let vowelChar = [];

    for(let char of s ) {
        if (vowels.has(char)) {
            vowelChars.push(char);
        }
    }

    vowelChar.reverse();
    let result = '';
    let vowelIndex = 0;

    for (let char of s) {
        if(vowels.has(char)) {
            result += vowelChars[vowelIndex++]
        }
        else {
            result += char;
        }
    }
    return result;
}

var reverseVowels = function(s) {
    const vowels = new Set(['a','e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let vowelChars = [];

    for( let char of s ) {
        if(vowels.has(char)) {
            vowelChars.push(char);
        }
    }

    vowelChars.reverse();

    let result = '';
    let vowelIndex = 0;

    for(let char of s){
        if(vowelshas(char)) {
            result += vowelChars[vowelIndex++];
        }
        else {
            result += char;
        }
    }
    return result;
};


var reverseVowels = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let vowelChars = [];

    for(let char of s) {
        if(vowels.has(char)) {
            vowelChars.push(char);
        }
    }

    vowelChars.reverse();

    let result = '';
    let vowelIndex = 0;

    for(let char of s) {
        if(vowels.has(char)) {
            result += vowelChars[vowelIndex++];
        }
        else {
            result += char;
        }
    }
    return result;
};



var reverseVowels = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let vowelChars = [];

    for(let char of s){
        if(vowels.has(char)) {
            vowelChars.push(char);
        }
    }

    vowelChars.reverse();

    let result = '';
    let vowelIndex = 0;

    for(let char of s) {
        if(vowels.has(char)) {
            result += vowelChars[vowelIndex++];
        }
        else{
            result += char;
        }
    }
    return result;
};


var reverseVowels = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let vowelChars = [];

    for(let char of s) {
        if(vowels.has(char)) {
            vowelChars.push(char);
        }
    }

    vowelChars.reverse();

    let result = '';
    let vowelIndex = 0;

    for(let char of s) {
        if(vowels.has(char)) {
            result += vowelChars[vowelIndex++];
        }
        else {
            result += char;
        }
    }
    return result;
};


var reverseVowels = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let vowelChars = [];
    
    for(let char of s){
        if(vowels.has(char)) {
            vowelChars.push(char);
        }
    }

    vowelChars.reverse();

    let result = '';
    let vowelIndex = 0;

    for(let char of s) {
        if(vowels.has(char)) {
            result += vowelChars[vowelIndex++];
        }
        else {
            result += char
        }
    }
    return result;
}

var reverseVowels = function(s){
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let vowelChars = [];

    for( let char of s) {
        if(vowels.has(char)) {
            vowelChars.push(char);
        }
    }

    vowelChars.reverse();

    let result = '';
    let vowelIndex = 0;
    
    for(let char of s) {
        if(vowels.has(char)) {
            result += voweChars[vowelIndex++];
        }
        else {
            result += char;
        }
    }
    return result;de3
}
