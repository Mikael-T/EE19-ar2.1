/* Hitta element vi behöver */
const rutaNamn = document.querySelector("input")
const menu = document.querySelector("select")
const knapp = document.querySelector("button")
const lista = document.querySelector("ul")



/* Vad händer när man klickar på knappen?*/
knapp.addEventListener("click", function () {
    console.log("Du har klickat på knappen!");

    /* Läs av textrutan och lagra i en variabel */
    var namn =  rutaNamn.value
    console.log(namn);


/* Läs in valet i meny */
    var cpu = menu.value
 
    /* Skriv i ul-listan */

        if (cpu == "Ryzen 5 5600X") {
            lista.innerHTML = "<li>" + 
            "<img src=\"https://inetimg3.se/img/86x86/5303474_3.jpg\"> " + 
            "AMD Ryzen 5 5600X 3.7 GHz 35MB" + 
            "Antal kärnor: 6 st | Antal trådar: 12 st | TDP: 65 W" + 
            "</li>"
        }
        if (cpu == "Ryzen 7 5800X ") {
            lista.innerHTML = "<li>" + 
            "<img src=\"https://inetimg.se/img/86x86/5303475_3.jpg\"> " + 
            "AMD Ryzen 7 5800X 3.8 GHz 36MB" + 
            "Antal kärnor: 8 st | Antal trådar: 16 st | TDP: 105 W"+ 
            "</li>"
        }
    }):