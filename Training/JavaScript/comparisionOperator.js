let x = 2, y =2, z = "2", p = 10

console.log(`Equal without type ${x==z}`);
console.log(`Equal without type ${x==y}`)
console.log(`Equal with type ${x===z}`);
console.log(`Equal with type ${x===y}`);
console.log(`NOT Equal without type ${x!=z}`);
console.log(`NOT Equal without type ${x!=y}`)
console.log(`NOT Equal with type ${x!==z}`);
console.log(`NOT Equal with type ${x!==y}`);

/*
 	Greater than 				>
 	Greater than and equal		>=
 	Less than 				<
 	Less than and equal			<=
*/

console.log((x > p)?"X is greater":"P is greater");