const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const radioButtons = document.querySelectorAll('.radio-buttons input');
const slides = document.querySelectorAll('.slide');
let currentSlideIndex = 0;
let slideInterval;

// Show initial slide and set initial radio button state
showSlide(currentSlideIndex);
updateRadioButtons();

// Start the slideshow
startSlideShow();

// Event listeners for next and previous buttons
nextBtn.addEventListener('click', () => {
  nextSlide();
  resetSlideInterval();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetSlideInterval();
});

// Event listeners for radio buttons
radioButtons.forEach((radio, index) => {
  radio.addEventListener('change', () => {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
    resetSlideInterval();
  });
});

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slides[index].classList.add('active');
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
  updateRadioButtons();
}

function prevSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  showSlide(currentSlideIndex);
  updateRadioButtons();
}

function startSlideShow() {
  slideInterval = setInterval(() => {
    nextSlide();
  }, 3000);
}

function resetSlideInterval() {
  clearInterval(slideInterval);
  startSlideShow();
}

function updateRadioButtons() {
  radioButtons.forEach((radio, index) => {
    radio.checked = index === currentSlideIndex;
  });
}
