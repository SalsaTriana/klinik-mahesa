// Galeri otomatis
let index = 0;
const slides = document.querySelectorAll('.gallery-slider img');
setInterval(() => {
  slides.forEach((img, i) => img.style.display = 'none');
  index = (index + 1) % slides.length;
  slides[index].style.display = 'block';
}, 3000);