

let guestlist: string[] = ["Amber","Perwaiz","Saima","Rafay","Mahrukh","Areeb"]

// print message
console.log("unfortunately! the new dinner table won't arrive so we can invite only two guest,");

// Remove guest  from the list
while(guestlist.length > 2) {
    let removeGuest : string | undefined = guestlist.pop();
    if(removeGuest !== undefined){
        console.log(` Sorry ${removeGuest},we can't invite you.`);
    }   
}

// / • Print a message to each of the two people still on your list, letting them know they’re still invited.
guestlist.forEach(guest =>{
    console.log(`Dear ${guest}, you are still invited for the dinner`);  
})

// remove list two names from the list
guestlist.splice(0,guestlist.length)

// printupdated empty list
console.log("Updated list og guest",guestlist);

