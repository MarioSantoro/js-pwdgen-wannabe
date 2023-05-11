// L'ho fatto qui e non in html per sperimentare
document.getElementById("title").innerHTML = "Generatore password migliore al mondo (Nessuno può contraddire questa affermazione!!!!)";
document.getElementById("subtitle").innerHTML = "La tua password è :";

const nome = prompt("Insert your Name");
const cognome = prompt("Insert your Surname");
const colorePreferito = prompt("Insert your PreferitColor");
const password = nome + cognome + colorePreferito + "21";

document.getElementById("password").innerHTML = password;