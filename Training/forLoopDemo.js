let num =5

for(let index=1; index <=10; index++) 
{
    console.log(`${num} * ${index} = ${num * index}`);
}


console.log("Printing Table using while loop");
let index = 1;
while(index <=10) {

    console.log(`${num} * ${index} = ${num * index}`);
    index++
}


let fruits = ['Apple','Orange','Grapes']
console.log("+++++++++++++ for in loop Demo ++++++++++++++++");
for(i in fruits) {
    console.log(i);
}


console.log("+++++++++++++ for of loop Demo ++++++++++++++++");
for(i of fruits) {
    console.log(i);
}