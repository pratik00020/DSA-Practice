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