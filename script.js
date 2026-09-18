let currentSlide = 1;

function nextSlide() {
    document.getElementById("slide" + currentSlide).classList.remove("active");

    currentSlide++;

    document.getElementById("slide" + currentSlide).classList.add("active");
}
// 🐢 Turtle secret message
let turtleClicks = 0;

function turtleMessage() {
    turtleClicks++;

    const popup = document.getElementById("turtlePopup");

    if (turtleClicks === 1) {
        popup.innerHTML = "🐢 Why did you click me?<br>I was peacefully existing. 😑";
    } 
    else if (turtleClicks === 2) {
        popup.innerHTML = "🐢 Okay fine...<br>Happy 2 Years, you annoying human. 😂💙";
    } 
    else {
        popup.innerHTML = "🐢 Stop clicking me!<br>I'm still your Turtle. 😭😂";
    }

    popup.style.opacity = "1";
    
    setTimeout(function() {
        popup.style.opacity = "0";
    }, 2500);
}