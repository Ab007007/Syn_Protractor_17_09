let person = 
{
	fname : "Aravinda",
    lname : "HB",
	age	   : 30,
	phone : 55545454,
    address : {
        number : 1111,
        street : "BTM 2nd Stage",
        city   : "Bangalore",
        pincode: 32165456 
    },
    getFullName : function() {
        console.log(`${this.fname} , ${this.lname}`)
    }

}

// console.log(person);
console.log(person.fname); // dot notation to access the member of a object
console.log(person['fname']); // bracket notation to access the member of a object

console.log(person['address'].pincode);
person.getFullName()

let person1 = person

console.log(person1);

person1.fname = "ARAVIND"

console.log(person1.fname);
console.log(person.fname);