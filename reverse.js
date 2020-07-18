function reverseString(str){
    var reverse = [];
    for (var i=0;i<str.length;i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}

var statement = "Hello Alliens. How are you";
var forAllien = reverseString(statement);
console.log(forAllien);
