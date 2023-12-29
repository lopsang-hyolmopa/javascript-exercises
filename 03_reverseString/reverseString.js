const reverseString = function(str) {
    // let splitedString = str.split("")
    // let reversedArray = splitedString.reverse()
    // let joinedArray = reversedArray.join("")
    // let reversedString = joinedArray
    // return reversedString

    return [...str].reverse().join("")
};

// Do not edit below this line
module.exports = reverseString;
