const music = document.getElementById("bg-music");

window.addEventListener("load", () => {

    const playPromise = music.play();

    if(playPromise !== undefined){
        playPromise.catch(() => {
            console.log("Autoplay bloqueado");
        });
    }

});

/* backup: si el usuario toca la pantalla */
document.body.addEventListener("click", () => {
    music.play();
}, { once:true });