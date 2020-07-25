console.log('Assignment1');
var a=prompt("Enter a number")
function positiveinteger(a){
if(a>=0)
{
    console.log(a+"positive number");
}
else {
    console.log(a+"invalid input");
}
}
positiveinteger(a);
let arr = [1,2,3,4,5,6];
let odd = arr.filter(el=>el%2==1);

let oddcube = arr.filter(el=>el%2==1).map(el=>el**3);

console.log(odd);
console.log(oddcube);
     



