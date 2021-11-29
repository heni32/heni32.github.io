var numbers = [10, 20, 30, 40] 
function sum(arr){
    var sum = 0;
for (var i = 0; i < arr.length; i++) 
{  sum += arr[i]}
return sum;
}
console.log(sum(numbers));

console.log(sum([13,25,6,12,46,23]));
