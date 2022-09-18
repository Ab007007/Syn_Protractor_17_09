const userdetails = "  my self Aravind, working as A Trainer  ";

console.log(userdetails.charAt(0));
console.log(userdetails.indexOf("A"));
console.log(userdetails.substring(userdetails.indexOf("A"),userdetails.indexOf(",")));

console.log(userdetails.indexOf("A") === userdetails.lastIndexOf("A"));

console.log(`Length of the string ${userdetails.length}`);


console.log(`Length of the string ${userdetails.trim().length}`);

console.log("TO Loser " + userdetails.toLowerCase());

console.log("TO upper " + userdetails.toUpperCase());

let user = "name=Aravinda;age=40;empid=5646564"

udetails = user.split(";")
console.log(udetails);