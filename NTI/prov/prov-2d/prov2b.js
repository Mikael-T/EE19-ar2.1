const inputTal = document.querySelector(".tal");
const inputDjur = document.querySelector(".djur");
const inputStad = document.querySelector(".stad");
const inputAdjektiv = document.querySelector(".adjektiv");



const btnSumma = document.querySelector(".btn-primary");
const btnRandom = document.querySelector(".btn-success");
const outputSvar = document.querySelector(".alert-primary ");


const varning = document.querySelector(".alert-warning");



btnSumma.addEventListener("click", function () {
    
    var dagar = inputTal.value;
    var djur = inputDjur.value;
    var stad = inputStad.value;
    var adjektiv = inputAdjektiv.value;
    


    outputSvar.textContent = "Det var för " + dagar + " dagar sen, då jag satt på tåget för att resa till " + stad + ". Det led mot kvällen. Det var mörkt ute och "  + adjektiv + " i kupén. Mina medresande slumrade var och en i sitt hörn och jag satt tyst och hörde på " + djur + ", då det brusade fram på skenorna.";

}


   
   
   
   
   



)

