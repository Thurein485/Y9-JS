const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");

const slidesLength = slideRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

const slideColors = ["#1b263b", "#8b0000", "#6a4c93","#bc002d" ];

upButton.addEventListener("click", function() {
    changeSlide("up");
});

downButton.addEventListener("click", function() {
    changeSlide("down");
});

function changeSlide(direction) {

    const sliderHeight = sliderContainer.clientHeight;

    if (direction === "up") {
        activeSlideIndex++;

        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0;
        }
    }

    else if (direction === "down") {
        activeSlideIndex--;

        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1;
        }
    }

    slideRight.style.transform =
        `translateY(-${activeSlideIndex * sliderHeight}px)`;

    slideLeft.style.transform =
        `translateY(-${activeSlideIndex * sliderHeight}px)`;

    // Change button color
    upButton.style.backgroundColor =
        slideColors[activeSlideIndex];

    downButton.style.backgroundColor =
        slideColors[activeSlideIndex];
}