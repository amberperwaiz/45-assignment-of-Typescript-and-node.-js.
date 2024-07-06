"use strict";
//Store the location in a Array.Make sure the array is not in alphabetical order.
let places = ['Italy', 'Germany', 'Paris', 'Tokyo', 'Muree'];
//Print your array in its original order.
console.log('Original ' + places);
//Print your array in alphabetical order without modifying it's actual lists
console.log('Copy ' + [...places].sort());
//show that your array is still in its original order by printing it.
console.log('Original ' + places);
//Print your array reverse alphabetical order without changing the order of the original list.
console.log('Copy ' + [...places].sort().reverse());
//show that your array is still in its original order by printing it.
console.log('Original ' + places);
//Reverse the order of your list.Print the array to show that order has changed. 
console.log('Original ' + places.reverse());
//Reverse the order of your list again.Print the array to show that order has changed.
console.log('Original ' + places.reverse());
//Sort your array so its stored in alphabetical order.Print the array to showthat its order has been changed. 
console.log('Original ' + places.sort());
//Sort to change your array so its stored in reverse alphabetical order.Print the list to show that its order has been changed.
console.log('Original ' + places.sort().reverse());
