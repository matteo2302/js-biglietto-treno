console.log("JS OK");
const realPricePlaceholder = document.getElementById("real-price");

/*passo alla prossima pagina e passo dei dati*/
function vaiAllaProssimaPagina() {
  // Prendo i valori dai campi del form
  const name = document.getElementById('nameInput').value;
  const age = document.getElementById('ageInput').value;
  const distance = document.getElementById('distanceInput').value;

  const url = `biglietto.html?name=${encodeURIComponent(name)}&age=${encodeURIComponent(age)}&distance=${encodeURIComponent(distance)}`;
  window.location.href = url;
}

const params = new URLSearchParams(window.location.search);
const username = params.get('name');
const age = parseInt(params.get('age'));
const distance = parseFloat(params.get('distance'));


let ticket = distance * 0.21;


let price = ticket;
//steps from 1 to 4
if (age < 18) {
  price = ticket - (ticket / 100) * 20;
}
if (age > 65) {
  price = ticket - (ticket / 100) * 40;
}
console.log("il tuo biglietto costa", price.toFixed(2), "euro");
//bonus
document.getElementById("your-name").innerText =username;
document.getElementById('your-age').innerText = age;
document.getElementById('your-distance').innerText = distance;
realPricePlaceholder.innerText = ticket.toFixed(2);
