/*  
## Return a list of fibonacci numbers that go up to but not beyond the maximum number provided
def fibonacci_set(max):
    if max > 1:
        fib_list = [1]
        current_fib = 1
        while current_fib < max:
            fib_list.append(current_fib)
            current_fib = fib_list[-1] + fib_list[-2]

        return fib_list
    else:
        return [1, 1]

## Tell me if a number is even
def even(n):
    return n % 2 == 0

print sum(filter(even,fibonacci_set(4000000)))



=================================================
code the following functions : even to determine if a number is even or not
                               filter to retrieve "even numbers" from a list
                               fibonacci to create a list of numbers in the 
                                    fibonacci series

print a sum of all the even numbers up to a given value 

*/


function even(num)
{
    return num % 2 === 0;
}

function fibonacci_set(g_max)
    {
    var max = g_max;
    var fib_list = [1];
    var list_length = 0;
    var current_fib = 1;
       while (current_fib < max)
        {
            fib_list.push(current_fib);
            list_length = fib_list.length;
            current_fib = fib_list[list_length-1]+fib_list[list_length-2];
        }
    return fib_list;
    }

function filter(fib_list)
{
    var even_list = [];
    var item = 0;
    for (item in fib_list)
    {
        if (even(fib_list[item])===true)
        {
           even_list.push(fib_list[item]);
        }

    }   /*  the values in even_list are the "indexes" and not the actual 
            element values.  this is wrong. 
    */
    return even_list;
}

function sum(even_list)
{
   var count=0;
   for (var i=even_list.length; i--;)
   {
     count+= even_list[i];
   }
   return count;
}
var g_max = 4000000;
console.log("returned from fibonacci_set = " + fibonacci_set(g_max));
console.log(sum(filter(fibonacci_set(g_max))));






