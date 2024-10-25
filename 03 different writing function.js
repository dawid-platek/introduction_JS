// I zapis funkcji
function add(a,b) {
    return a + b;
}
const a = add(12,32)
console.log(a)

// II zapis funkcji
const b = function(a1, b1) {return a1 + b1  }
var a1=1
var b1=2
console.log(a1 + b1 )

// III zapis funkcji
const c = (a,b) => {return a + b}
c(1,3)
console.log(c);

// IV zapis funkcji
const d = (a,b) => {return a + b}
d(2,4)
console.log(d);


const sayHello = name => document.write(`Hello ${name}!`)
sayHello('David')