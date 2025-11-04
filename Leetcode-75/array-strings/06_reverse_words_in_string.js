const reverseWords = (s) => {
    const trimmed = s.trim();
    const words = trimmed.split(/\s+/);

    words.reverse();

    return words.join(' ');
};

var reverseWords = function(s) {
    // 1. trim the input string to remove leading and trailing spaces.

    const trimmedString = s.trim();
    // 2. split the trimmed string into an array of words.
    // we use the regex /\s+/ (one or more white space characters) to handle cases where there are multiple spaces between words.
    const words = trimmedString.split(/\s+/);
    //3. reverse the array of words.
    words.reverse();
    //4. Join the words back into a single string using a single space as a seperator.
    // This ensures only one space is between words and no leading /trailing spaces.
}

/* ---LOGIC---
 Preprocess the input string:
   - apply trim() to remove leading and trailing spaces.
 word extraction:
    - apply the split() method to the trimmed string using a regular expression /\s+/ as the delimiter.
    -\s matches any single whitespace character.
    - + means "one or more" times.
    - by splitting on one or more spaces, the function automatically discards all inervening sapces,
      effectively reducing multiple spaces between words to nothing.
Reversing the Order:
    - apply the reverse() method to the array of words.
    - This method changes the order of the elements in the array in-place, achieving the primary goal of reversing the word sequence.
Postprocessing and Output:
    - apply the join(' ') method to the reversed array of words.
    - This concatenates all the elements in the array back into a single string,
      inserting the specified argument, a single space(' ') between each word.


*/