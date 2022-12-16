const name = prompt ('come ti chiami?')
console.log("L'utente si chiama: ", name );

 const surname = prompt ("Qual'è il tuo cognome?")
 console.log("Il cognome dell'utente è: ", surname );

const color = prompt ("Qual'è il tuo colore preferito?")
console.log("Il colore preferito dell'utente è: ", color );




document.getElementById("text").innerHTML = name + surname + color + 21;
