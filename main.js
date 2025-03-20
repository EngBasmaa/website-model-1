const testimonials = [
  {
    text:
      "Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se.",
    author: "John Doe",
    role: "Creative designer at Colorlib",
    image: "images/testimonial.png"
  },
  {
    text:
      "Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se.",
    author: "Sarah Smith",
    role: "Creative designer at Colorlib",
    image: "images/testimonial.png"
  },
  {
    text:
      "Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se.",
    author: "Michael Brown",
    role: "Creative designer at Colorlib",
    image: "images/testimonial.png"
  }
];

const wrapper = document.getElementById("carousel-wrapper");

// Generate testimonial slides dynamically
testimonials.forEach(({ text, author, role, image }) => {
  const slide = document.createElement("div");
  slide.classList.add("testimonial-slide");
  slide.innerHTML = `
  
                <p class="testimonial-text">"${text}"</p>

                <div class="test">
                <div class="test-image">
                      <img src=${image} alt="Testimonial">
</div>

                <div class="test-content">
                <p class="testimonial-author">${author}</p>
                <p>${role}</p>
                </div>
                                </div>

            `;
  wrapper.appendChild(slide);
});

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let index = 0;
let startX = 0;
let endX = 0;
let interval;

function moveToNextSlide() {
  index++;
  if (index >= testimonials.length) {
    index = 0;
  }
  updateCarousel();
}

function moveToPrevSlide() {
  index--;
  if (index < 0) {
    index = testimonials.length - 1;
  }
  updateCarousel();
}

function updateCarousel() {
  wrapper.style.transform = `translateX(-${index * 100}%)`;
}

function startAutoSlide() {
  interval = setInterval(moveToNextSlide, 4000);
}

function resetAutoSlide() {
  clearInterval(interval);
  startAutoSlide();
}

startAutoSlide();

prevBtn.addEventListener("click", () => {
  moveToPrevSlide();
  resetAutoSlide();
});

nextBtn.addEventListener("click", () => {
  moveToNextSlide();
  resetAutoSlide();
});

// Swipe support
const container = document.querySelector(".carousel-container");

container.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

container.addEventListener("touchend", e => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const diff = startX - endX;
  if (diff > 50) {
    moveToNextSlide();
  } else if (diff < -50) {
    moveToPrevSlide();
  }
  resetAutoSlide();
}
