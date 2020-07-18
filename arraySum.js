

function getTotalOfArray(numbers){
    var sum = 0;
    for (var i=0; i<numbers.length;i++){
     var element = numbers[i];
     sum = sum + numbers[i];
 }
 return sum;
}
 var numbers = [45,63,25,27,61,31];
 var result = getTotalOfArray(numbers);
 console.log("total of the numbers ",result);