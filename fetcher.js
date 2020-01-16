
var fs = require('fs');

const request = require('request');
request('https://leconjugueur.lefigaro.fr/frnombre.php', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  

fs.writeFile('index.html', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
});




