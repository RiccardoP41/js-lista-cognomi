// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

// ***Creare array
var lista = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

// ***Chiedere cognome
var elemento = prompt("inserisci il cognome");

// ***Inserirlo nella lista
// lista.push(elemento.charAt(0).toUpperCase() + elemento.slice(1).toLowerCase());    \\TROVATO L'INTOPPO
var maiuscola = elemento.charAt(0).toUpperCase();
var minuscole = elemento.slice(1).toLowerCase();
elemento = maiuscola + minuscole;
lista.push(elemento);


// ***Ordinare la lista alfabeticamente
lista.sort();

// ***Stamparla in una lista ordinata con posizione
for (var i = 0; i < lista.length; i++) {
    document.getElementById("cognome").innerHTML += "<li>" + lista[i] + "</li>";
    if (elemento == lista [i]) {
        document.getElementById("posizione").innerHTML = " Si trova nella posizione " + (i + 1);
    }
}


// ***posizione umana dell'elemento con indexOf

// var posizione = lista.indexOf(elemento);
// document.getElementById("posizione").innerHTML = " Si trova nella posizione " + (posizione + 1);
