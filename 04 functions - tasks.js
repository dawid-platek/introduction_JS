//Funckje - zadania -> do wpisania do konsoli przeglądarki    
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