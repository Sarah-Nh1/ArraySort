function arraySort(array) {

    var count = 0;
    var chars = [];
    var evens = [];
    var odds = [];
    
   if (typeof array === 'string' || typeof array === 'number')
   { 
        return ("invalid input");
    }
    else
    {
    while(count < array.length)
{
    
    if(array[count]%2 ==0)
        {
            evens.push(array[count]);
        }
     else if(array[count]%2 == 1)
        {
            odds.push(array[count]);
        }
     else
        {
            chars.push(array[count]);
        }
    count++;
}

function sort()
{
    compare (a, b)
     {return a - b}
}

 evens = evens.sort();
 odds = odds.sort();
 chars = chars.sort();

    var sorted = {evens: evens, odds: odds, chars: chars};
    console.log(sorted);
    return sorted;
}
 
}
 var evry = [51,21,18,84,88,16,33,"n","s","m","z"];       //test arrays
//var evry = [3,4,7,89,34,56,2,1,"q","r","w","c"];
console.log(evry);//check if array is recognised
arraySort(evry);

module.exports = arraySort;
   