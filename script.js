const navLinks = document.querySelectorAll(".main-nav a, .footer-nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("active"));
    const target = link.getAttribute("href");

    document
      .querySelectorAll(`.main-nav a[href="${target}"], .footer-nav a[href="${target}"]`)
      .forEach((item) => item.classList.add("active"));
  });
});

const dots = document.querySelectorAll(".slider-dots .dot");
const testimonialSlider = document.querySelector(".testimonial-slider");
const testimonialTrack = document.querySelector(".testimonial-track");
const testimonialCards = document.querySelectorAll(".testimonial-card");
const prevArrow = document.querySelector(".testimonial-arrow.prev");
const nextArrow = document.querySelector(".testimonial-arrow.next");
let activeSlide = 0;
let autoSlideId = null;
let isDragging = false;
let startX = 0;
let currentTranslate = 0;
let previousTranslate = 0;
let visibleCards = 3;
let maxSlideIndex = Math.max(0, testimonialCards.length - visibleCards);

const getVisibleCards = () => {
  if (window.innerWidth <= 760) {
    return 1;
  }

  if (window.innerWidth <= 1100) {
    return 2;
  }

  return 3;
};

const clampSlideIndex = (index) => {
  if (index < 0) {
    return maxSlideIndex;
  }

  if (index > maxSlideIndex) {
    return 0;
  }

  return index;
};

const updateDots = () => {
  dots.forEach((item, itemIndex) => {
    const shouldShow = itemIndex <= maxSlideIndex;
    item.hidden = !shouldShow;
    item.classList.toggle("active", shouldShow && itemIndex === activeSlide);
  });
};

const updateTrackPosition = (translateValue) => {
  if (testimonialTrack) {
    testimonialTrack.style.transform = `translateX(${translateValue}px)`;
  }
};

const getStepSize = () => {
  if (!testimonialCards.length) {
    return 0;
  }

  const cardWidth = testimonialCards[0].getBoundingClientRect().width;
  const trackStyle = window.getComputedStyle(testimonialTrack);
  const gap = Number.parseFloat(trackStyle.columnGap || trackStyle.gap || "0");
  return cardWidth + gap;
};

const setActiveSlide = (index) => {
  activeSlide = clampSlideIndex(index);
  previousTranslate = activeSlide * -getStepSize();
  currentTranslate = previousTranslate;
  updateDots();
  updateTrackPosition(currentTranslate);
};

const goToPrevSlide = () => {
  setActiveSlide(activeSlide - 1);
  startAutoSlide();
};

const goToNextSlide = () => {
  setActiveSlide(activeSlide + 1);
  startAutoSlide();
};

const startAutoSlide = () => {
  if (!testimonialSlider || maxSlideIndex < 1) {
    return;
  }

  clearInterval(autoSlideId);
  autoSlideId = window.setInterval(() => {
    goToNextSlide();
  }, 3000);
};

const stopAutoSlide = () => {
  clearInterval(autoSlideId);
};

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    setActiveSlide(index);
    startAutoSlide();
  });
});

prevArrow?.addEventListener("click", () => {
  goToPrevSlide();
});

nextArrow?.addEventListener("click", () => {
  goToNextSlide();
});

if (testimonialSlider && testimonialTrack) {
  const pointerDown = (event) => {
    event.preventDefault();
    isDragging = true;
    startX = event.clientX;
    testimonialSlider.classList.add("dragging");
    stopAutoSlide();
    testimonialSlider.setPointerCapture(event.pointerId);
  };

  const pointerMove = (event) => {
    if (!isDragging) {
      return;
    }

    event.preventDefault();
    const deltaX = event.clientX - startX;
    currentTranslate = previousTranslate + deltaX;
    updateTrackPosition(currentTranslate);
  };

  const pointerUp = (event) => {
    if (!isDragging) {
      return;
    }

    isDragging = false;
    testimonialSlider.classList.remove("dragging");
    testimonialSlider.releasePointerCapture(event.pointerId);

    const movedBy = currentTranslate - previousTranslate;
    const threshold = Math.max(getStepSize() * 0.18, 36);

    if (movedBy < -threshold) {
      setActiveSlide(activeSlide + 1);
    } else if (movedBy > threshold) {
      setActiveSlide(activeSlide - 1);
    } else {
      setActiveSlide(activeSlide);
    }

    startAutoSlide();
  };

  testimonialSlider.addEventListener("pointerdown", pointerDown);
  testimonialSlider.addEventListener("pointermove", pointerMove);
  testimonialSlider.addEventListener("pointerup", pointerUp);
  testimonialSlider.addEventListener("pointercancel", pointerUp);
  testimonialSlider.addEventListener("mouseleave", () => {
    if (!isDragging) {
      return;
    }

    setActiveSlide(activeSlide);
    isDragging = false;
    testimonialSlider.classList.remove("dragging");
    startAutoSlide();
  });
  testimonialSlider.addEventListener("mouseenter", stopAutoSlide);
  testimonialSlider.addEventListener("mouseleave", startAutoSlide);
}

const syncSliderLayout = () => {
  visibleCards = getVisibleCards();
  maxSlideIndex = Math.max(0, testimonialCards.length - visibleCards);
  setActiveSlide(Math.min(activeSlide, maxSlideIndex));
};

window.addEventListener("resize", syncSliderLayout);

syncSliderLayout();
setActiveSlide(0);
startAutoSlide();
