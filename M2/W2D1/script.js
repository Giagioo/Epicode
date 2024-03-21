const NUMERO =( prompt("inserisci un numero") );

//controllo
switch (NUMERO) {
    case "uno":
        alert("Hai inserito il primo numero piccolo")
        break
     case "due":
        alert("Hai inserito il secondo numero intermedio")
        break
     case "tre":
     case"quattro":
     case"cinque":
        alert("Hai inserito il numero grande")
         break
     default:
        alert("Hai inserito un numero non valido")
        break
    

    
}