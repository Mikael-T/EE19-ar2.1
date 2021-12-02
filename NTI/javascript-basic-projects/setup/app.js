const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

/*  Välj knapp elementet*/
const btn = document.getElementById('btn')

/* Välj färg elementet */
const color = document.querySelector(".color")

/* Ge knappen en function med AddEventListener */
btn.addEventListener("click", function () {
    
    
    /* Varje gång någon trycker på knappen vill jag att backgrunden ska ändra*/

    console.log(document.body);

    /* Get random number between 0 - 3 */

    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor (Math.random() * colors.length);
}