'use strict'

//richiedo parola in input. "ripulisco" la stringa da tutti gli spazi (esterni e interni) e la converto in  minuscolo
const inputWord = prompt('inserisci una parola')

let outputString = 'la parola inserita non è palindroma' //definisco una variabile stringa che sarà stampata in console. il valore di default è per parole non palindrome

if (inputWord.length === 0) { //verifico che l'utente abbia effettivamente dato un input
    outputString = 'non hai inserito nulla!'
} else if (inputWord.length === 1) { //verifico che l'input abbia almeno 2 caratteri
    outputString = 'la parola inserita è troppo corta'
} else if (reverseWord(inputWord)) {
    outputString = 'la parola inserita è palindorma'
}

function reverseWord(word) { //definisco una fuzione che richiede il parametro word

    word.toLowerCase() //converto tutti i caratteri in minuscolo

    let revWord = '' //creo una variabile vuota per contenere la nuova stringa

    for (let i = word.length - 1; i >= 0; i--) { //apro un ciclo che inizia da i = lunghezza della parola -1 e finisce quando l'indice arriva 0
        revWord += word[i] //concateno la lettera all'indice i alla stringa revWord
    }

    let result = false //definisco una variabile result che conterrà il risultato della funzione. il default è false

    if (inputWord === revWord) { //se inputWord e revWord sono uguali, il valore di result diventa true
        result = true
    }
    return result //la funzione ritorna un valore booleano
}

console.log(outputString) //stampo in console la stringa


/*SOLUZIONE GAETANO
-nella funzione inserire solo la verifica delle parole, passandole entrambe come argomenti
-trasforma stringa in array con split
-fa reverse dell'array
-joina la stringa
---parola.split('').reverse().join('')
-la funzione restituisce solo true o false
-per l'output: if (funzione(parola, parolaReverse))
*/


/*SOLUZIONE 2
al posto di usare i metodi built-it, usare ciclo for. non usare array, ma concatenare le varie lettere in una nuova stringa
*/


/*APPUNTI DI MIGLIORAMENTO:
-spostare .toLowerCase nella funzione
-gestire i casi limite prima di entrare effettivamente nella funzione
*/