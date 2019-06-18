//Number Guessing Game
var times = prompt ("Please enter number of times");
function myGame(times) {
var i = function ourRandomRange(ourMin,ourMax) {
return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
ourRandomRange(1,100);
{
var j=i%2; //gets the modulus and stores the result in j
if (j==0) //Conitioin checks to see if the result in module is zero or not
    alert (" Number is Even");
else
    alert (" Number is odd");
for(var count=1;count<=times;count++)
{
    let num = prompt ("Please enter a number:"); //Captures user input
if (num==i){
    alert("You WIN!");
    break;
}
if (num<i){
    alert("Number is lower, make another guess");
}
if (num>i){
            alert("Number is higher,make another guess");
        }
if (count==times){    
            alert("You LOSE!");}
}
}
myGame(times);