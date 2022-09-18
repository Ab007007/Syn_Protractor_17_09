//constructor function
let Employee = function(empName, companyName) {
    this.empName = empName
    this.companyName = companyName
}

Employee.prototype. calAge = function(birthYear) {
    console.log(`Person Age is ${2022 - birthYear}`);
}
let emp = new Employee("Aravinda" , "Synechron")

console.log(emp.companyName);
emp.calAge(1980)