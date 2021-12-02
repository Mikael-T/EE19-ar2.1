const walkInput = document.querySelector(".promenad");
const joggingInput = document.querySelector(".jogging");
const strenghtInput = document.querySelector(".styrka");
const stairInput = document.querySelector(".trappor");

const btnSummera = document.querySelector(".btn-primary");

const pLista1 = document.querySelector(".lista1");
const pLista2 = document.querySelector(".lista2");
const pTyngsta = document.querySelector(".tyngsta");




    

btnSummera.addEventListener("click", function () {


  var promenad = Number(walkInput.value);

  var jogging = Number(joggingInput.value);

  var styrka = Number(strenghtInput.value);

  var trappor = Number(stairInput.value);


  var promenadkcal = promenad * 107;

  var joggingkcal = jogging * 240;

  var styrkakcal = styrka * 350;

  var trapporkcal = trappor * 540;

  pLista1.textContent = (promenad + jogging + styrka + trappor) * 30;


  pLista2.textContent = promenad * 107 + jogging * 240 + styrka * 350 + 
  trappor * 540

    console.log(pLista1);
        

    if (promenadkcal > joggingkcal && promenadkcal > styrkakcal && promenadkcal > trapporkcal ) {
        
        pTyngsta.textContent = "Promenad är den högsta kaloriföbruknings akvtiviten";
    }

    if ( joggingkcal > promenadkcal && joggingkcal > styrkakcal && joggingkcal > trapporkcal ) {
        
        pTyngsta.textContent = "Jogging är den högsta kaloriföbruknings akvtiviten";
    }
    if ( styrkakcal > promenadkcal && styrkakcal > joggingkcal && styrkakcal > trapporkcal ) {
        
        pTyngsta.textContent = "Styrka är den högsta kaloriföbruknings akvtiviten";
    }
    if ( trapporkcal > promenadkcal && trapporkcal > joggingkcal && trapporkcal > styrkakcal ) {
        
        pTyngsta.textContent = "Trappor är den högsta kaloriföbruknings akvtiviten";
    }


})