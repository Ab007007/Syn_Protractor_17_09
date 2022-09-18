let birthYear = 2020
let age = 2022-birthYear
if(age > 18) 
{
    console.log(`Your Age is ${age} Eligible for Driving Licence`);
}
else
{
    console.log(`Your Age is ${age} Not Eligible for Driving Licence`);
}

let a = 10, b=15 , c=15

if(a>b && b>c)
{
    console.log(`a: ${a} is greater`);
}
else if(b>a && b>c)
{
    console.log(`b: ${b} is greater`);
}
else if (c>a && c>b)
{
    console.log(`c: ${c} is greater`);
}
else {
    console.log("Numbers are equal");
}