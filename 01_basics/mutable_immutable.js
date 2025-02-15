// Reference link
// https://dev.to/mrizwanashiq/primitive-and-non-primitive-56n8

let userOne = {         // The reference to this object is stored in the Stack.
    email: "user@google.com",
    upi: "user@ybl"
};                      // The actual object data is stored in the Heap.

let userTwo = userOne;  // userTwo references the same object in the Heap.

userTwo.email = "ayush@google.com"; // Modifying userTwo also affects userOne.

console.log(userOne.email); // Output: ayush@google.com
console.log(userTwo.email); // Output: ayush@google.com
let  firstname = "rajiv"
// let lastname = new String("sharma")
let lastname ="sharma"
console.log(lastname); 
lastname.replace('s','-')
console.log(lastname);
// console.log(lastname.replace('s','-')); 