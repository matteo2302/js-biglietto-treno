console.log("JS OK");
const age = prompt("quanti anni hai?", 68);
console.log(age);
const distance = prompt("quanti km desidera percorrere?", 513);
console.log(distance);

let ticket = distance * 0.21;
console.log(ticket);
let price = ticket;

if (age < 18) {
  price = ticket - (ticket / 100) * 20;
}
console.log("il tuo biglietto costa", price.toFixed(2), "euro");
