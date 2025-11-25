var compress = function(chars) {
    let write = 0; // where to write compressed characters
    let i = 0;     // read pointer

    while (i < chars.length) {
        let char = chars[i];
        let count = 0;

        // Count how many times the current character repeats
        while (i < chars.length && chars[i] === char) {
            i++;
            count++;
        }

        // Write the character
        chars[write] = char;
        write++;

        // If count > 1, write each digit of the count
        if (count > 1) {
            let countStr = String(count);
            for (let digit of countStr) {
                chars[write] = digit;
                write++;
            }
        }
    }

    return write; // new length
};

/* 
- we have to compress the string which is in a repetitve manner and return the count in the same array next to character present in the array.
- run the code with two pointers one (i) which reads the character and other (write) update the characters repetition.
- with while loop, check ith index value is less than characters length, let single char value equals to the characters length, let count equals to 0 because the index value is also zero.

- to count how many times the current character repeats,check ith value is less than the characters length and to break the loop for the next character in the array we strictly check chars[i] === char.
- i++ and count++
- update the character's repetiton with write with chars[write] = char;
- write++ 

- to write each digit of the count, if the count is in double or more digits, we convert the count to string, then let string to digit.
  chars[write] = digit;
   write++;   



- since we are using the chars array given in the question to write the answer, hence we are making sure are using constant space and not any other variable defined explicitily.


*/