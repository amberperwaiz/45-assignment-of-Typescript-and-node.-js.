"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
*/
var guestlist = ["Perwaiz", "Rafay", "Mahrukh"];
console.log("Great news! we found a bigger table");
// unshift()
guestlist.unshift("Amber");
// splice()
guestlist.splice(Math.floor(guestlist.length / 2), 0, "saima");
// push
guestlist.push("Areeb");
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you all are invited to dinner."));
});
