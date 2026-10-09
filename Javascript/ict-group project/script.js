const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");

const slidesLength = slideRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

const slideColors = [
    "#a1c2ff",
    "#ffbe6f",
    "#edffa3",
    "#bdffb7",
    "#e894ff"
];

slideLeft.style.top = `-${(slidesLength - 1) * 100}%`;

upButton.addEventListener("click", function () {
    changeSlide("up");
});

downButton.addEventListener("click", function () {
    changeSlide("down");
});

function changeSlide(direction) {

    const sliderHeight = sliderContainer.clientHeight;

    if (direction === "up") {

        activeSlideIndex++;

        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0;
        }

    } else if (direction === "down") {

        activeSlideIndex--;

        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1;
        }
    }

    slideRight.style.transform =
        `translateY(-${activeSlideIndex * sliderHeight}px)`;

    slideLeft.style.transform =
        `translateY(${activeSlideIndex * sliderHeight}px)`;

    upButton.style.backgroundColor =
        slideColors[activeSlideIndex];

    downButton.style.backgroundColor =
        slideColors[activeSlideIndex];
}


/* =========================
   SMALL DEVICES
========================= */

const sliderContainerSm = document.querySelector(".slider-container-sm");
const slideBottom = document.querySelector(".bottom-slide");
const slideTop = document.querySelector(".top-slide");
const rightButton = document.querySelector(".right-button");
const leftButton = document.querySelector(".left-button");

const slidesLengthSm = slideBottom.querySelectorAll("div").length;

let activeSlideIndexSm = 0;


function updateMobileSlider() {

    const sliderWidth = sliderContainerSm.clientWidth;

    slideTop.style.transform =
        `translateX(-${activeSlideIndexSm * sliderWidth}px)`;

    slideBottom.style.transform =
        `translateX(-${activeSlideIndexSm * sliderWidth}px)`;

    leftButton.style.backgroundColor =
        slideColors[activeSlideIndexSm];

    rightButton.style.backgroundColor =
        slideColors[activeSlideIndexSm];
}


rightButton.addEventListener("click", function () {

    activeSlideIndexSm++;

    if (activeSlideIndexSm > slidesLengthSm - 1) {
        activeSlideIndexSm = 0;
    }

    updateMobileSlider();

});


leftButton.addEventListener("click", function () {

    activeSlideIndexSm--;

    if (activeSlideIndexSm < 0) {
        activeSlideIndexSm = slidesLengthSm - 1;
    }

    updateMobileSlider();

});

screen.orientation.addEventListener('change', (event) => {
           window.location.reload();
});
/* Start with Spring */
updateMobileSlider();


/* Keep slider aligned when screen size changes */
window.addEventListener("resize", updateMobileSlider);
