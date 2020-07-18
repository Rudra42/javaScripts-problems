var marks = [20,18,19,67,95,38,45,27];
var max = marks[0];
for(var i=0;i<marks.length;i++){
   var element = marks[i];
   if(element>max){
       max = element;
   }
}
console.log("Max is ",max);