
function menuOpen() {
    
    document.querySelector(".MenuAvant").classList.toggle("MenuApres");
   document.querySelector("svg").classList.toggle("noir")
   
}


document.querySelector("svg").addEventListener("click", menuOpen);

