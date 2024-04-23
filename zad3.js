// Definiowanie nieprawidłowego ciągu JSON
const invalidJSON = '{ "name": "Wiktoria", "age" 7, "city": "Rawicz" } ; 

try {
  // Próba sparsowania nieprawidłowego ciągu JSON
  const parsedJSON = JSON.parse(invalidJSON);
  // Wydrukowanie sparsowanego obiektu (nie zostanie osiągnięte w przypadku błędu)
  console.log('Parsed JSON:', parsedJSON);
} catch (error) {
  // Obsługa błędu w przypadku niepowodzenia parsowania
  console.error('An error occurred while parsing JSON:');
  // Wydrukowanie nazwy błędu
  console.error('Error name:', error.name);
  // Wydrukowanie wiadomości o błędzie
  console.error('Error message:', error.message);
}
