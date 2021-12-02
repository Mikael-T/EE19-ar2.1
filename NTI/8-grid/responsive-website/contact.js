const inputFnamn = document.querySelector(".förnamn")
const inputEnamn = document.querySelector(".efternamn")
const inputNummer = document.querySelector(".nummer")
const inputEmail = document.querySelector(".epost")
const inputMeddelande = document.querySelector("textarea")
const btn = document.querySelector("button")



btn.addEventListener("click", function() {
    
    console.log("Användaren: " + inputFnamn.value + " " + inputEnamn.value + "\nTelefonNummer: " + inputNummer.value + "\nEpost:" + inputEmail.value + "\nMeddelande: " + inputMeddelande.value)

})






