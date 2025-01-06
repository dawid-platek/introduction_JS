const input1 = document.querySelector('#number1');
const input2 = document.querySelector('#number2');

const addButton = document.querySelector('#add');
const subtractButton = document.querySelector('#subtract');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');

const showResult = number => {document.querySelector('#result').innerHTML = number};

let result = '';

addButton.addEventListener('click', () => {
    result = Number(input1.value) + Number(input2.value)
    showResult(result);
});

subtractButton.addEventListener('click', () => {
    result = Number(input1.value) - Number(input2.value)
    showResult(result);
});

multiplyButton.addEventListener('click', () => {
    result = Number(input1.value) * Number(input2.value)
    showResult(result);
});


divideButton.addEventListener('click', () => {
    if (Number(input2.value == 0)) {
        showResult('Cannot divide by 0');
    }
    else{
    result = Number(input1.value) / Number(input2.value)
    showResult(result);
    }
});