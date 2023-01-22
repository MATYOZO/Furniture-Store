// LOADER

window.addEventListener("load", loader);

function loader() {
  let preloader = document.querySelector(".preloader");

  preloader.style.display = "none";
}

// SWIPER

var swiper = new Swiper(".s4_container", {
  pagination: ".swiper-pagination",
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflow: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
});
