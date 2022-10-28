// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

"use strict";

/*---------------------------------------------------------------------------
                                    FUNCTIONS
----------------------------------------------------------------------------*/

function whoHasWin(num1, num2){

    let sum = num1 + num2;

    if(sum % 2 === 0 && userChoice === "Pari"){

        alert("Hai vinto!");

    }else if(sum % 2 === 1 && userChoice === "Pari"){

        alert("Hai perso!");

    }else if(sum % 2 === 1 && userChoice === "Dispari"){

        alert("Hai vinto!");

    }else if(sum % 2 === 0 && userChoice === "Dispari"){

        alert("Hai perso!");

    }
}

/*---------------------------------------------------------------------------
                                    MAIN
----------------------------------------------------------------------------*/

// Chiedo la scelta e un numero all'utente
const userChoice = prompt("Scegli pari o dispari?");
const userNumber = Number(prompt("Ora scegli un numero da 1 a 5!"));

// Assegno un numero random alla cpu
let cpuNumber = Math.floor(Math.random() * 5) + 1;

// Uso la funzione per decretare il vincitore
whoHasWin(userNumber, cpuNumber);
