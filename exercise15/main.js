/*    Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite.
. Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can't make it.
. Modify your list,relacing the name of the guest who can't make it with the name of the new person you are inviting .

Print a second set of invitatoin messages, one for each person who is still in your list.*/
var guestlist = ["Amber", "Rafay", "Mahrukh"];
// Print the name who is not invited for dinner.
var unableAttend = guestlist.splice(0, 1)[0];
console.log("".concat(unableAttend, " not invited for dinner"));
// push
guestlist.push("perwaiz");
// print a messag
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to dinner"));
});
