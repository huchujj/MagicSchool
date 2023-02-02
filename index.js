function AppearCircle() {
    let circle = document.getElementById("circle");
    let PressHere = document.getElementById("PressHere");
    let circleAppearSound = new Audio();
    circleAppearSound.src = "audio/AppearCircle.mp3";

    PressHere.style.display = "none";
    circle.style.display = "block";
    circle.style.animationPlayState = "running";
    circleAppearSound.play();
}