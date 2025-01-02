//Funkcje - zadania -> do wpisania do konsoli przeglądarki    
    // Zadanie I
        // I sposób
function showDeliveryAddress(city, street, streetNumber) {
  document.write(`Delivery address: ${city}, ${street}, ${streetNumber}`);
}

showDeliveryAddress('Warsaw', 'Marszałkowska', 10);

        // II sposób
        function showDeliveryAddress(city, street, streetNumber) {
            var text = `Delivery address: ${city}, ${street}, ${streetNumber}`;
            document.write(text);
          }
          showDeliveryAddress('Warsaw', 'Marszałkowska', 10);



    // Zadanie II
function add(a,b) {return a + b}
function divide(a,b) {return a / b} 
function multiply(a,b) {return a * b}

const multiplyResult = multiply(2, 3);
const divideResult = divide(6, 2);
const result = add(multiplyResult, divideResult);

function showResult(number) {
  document.write(`Result: ${number}`);
  }


    // Zadanie III
const add = (a,b) => a + b;
const divide = (a,b) => a / b 
const multiply = (a,b) => a * b

const multiplyResult = multiply(2, 3);
const divideResult = divide(6, 2);
const result = add(multiplyResult, divideResult);

const showResult = number => document.write(`Result: ${number}`);