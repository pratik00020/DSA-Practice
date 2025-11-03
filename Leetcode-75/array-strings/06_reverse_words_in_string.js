const reverseWords = (s) => {
    const trimmed = s.trim();
    const words = trimmed.split(/\s+/);

    words.reverse();

    return words.join(' ');
};