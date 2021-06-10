
document.querySelectorAll("audio").forEach(ee =>{
   ee.addEventListener('timeupdate',
    time);
});  




function time(){
    let temps = this.currentTime;
    let tempsEcoule = temps;
    let tempsduree = this.duration;
    let minutes = Math.floor(tempsEcoule / 60);
    let secondes = tempsEcoule % 60;
    let minutesdure = Math.floor(tempsduree / 60);
    let secondesdure = tempsduree % 60;
    let affiche = minutes + `:` + Math.floor(secondes) + `/` +  minutesdure + `:` + Math.floor(secondesdure); 

console.log(minutes + ":" + secondes);
    
this.nextElementSibling.nextElementSibling.innerText = affiche;
    
}


function audioPlay() {

    this.innerHTML = `<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>`;
    
    this.nextElementSibling.play()
    
    this.addEventListener("click", audioOff, {once:true})
}

function audioOff(){
    this.innerHTML = `<polygon points="5 3 19 12 5 21 5 3"></polygon>`;
    this.nextElementSibling.pause()
    this.addEventListener("click", audioPlay, {once:true})
}
document.querySelectorAll(".play>svg").forEach(e=>{
    e.addEventListener("click", audioPlay, {once:true})
})


//




