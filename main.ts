//Day 6 coding challenge
//Question: 1 = More guest;
let guests: string[] = ["Albert Einstein","Marie Curie","Leonardo da Vinci"]
console.log("Great newa! I found a bigger dinner table!");

//Adding more guests
guests.unshift("Isac Newton");
guests.splice(guests.length / 2,0, "Charles Darwin");
guests.push("Ada Lovelace");

guests.forEach(guest => {
    console.log(`Dear ${guest},would you like to join me for dinner? `);
});

//Question 2:Shrinking guest list.
console.log("Unfortunately, I can only invite two people for dinner.");

while (guests.length > 2) {
    let removedGuest =guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner,`);
}

guests.forEach(guest => {
  console.log(`Dear  ${guest}}, you're still invited to dinner.`);
});

guests.splice(0,guests.length);
console.log(guests); //Shows an empty list

//Question 3:Seeing the world
let places: string[] = ["New Zealand","Iceland","Japan","Switerzerland","Norway"];

console.log("Original orders:",places);

console.log("Alphabetical order:",[...places].sort());

console.log("Original order",places);

console.log("Reverse alphabetical order:",
[...places].sort().reverse());

console.log("Original order:",places);

places.reverse();
console.log("Reverse order:",places);

places.reverse();
console.log("Original order:",places);

places.sort();
console.log("Alphabetical order:",places);

places.reverse();
console.log("Reverse alphsbetical order:",places);



