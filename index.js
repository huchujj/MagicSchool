function AppearCircle() {
    let circle = document.getElementById("circle");
    let Click = document.getElementById("Click");
    let circleAppearSound = new Audio();
    circleAppearSound.src = "audio/AppearCircle.mp3";

    Click.style.display = "none";
    circle.style.display = "block";
    circle.style.animationPlayState = "running";
    circleAppearSound.play();
}