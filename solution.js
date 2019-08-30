// source: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/880/



// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21

// Note:
// Assume we are dealing with an environment which could only store integers 
// within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose 
// of this problem, assume that your function returns 0 when the reversed integer overflows.



// NOTE: See this for solution with pure arithmetic (less expensive operations): https://stackoverflow.com/a/47600202


var reverse = function(x) {
    let arr = x.toString().split("");
    
    let negative = false;           // store negative in memory, and remove from array (to reverse integers only)
    if (arr[0] == "-") {
        arr.shift();
        negative = true;
    };
    
    let counter = Math.floor(arr.length / 2);
    let endIndex = arr.length - 1;
    for (startIndex = 0; startIndex < counter; startIndex++) {
        let endChar = arr[endIndex];
        arr[endIndex] = arr[startIndex];
        arr[startIndex] = endChar;
        endIndex--;
    };
    
    let str = arr.join("");         // create integer, and re-add negative
    let num = parseInt(str);
    if (negative) {
        num = num * -1
    };
    
    let min = Math.pow(-2, 31);     // check within range
    let max = Math.pow(2, 31) - 1;
    if (min < num && num < max) {
        return num   
    } else {
        return 0
    };
};