const images = [
  "assets/imgs/hero_section1.webp",
  "assets/imgs/hero_section2.webp",
  "assets/imgs/hero_section3.webp",
  "assets/imgs/hero-bg.webp"
];

let current = 0;
const hero = document.getElementById("heroBg");

// Set initial image
hero.style.backgroundImage = `url('${images[current]}')`;

setInterval(() => {
  hero.style.opacity = 0;

  setTimeout(() => {
    current = (current + 1) % images.length;
    hero.style.backgroundImage = `url('${images[current]}')`;
    hero.style.opacity = 1;
  }, 600);

}, 3000);