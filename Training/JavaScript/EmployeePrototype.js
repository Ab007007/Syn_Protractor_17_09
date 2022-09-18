let empDetails = function(name,age) {
    this.name = name
    this.age = age
}
empDetails.prototype.getName = function() {
    return `Employee Name : ${this.name}`
} 
empDetails.prototype.getAge = function() {
    return `Employee Age : ${this.age}`
} 
empDetails.prototype.getFullDetails = function() {
    return " Name :" + this.name  + " Age "  + this.age
}

let emp1 = new empDetails("Harry", 38)
let emp2 = new empDetails("Nandi", 39)

console.log(emp1.getFullDetails());
console.log(emp2.getFullDetails());

console.log(emp1.getName());


module.exports = empDetails