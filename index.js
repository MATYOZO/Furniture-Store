// LOADER

window.addEventListener("load", loader);

function loader() {
  let preloader = document.querySelector(".preloader");

  preloader.style.display = "none";
}

// GALLERY

let photos = document.querySelectorAll(".photo");

photos.forEach((photo) => {
  photo.addEventListener("mousein", () => {
    alert("nie dziala");
  });
});
