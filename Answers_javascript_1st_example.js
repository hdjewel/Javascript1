/*  
Example 1 to translater from Python (lines 3 - 7) to JavaScript (lines 16 - 24)
sum = 0
for i in range(10):
    if i % 3 == 0 or i % 5 == 0:
        sum += i
print sum 

Example of JavaScript for loop
for (var i=0; i < myLotteryNumbers.length; i++){
    console.log("The next winning number is:" + myLotteryNumbers[i]);
}
console.log("I win the lottery!");
*/

var sum = 0;
for (var i=0; i <5; i++)
{
    if ( i % 3 === 0 ||  i % 5 === 0 )
    {
        sum += i;
    }
}
console.log(sum);