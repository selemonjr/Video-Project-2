const video = document.querySelector("#video-container");
const btnEl = document.querySelector("#btn");
//targeting the play and pause buttons and adding functionalities to them//
btnEl.addEventListener("click",() => {
    if(!btnEl.classList.contains("slide")){
        btnEl.classList.add("slide");
        video.pause();
    } else {
        btnEl.classList.remove("slide");
        video.play()
    }
})