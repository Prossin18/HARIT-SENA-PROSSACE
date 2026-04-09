// Scroll Left
function slideLeft() {
    console.log("Left clicked");
    const slider = document.getElementById("slider");
    slider.scrollBy({
        left: -300,
        behavior: "smooth"
    });
}

// Scroll Right
function slideRight() {
    const slider = document.getElementById("slider");
    slider.scrollBy({
        left: 300,
        behavior: "smooth"
    });
}