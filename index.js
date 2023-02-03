function start() {
    let circle = document.getElementById("circle");
    let circle_black = document.getElementById("circle_black");
    let circle_blur = document.getElementById("circle_blur");

    let circleAppearSound = new Audio();
    let introAIvoice = new Audio();

    circleAppearSound.src = "audio/AppearCircle.mp3";
    introAIvoice.src = "audio/introAIvoice.mp3";

    circle_black.style.display = "none";
    circle_blur.style.display = "none";
    circle.style.display = "block";
    circle.style.animationPlayState = "running";

    circleAppearSound.play();
    circleAppearSound.addEventListener("ended", function(){
        introAIvoice.play();
    })
}