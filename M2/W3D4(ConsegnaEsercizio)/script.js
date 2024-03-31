//ESERCIZIO 7
function cambiaTitoloH1(nuovoTitolo) {
    document.querySelector('h1').textContent = nuovoTitolo;
}

//ESERCIZIO 8
function cambiaColoreSfondo(colore) {
    document.body.style.backgroundColor = colore;
}

//ESERCIZIO 9

//ESERCIZIO 10
function aggiungiClasseAmazon() {
    const linksAmazon = document.querySelectorAll('tbody a[href*="amazon.it"]');

    linksAmazon.forEach(link => {
        link.classList.add('amazon-link');
    });
}
document.addEventListener('DOMContentLoaded', function() {
    aggiungiClasseAmazon();
});

//ESERCIZIO 11
function toggleVisibilitaImmagini() {
    const immagini = document.querySelectorAll('tbody img');

    immagini.forEach(img => {
        img.classList.toggle('nascosto');
    });
}
const button = document.getElementById('toggleButton'); // Assume che ci sia un pulsante con l'id 'toggleButton'
button.addEventListener('click', toggleVisibilitaImmagini);

//esercizio 12

function cambiaColorePrezzi() {
    const prezzi = document.querySelectorAll('tbody td.prezzo');

    const colori = ['red', 'blue', 'green', 'purple', 'orange', 'brown', 'pink'];

    prezzi.forEach((prezzo, index) => {
        const colore = colori[Math.floor(Math.random() * colori.length)];
        prezzo.style.color = colore;
    });
}
