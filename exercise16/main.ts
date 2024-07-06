import { log } from "console";

/*• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
*/
let guestlist : string[] = ["Perwaiz","Rafay","Mahrukh"];
console.log("Great news! we found a bigger table");

// unshift()
guestlist.unshift("Amber");

// splice()
guestlist.splice(Math.floor(guestlist.length/2),0,"saima");

// push
guestlist.push("Areeb");

guestlist.forEach(guest =>{
    console.log(`Dear ${guest}, you all are invited to dinner.` )
});
