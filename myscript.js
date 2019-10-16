var nome = prompt('Scrivi il tuo nome');

var cognome = prompt('Scrivi il tuo cognome');

var colore = prompt('Scrivi il tuo colore preferito');

document.getElementById('frase').innerHTML= 'Ciao ' + nome + ', la tua password è ';

document.getElementById('password').innerHTML= nome + cognome + colore + '19';
