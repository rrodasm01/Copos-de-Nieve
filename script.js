let countdownInterval = setInterval(countdown, 750);

function countdown(){
    let copito = document.createElement("div");
    copito.innerText = "🐫";

    copito.style.position = "absolute";
    copito.style.top = "-1px";

    copito.style.left = posicionAleatoria() + "px";
    
    copito.style.animation = "caida";

    copito.style.animationDuration = "5s";
    
    document.body.appendChild(copito);

    setTimeout(() => {
        document.body.removeChild(copito);
    }, 2000);

}

function posicionAleatoria() {
    return Math.floor(Math.random() * window.innerWidth);
};