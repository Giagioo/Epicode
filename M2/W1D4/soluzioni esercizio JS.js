/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
document.write("RISPOSTA ESERCIZIO 1: In JavaScript i principali datatype sono: Number (cioè tutti i valori che sono un numero con alcuni valori speciali tipo + o - infinto ed addirittura tutti quei numeri impossibili tipo infinito x 0); le STRING (tutti quei valori che sono parole delimitati da virgolette,); le BOOLEAN (tutti quei valori che indicano un'entità logica vero o falsa); i tipi UNDEFINED (rappresentano quei valori richiamati ma senza valore definito, come prendere una ciotola in cucina ma senza avrela riempita); i tipi NULL( rappresentano i contenitroi vuoti, come una ciotola da cucina appena svuotata del suo contenuto);  " )
/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
document.write("RISPOSTA ESERCIZIO 2: In JavaScript, un oggetto è un insieme di valori che si riferiscono alla stessa variabile.")
/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(12 + 20)
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12
/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = 'Giacomo Gomez Val'

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(4 - x)
let soluzione = 4 - x
document.write(`SOLUZIONE DELL'ESERCIZIO 6:  ${soluzione}`)
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = 'john'
let name2 = 'John'
console.log(name1 === name2)
console.log(name1.toLowerCase() === name2.toLowerCase())