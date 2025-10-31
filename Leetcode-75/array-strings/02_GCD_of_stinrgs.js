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

/* LOGIC 
 - we need to find the largest string that can construct both input strings purely by concatenation, with no leftovers.
 - Check if both strings are made from a common substring by verifying if str1 + str2 equals str2 + str1.
 - if they dont match, there is no solution, since a valid common divisor would make the order of concatenation irrelevant.
 - if they do match, calculate the greatest common divisor(GCD) of their lengths, because that gives the maximun length of substring that could potentially divide both strings.
 - Extract the prefix of str1 with length equal to the GCD- this substirng is the candidate for the largest divisor string.
 - Since the compatibility check guarantees both strings can be made by repeating this substring return it as the result.

*/

var gcdOfStrings = function(str1,str2) {
    function gcd(a, b){
        while(b){
            [a, b] = [b, a % b];
        }
        return a;
    }
    if (str1 + str2 !== str2 + str1) return "";

    const lenGCD = gcd(str1.length, str2.length);
    return str1.slice(0, lenGCD);
}

var gcdOfStrings = function(str1, str2) {
    function gcd(a, b){
       while(b){ [a, b] = [b, a % b];
       }
       return a;
    }
    if(str1 + str2 !== str2 + str1) return "";

    const lenGCD = gcd(str1.length, str2.length);
    return str1.slice(0, lenGCD);
}

var gcdOfStrings = function(str1, str2) {
    function gcd(a, b){
        while(b){
            [a, b] = [b, a % b];
        }
        return a;
    }
    if (str1 + str2 !== str2 + str1) return "";

    const lenGCD = gcd(str1.length, str2.length);
    return str1.slice(0, lenGCD);
}

var gcdOfStrings = function( str1, str2) {
    function gcd(a, b) {
        while(b) {
            [a, b] = [b , a % b]
        }
        return a;
    }
    if (str1 + str2 !== str2 + str1) return "";

    const lenGCD = gcd(str1.length, str2.length) ;
    return str1.slice(0, lenGCD);
}

var gcdOfStrings = function(str1, str2) {
    function gcd(a, b) {
        while(b) {
            [a, b] = [b, a % b]
        }
        return a;
    }
    if (str1 + str2 !== str2 + str1) return "";

    const lenGCD = gcd(str1.length, str2.length);
    return str1.slice(0, lenGCD);
}


var gcdOfStrings = function(str1, str2) {
    function gcd(a,b) {
        while(b) {
            [a,b] = [b , a % b]
        }
        return a;
    }
    if (str1 + str2 !== str2 + str1) return "";

    const lenGCD = gcd(str1.length, str2.length);
    return str1.slice(0, lenGCD);
}

var gcdOfStrings = function(sstr1, str2) {
    function gcd(a, b) {
        while(b) {
            [a,b] = [b, a % b]
        }
        return a;
    }

    if(str1 + str2 !== str2 + str1) return "";

    const lenGCD = gcd(str1.length, str2.length);
    return str1.slice(0, lenGCD);
}