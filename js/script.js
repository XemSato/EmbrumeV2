
function menuOpen() {
    
    document.querySelector(".MenuAvant").classList.toggle("MenuApres");
   document.querySelector("svg").classList.toggle("noir")
   
}


document.querySelector("svg").addEventListener("click", menuOpen);


console.log("hello bienvenu dans la partie secrète du site, tu en as marre de te balader que sur 3 pages ! Alors cherchés, les boutons cachés pour enclencher de nouvelle chosent, il y a un secret sur chaque page. (et ne regarde pas le code, c'est moins drôle)")

//Trool

document.querySelector(".copyright>span").addEventListener("click",secret)

function secret(){
    this.innerHTML = `<a target=_blank href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><span>&copy;</span></a>`
    
}