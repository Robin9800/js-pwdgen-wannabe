/*chiedere all'utente il proprio NOME, COGNOME e COLORE PREFERITO*/
const yourName = String( prompt('Qual è il tuo nome?'));
const surname = String( prompt('e il tuo cognome?'));
const color = String(prompt('Ok, ora dimmi il tuo colore preferito'));
console.log(yourName);
console.log(surname);
console.log(color);



document.getElementById('random-password').innerHTML = 'La tua password generata è ' + yourName + surname + color + Math.floor(Math.random() * 101);