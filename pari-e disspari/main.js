'use strict'
//creo 3 variabili per prendere gli elementi del DOM: numero in input, scelta dell'utente, pulsante 'Scommetti!'

const inputNumber = document.getElementById('number-input')
const choice = document.getElementById('even-odd-select')
const subBtn = document.getElementById('sub-btn')

//evento al click
subBtn.addEventListener('click', function (event){
    event.preventDefault()
    let randonNumber = Math.ceil((Math.random())*5) //genero un numero casuale da 1 a 5
    let inputVal=Number(inputNumber.value) //prendo il valore dell'input utente
    let choiceVal= choice.value //prendo la scelta dell'utente (pari o dispari)

    let result=evenOrOdd(inputVal, randonNumber) //creo una variabile che ha come valore il return della funzione evenOrOdd

    let msg=`Mi spiace! Tenta di nuovo! I numeri erano: ${inputVal} e ${randonNumber}` //creo una variabile msg con messaggio default. cambierà a seconda della condizione
    
    if (choiceVal==='bet'){
        msg='Devi fare una scelta per scommettere!'
    }else if (result===choiceVal){
        msg=`Congratulazioni! Hai vinto ${inputVal*randonNumber*2}€! I numeri erano: ${inputVal} e ${randonNumber}`
    }
    console.log(msg) //stampo msg in pagina
})

function evenOrOdd (num1, num2){ //definisco funzione che prende 2 valori come argomenti

    if((num1+num2)%2===0){ //se il modulo della somma dei due argomenti è 0 ritorna la stringa 'even'
        return 'even'
    } else {
        return 'odd' //se il modulo della somma dei due argomenti è diverso da 0 ritorna la stringa 'odd'
}}