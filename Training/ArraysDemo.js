let fruits = ['Apple','Orange','Grapes','Banana','Mango']

console.log(fruits);

console.log(`Length of the array : ${fruits.length}`);

fruits.push('Cherry')
console.log(`After performing push to array`);
console.log(fruits);

fruits.unshift('Lemon')
console.log(`After performing unshift to array`);
console.log(fruits);

fruits.pop()
console.log(`After performing pop to array`);
console.log(fruits);

fruits.shift()
console.log(`After performing shift to array`);
console.log(fruits);

delete fruits[1]
console.log(`After performing delete to array`);
console.log(fruits);

fruits[1] = 'NewOrange'
console.log(`After performing insert to array`);
console.log(fruits);

let newFruits = fruits.slice(0,2)
console.log(newFruits);
console.log(fruits);

console.log("========== SPLICE =============");
let spliceFruits = fruits.splice(0,2,"NewApple","Orange")
console.log(spliceFruits);
console.log(fruits);

let evennum = [2,4,6,8]
let oddnum = [1,3,5,7]

let num = evennum.concat(oddnum)
console.log(num);

let allele = evennum.concat(oddnum, fruits)
console.log(allele);

console.log(fruits.join(","));


let board = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12]
]

console.log(board[3][2]);