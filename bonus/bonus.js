// L'ho fatto qui e non in html per sperimentare
document.getElementById("title").innerHTML = "Generatore password migliore al mondo";
document.getElementById("subtitle").innerHTML = "La tua password è :";

let chars = "0bc1qk55vk7wjgzg3pmxlh59rv5dlgewd9jem5nrt4w!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let passwordLength ;

function generate(){
    let result = "";
    passwordLength = document.getElementById("lenghtPass").value;
    const charactersLength = chars.length;
    for(let i=0; i <= passwordLength; i++){
        result += chars.charAt(Math.floor(Math.random() * charactersLength));
     }

     document.getElementById("suggpass").innerHTML = result
}


