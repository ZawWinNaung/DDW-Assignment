ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".intro_container", { origin: "top" });
ScrollReveal().reveal(".nav_menu", { origin: "right" });
ScrollReveal().reveal(".nav_bar", { origin: "top" });

let images = ["img_slide_1.jpg", "img_slide_2.jpg", "img_slide_3.jpg"];
let i = 0;
const changeImage = () => {
  i = i + 1;
  if (i == images.length) {
    i = 0;
  }
  header.style.backgroundImage =
    "linear-gradient(to bottom,rgba(13, 17, 23, 0.3),rgba(13, 17, 23, 1)),url(assets/images/" +
    images[i] +
    ")";
};
