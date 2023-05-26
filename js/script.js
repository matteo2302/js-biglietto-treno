console.log("JS OK");
//step 0
const yourTicketPlaceholder = document.getElementById("your-ticket");
const yourAgePlaceholder = document.getElementById("your-age");
const yourDistancePlaceholder = document.getElementById("your-distance");
const realPricePlaceholder = document.getElementById("real-price");
const age = prompt("quanti anni hai?", 68);
console.log(age);
const distance = prompt("quanti km desidera percorrere?", 513);
console.log(distance);
let ticket = distance * 0.21;
console.log(ticket);
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
yourTicketPlaceholder.innerText = price.toFixed(2);
yourAgePlaceholder.innerText = age;
yourDistancePlaceholder.innerText = distance;
realPricePlaceholder.innerText = ticket.toFixed(2);
