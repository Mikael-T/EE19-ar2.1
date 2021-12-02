/* ge alla klasser en const variabel */
const btnAdd = document.querySelector(".plus");
const talOne = document.querySelector(".tal1");
const talTwo = document.querySelector(".tal2");
const svarOne = document.querySelector("textarea");
const btnMinus = document.querySelector(".minus")
const btnMultiple = document.querySelector(".gånger")
const btnDivide = document.querySelector(".dividera")
const btnRandom = document.querySelector(".slumpa")



btnAdd.addEventListener("click", function () {
   
    console.log("I click on " + btnAdd)

    console.log(talOne)
    console.log(talTwo)

    var plussvar = Number(talOne.value) + Number(talTwo.value);

    svarOne.value = plussvar;


}) 

btnAdd.addEventListener("click", function () {
   
    console.log("I click on " + btnAdd)

    console.log(talOne)
    console.log(talTwo)

    var plussvar = Number(talOne.value) + Number(talTwo.value);

    svarOne.value = plussvar;


}) 

btnMinus.addEventListener("click", function () {
   
    var plussvar = Number(talOne.value) - Number(talTwo.value);

    svarOne.value = plussvar;


}) 

btnMultiple.addEventListener("click", function () {
   
    var plussvar = Number(talOne.value) * Number(talTwo.value);

    svarOne.value = plussvar;


}) 

btnDivide.addEventListener("click", function () {
   
    var plussvar = Number(talOne.value) / Number(talTwo.value);

    svarOne.value = plussvar;


}) 

btnRandom.addEventListener("click", function () {
   
    var talrandom = Math.random();

    var talrandomtwo = Math.random();

    
    

    

}) 






