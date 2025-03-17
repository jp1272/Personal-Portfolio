"use strict";

document.querySelector(".home-click").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".home").scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll(".project__links li").forEach((item) => {
  item.addEventListener("click", function () {
    const img = document.getElementById("preview-img");
    const link = document.getElementById("preview-link");

    img.src = this.getAttribute("data-image");
    link.href = this.getAttribute("data-link");

    img.style.display = "block";
  });
});

// document.querySelectorAll(".project__links li").forEach((item) => {
//   item.addEventListener("click", function () {
//     const iframe = document.getElementById("preview-iframe");
//     iframe.src = this.getAttribute("data-url"); // Update iframe src
//     iframe.style.display = "block"; // Make iframe visible
//   });
// });

// Slider
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");

  let curSlide = 0;
  const maxSlide = slides.length;

  // FUNCTIONS

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next Slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  const init = function () {
    goToSlide(0);
  };
  init();

  // EVENT HANDLERS
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    console.log(e);
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  });
};
slider();
