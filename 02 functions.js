// FUNKCJE

// I przykład
function add(a,b){
    return a+b
}

const results = add(2,3)
console.log(results);

const results2 = add(5,9)
console.log(results2);


// II przykład
function sayHello(name, lastName){
    return `Witaj ${name} ${lastName} !`;
}

const person = sayHello('Jan', 'Kowalski');
console.log(person);

// III przykład -> DO WPISANIA W KONSOLI PRZEGLĄDARKI INTERNETOWEJ
function sayHello(name, lastName){
    document.write(`Witaj ${name} ${lastName} !`);
}



