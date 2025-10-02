var gcdOfStrings = function(str1, str2) {
    function gcd(a, b) {
        while(b) {
            [a, b] = [b, a % b];
        }
        return a;
    }
    if (str1 +str2 !== str2 + str1) return "" ;

    const lenGCD = gcd(str1.length, str2.length);
    return str1.slice(0, lenGCD);
}