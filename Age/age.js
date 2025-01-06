const input = document.querySelector('#age');
const button = document.querySelector('#submit');
const message = document.querySelector('#message');

// I sposób
// button.addEventListener('click', () => {
//     const age = Number(input.value);
//     if (age < 18) {
//         message.innerHTML = "You can't enter";
//     } else {
//         message.innerHTML = "You can come in.";
//     }
// }); 

// II sposób lepszy
const checkAge = age =>{
    if (age >= 18) {
        message.innerHTML = "You can enter";
    } 
    else {
        message.innerHTML = "You can't enter !!!!";
    }
}

button.addEventListener('click', () => {
    checkAge(input.value)
});
