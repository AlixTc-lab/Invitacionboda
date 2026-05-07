const music = document.getElementById("bg-music");

window.addEventListener("load", () => {

    const playPromise = music.play();

    if(playPromise !== undefined){
        playPromise.catch(() => {
            console.log("Autoplay bloqueado");
        });
    }

});


document.body.addEventListener("click", () => {
    music.play();
}, { once:true });