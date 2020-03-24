// Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il nuovo utente si trova

// creo array cognomi
var cognomi = ["Barabba", "Montale", "Zorro", "Catullo", "Machiavelli"];

console.log("I cognomi della lista sono: " + cognomi);

// chiedo all'utente il suo cognome
var cognomeUtente = prompt("Inserisci il tuo cognome");

console.log("Il cognome dell'utente è: " + cognomeUtente);

// inserisco il cognome dell'utente nella lista array

cognomi.push(cognomeUtente);

console.log("I cognomi, dopo l'inserimetento del mio cognome sono: " + cognomi);

// lista ordinata alfabeticamente
var cognomiOrdinati = cognomi.sort();

console.log("I cognomi ordinati alfabeticamente sono: " + cognomiOrdinati);



// ciclo cognomi
for (var i = 0; i < cognomiOrdinati.length; i++) {
  var listaCompleta = cognomiOrdinati[i];
  console.log(listaCompleta);
  // var per far ritornare elemento precedente
  var cognomiPrima = document.getElementById('lista-cognomi').innerHTML;
  // stampa lista ordinata alfabeticamente
  document.getElementById('lista-cognomi').innerHTML= cognomiPrima + "<li>" + listaCompleta + "</li>";
}


// far ritornare l'indice dell'elemento all'interno dell'array ordinato
