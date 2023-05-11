// L'ho fatto qui e non in html per sperimentare
document.getElementById("title").innerHTML = "Generatore password migliore al mondo (Nessuno può contraddire questa affermazione!!!!)";
document.getElementById("subtitle").innerHTML = "La tua password è :";

let chars = "0bc1qk55vk7wjgzg3pmxlh59rv5dlgewd9jem5nrt4w!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let passwordLength = 12;
let password = "";

for(let i=0; i <= passwordLength; i++){
    let randomNumber = Math.floor(Math.random() * chars.length);
    password = password + chars.substring(randomNumber , randomNumber + 1);
}

console.log(password);

document.getElementById("password").innerHTML = password;
