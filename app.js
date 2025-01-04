const sayHello = name => {
const p = document.querySelector('p');
p.innerHTML = `Witaj, ${name}!`};

const input = document.querySelector('input');
const button = document.querySelector('button');

input.addEventListener('change', function(event) {sayHello(event.target.value)});

button.addEventListener('click', () => {sayHello(input.value)});