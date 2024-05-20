'use strict'

//richiedo parola in input. "ripulisco" la stringa da tutti gli spazi (esterni e interni) e la converto in  minuscolo
const inputWord = prompt('inserisci una parola').toLowerCase().replaceAll(' ','')

function reverseWord(word){ //definisco una fuzione che richiede il parametro word

    const revWordArr =[] //creo un array vuoto per contenere le singole lettere della stringa in input, passata come argomento alla funzione

    for (let i = word.length-1; i>=0; i--) { //apro un ciclo che inizia da i = lunghezza della parola -1 e finisce quando l'indice arriva 0
        revWordArr.push(word.charAt(i)) //all'array viene aggiunto il carattere all'indice i della stringa in inputWord
    }

    let result //definisco una variabile result che conterrà il risultato della funzione
    
    if (inputWord===revWordArr.join('')) { //verifico che la parola in input sia uguale all'array joinato in una stringa, ovvero alla stringa in input letta da destra a sinistra
        result = 'è palindroma' 
    } else  {
        result = 'non è palindroma'
    }
    return result
}

let outputString

if (inputWord.length > 1){
    outputString= 'la parola inserita ' + reverseWord(inputWord)
} else if (inputWord.length === 1){
     outputString= 'hai inserito una sola lettera!'
} else{
    outputString= 'non hai inserito nulla!'
}

console.log(outputString)


