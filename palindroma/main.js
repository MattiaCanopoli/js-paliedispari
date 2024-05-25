'use strict'

//richiedo parola in input. "ripulisco" la stringa da tutti gli spazi (esterni e interni) e la converto in  minuscolo
const inputWord = prompt('inserisci una parola')

function reverseWord(word) { //definisco una fuzione che richiede il parametro word

    word.toLowerCase() //converto tutti i caratteri in minuscolo

    let revWord = '' //creo un array vuoto per contenere le singole lettere della stringa in input, passata come argomento alla funzione

    for (let i = word.length - 1; i >= 0; i--) { //apro un ciclo che inizia da i = lunghezza della parola -1 e finisce quando l'indice arriva 0
        revWord += word[i]
    }

    let result //definisco una variabile result che conterrà il risultato della funzione

    if (inputWord === revWord) { //verifico che la parola in input sia uguale all'array joinato in una stringa, ovvero alla stringa in input letta da destra a sinistra
        result = true
    } else {
        result = false
    }
    return result
}

let outputString = 'la parola inserita non è palindroma'

if (inputWord.length === 0) {
    outputString = 'non hai inserito nulla!'
} else if (inputWord.length === 1) {
    outputString = 'la parola inserita è troppo corta'
} else if (reverseWord(inputWord)) {
    outputString = 'la parola inserita è palindorma'
}


console.log(outputString)


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