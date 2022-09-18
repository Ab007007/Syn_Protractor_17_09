// class expression
let Person = class {}


//class declaration
class NewPerson {
   

    constructor(fn, ln) {
        this.fn = fn;
        this.ln = ln;
    }

    calAge(birthYear) {
        console.log(`Person Age is ${2022 - birthYear}`);
    }

    static country = "India"
}

const p1 = new NewPerson("ahb", "abh");
console.log(p1.fn);
p1.calAge(1984)
console.log(NewPerson.country);
