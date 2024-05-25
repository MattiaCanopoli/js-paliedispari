'use strict'

//richiedo parola in input.
const inputWord = prompt('inserisci una parola')

let outputString = 'la parola inserita non è palindroma' //creo una variabile con un valore default da stampare in console

if (inputWord.length === 0) { //verifico che l'utente abbia effettivamente inserito un input
    outputString = 'non hai inserito nulla!' //cambio il valore di outputString
} else if (inputWord.length === 1) { //verifico se l'input dell'utente è una sola lettera
    outputString = 'la parola inserita è troppo corta' //cambio il valore di outpuString
} else if (reverseWord(inputWord)) { //verifico che il return della funzione invocata sia true
    outputString = 'la parola inserita è palindorma' //cambio il valore di outputString
}

function reverseWord(word) { //definisco una fuzione che richiede il parametro word

    const lowerInput = word.toLowerCase() //creo una variabile che prende la parola in input e trasforma tutti i caratteri in minuscolo

    const revWordArr = lowerInput.split('').reverse().join('')  //creo una variabile che trasforma la parola in array con split, lo rigira con reverse ed in ultimo lo joina in una stringa

    let result = false //creo una variabile per accogliere il risultato della funzione. il valore default è false

    if (lowerInput === revWordArr) { //verifico che la variabile lowerInput sia uguale a revWordArray
        result = true //il valore di result diventa vero
    }

    return result //la funzione ritorna result
}

console.log(outputString) //stampo outputString in console


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