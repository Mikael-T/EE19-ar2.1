const total = document.querySelector("textarea")
const btnMember = document.querySelector(".medlem")
const btnPlusmedlem = document.querySelector(".plusmedlem")



btnMember.addEventListener("click", function() {

    total.value = "9.99$";
})

btnPlusmedlem.addEventListener("click", function() {

    total.value = "15.99$";
})