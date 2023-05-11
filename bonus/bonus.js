// L'ho fatto qui e non in html per sperimentare
document.getElementById("title").innerHTML = "Generatore password migliore al mondo";
document.getElementById("subtitle").innerHTML = "La tua password è :";



function generate(){
    let result = "";
    let chars = "0bc1qk55vk7wjgzg3pmxlh59rv5dlgewd9jem5nrt4w!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength ;
    passwordLength = document.getElementById("lenghtPass").value;
    for(let i=0; i <= passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length);
        result += chars.substring(randomNumber , randomNumber + 1);
     }

     document.getElementById("suggpass").innerHTML = result;
     document.getElementById("add").innerHTML = "Genera una nuova password";
}


