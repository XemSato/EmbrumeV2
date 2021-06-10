
function audioPlay() {

    this.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`;
    
    document.querySelector("audio").play()
    
    this.addEventListener("click", audioOff, {once:true})
}

function audioOff(){
    this.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> `
    document.querySelector("audio").pause()
    this.addEventListener("click", audioPlay, {once:true})
}


document.querySelector("audio").addEventListener('timeupdate',
    time
); 

function time(){
    let temps = document.querySelector("audio").currentTime;
    let tempsEcoule = temps;
    let tempsduree = document.querySelector("audio").duration;
let minutes = Math.floor(tempsEcoule / 60);
let secondes = tempsEcoule % 60;

let minutesdure = Math.floor(tempsduree / 60);
let secondesdure = tempsduree % 60;
console.log(minutes + ":" + secondes);
    document.querySelector(".timer").innerText = minutes + `:` + Math.floor(secondes) + `/` +  minutesdure + `:` + Math.floor(secondesdure); 
}
document.querySelector(".play").addEventListener("click", audioPlay, {once:true})

