const country = "Banladesh";
const age = 52;
const isIndepended = true;
const student = {id:121, class: 11, name:"Agun"};
const friends = [13, 12, 11, 25, 16, 17, 20, 21];
function add(num1, num2) {
    return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndepended);
console.log(typeof student);
// check array using Array.isArray 
console.log(Array.isArray(friends));
console.log(typeof add);

// includes ----------
console.log(friends.includes(12));
console.log(friends.includes(6));
// array search ---------
if (friends.indexOf(9)) {
    
}

// concat -------------
const newFriends = [12, 31, 62,74];
const allFriends = newFriends.concat(friends);
console.log(allFriends);