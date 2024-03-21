let listaSpesa = ["pane", "latte", "uova", "formaggio"]

//chiedere l'imput all'utente
let prodotto = prompt("Inserisci il nome del prodotto")

//memorizzare il valore del controllo da fare
let indiceProdotto = listaSpesa.indexOf(prodotto)
console.log(indiceProdotto)

//controllare l'imput  
if (indiceProdotto >= 0) {
    alert("Il prodotto è presente")
} else {
    listaSpesa.push(prodotto)
    console.log(listaSpesa)
    alert("Il prodotto non è presente, ma ci abbiamo pensato noi!")
}