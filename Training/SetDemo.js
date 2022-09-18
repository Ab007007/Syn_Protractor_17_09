let grade = new Set()
grade.add("A")
grade.add("B")
grade.add("C")
grade.add("D")

console.log(`Length of an array : ${grade.size}`);
grade.add("A")
grade.add("B")
grade.add("C")
grade.add("D")

console.log(`Length of an array : ${grade.size}`);

console.log(grade.values());

for(g of grade)
{
    console.log(g);
}
console.log("Using for each loop");

grade.forEach(function(ele) {
    console.log(ele);
})

console.log("Using for each loop - Arrow Function");
grade.forEach(ele => console.log(ele))