const stressBall = document.querySelector(".antal1");
const btnMinus1 = document.querySelector(".minus1");
const btnPlus1 = document.querySelector(".plus1");
const total1 = document.querySelector(".summa1");

const pippiPussel = document.querySelector(".antal2");
const btnMinus2 = document.querySelector(".minus2")
const btnPlus2 = document.querySelector(".plus2")
const total2 = document.querySelector(".summa2")

const fraktInput = document.querySelector(".frakt");
const rabatt = document.querySelector(".rabattkod");
const summaInput = document.querySelector(".total");

const beställ = document.querySelector(".beställning ");

const btnSlutför = document.querySelector("button")





btnPlus1.addEventListener("click", function () {

    currentAntal = stressBall.value;

    total1.textContent = "1"

    stressBall.value = Number(currentAntal) + 1;

    stressBall.textContent = currentAntal;

    var kostnad = 39

    total1.textContent = currentAntal * kostnad + kostnad;





})


btnMinus1.addEventListener("click", function () {
    if (stressBall.value >= 1) {
        currentAntal = stressBall.value;



        stressBall.value = Number(currentAntal) - 1;

        stressBall.textContent = currentAntal;

        var kostnad = 39

        total1.textContent = currentAntal * kostnad - kostnad;

    }



})



btnPlus2.addEventListener("click", function () {

    currentAntal2 = pippiPussel.value;



    pippiPussel.value = Number(currentAntal2) + 1;

    pippiPussel.textContent = currentAntal2;

    var kostnad2 = 102;

    total2.textContent = currentAntal2 * kostnad2 + kostnad2;





})


btnMinus2.addEventListener("click", function () {

    if (pippiPussel.value >= 1) {

        currentAntal2 = pippiPussel.value;

        total2.textContent = "1";

        pippiPussel.value = Number(currentAntal2) - 1;

        pippiPussel.textContent = currentAntal2;

        var kostnad2 = 102;

        total2.textContent = currentAntal2 * kostnad2 - kostnad2;
    }




})




btnSlutför.addEventListener("click", function () {
    

    
})