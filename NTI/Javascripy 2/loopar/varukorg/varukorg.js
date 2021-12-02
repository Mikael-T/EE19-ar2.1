/* Väljer ut elementen som vi behöver */
const rutaPris = document.querySelector(".pris")
const rutaAntal = document.querySelector("input")
const rutaSumma = document.querySelector(".summa")
const knappPlus = document.querySelector(".plus")
const knappMinus = document.querySelector(".minus")

/* Globalla variabler */
var antal = rutaAntal.value;
console.log("antal", antal);
var pris = rutaPris.textContent;
console.log("pris ", pris);

/* Räkna ut total */
var summa = antal * pris;
console.log("summa", summa)

/* Skriv ut summan */
rutaSumma.textContent = summa;

/* Lyssna på ändring i input-rutan */
rutaAntal.addEventListener("input", function() {
    /* Läs av nya summan */
     antal = rutaAntal.value;
    
    /* Räkna ut nya summan */
    summa = antal * pris;

    /* Skriv ut nya summan */
    rutaSumma.textContent = summa + " kr";
});


knappPlus.addEventListener("click", function() {
    antal++;
    summa = antal * pris;
    console.log("summa " + summa );
    rutaSumma.textContent = summa + " kr";
    rutaAntal.value++;


})

knappMinus.addEventListener("click", function () {

    /* Om antal är större än noll då kan man räkna ned */
    if (antal > 0 ) {
        antal--;
        console.log("summa " + summa );
        summa = antal * pris;
        rutaSumma.textContent = summa + " kr";
        rutaAntal.value--;
        
    }

})

