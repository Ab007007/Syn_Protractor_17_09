let resto = new Map();

resto.set('name','Nandana')
resto.set(222,'Bangalore')
resto
.set('cagegories', ['Indian','Chinese'])
.set('open', 11)
.set('close',23)
.set(true, ' Resto is Open')
.set(false,' Resto is Closed now')

//console.log(resto.get(true));
let time = 10
console.log(resto.get((time >= resto.get('open') && time<= resto.get('close') )));

console.log(...resto);

console.log(`Key : open -> ${resto.has("open")}`)
