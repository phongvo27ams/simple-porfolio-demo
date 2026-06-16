import { renderApp } from "../../components/app.js";
import { defaultLanguage } from "../../data/site-data.js";

const appRoot = document.querySelector("#app");
let currentLanguage = defaultLanguage;

const initApp = () => {
  if (!appRoot) {
    return;
  }

  appRoot.innerHTML = renderApp(currentLanguage);

  const navLinks = document.querySelectorAll(".main-nav a, .footer-nav a");
  const allNavLinks = document.querySelectorAll(".main-nav a, .footer-nav a, .mobile-nav a");
  const siteHeader = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const languageToggles = document.querySelectorAll("[data-language-toggle]");
  const trackedSections = document.querySelectorAll("main section[id], .site-footer [id]");
  const statNumbers = document.querySelectorAll(".stat-number");
  const dots = document.querySelectorAll(".slider-dots .dot");
  const testimonialSlider = document.querySelector(".testimonial-slider");
  const testimonialTrack = document.querySelector(".testimonial-track");
  const testimonialCards = document.querySelectorAll(".testimonial-card");
  const prevArrow = document.querySelector(".testimonial-arrow.prev");
  const nextArrow = document.querySelector(".testimonial-arrow.next");

  let isManualNavSelection = false;
  let manualNavTimeoutId = null;
  let activeSlide = 0;
  let autoSlideId = null;
  let isDragging = false;
  let startX = 0;
  let currentTranslate = 0;
  let previousTranslate = 0;
  let visibleCards = 3;
  let maxSlideIndex = Math.max(0, testimonialCards.length - visibleCards);

  const closeMobileMenu = () => {
    if (!mobileMenu || !menuToggle) {
      return;
    }

    mobileMenu.hidden = true;
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  const openMobileMenu = () => {
    if (!mobileMenu || !menuToggle) {
      return;
    }

    mobileMenu.hidden = false;
    document.body.classList.add("menu-open");
    menuToggle.setAttribute("aria-expanded", "true");
  };

  const syncHeaderState = () => {
    if (siteHeader) {
      siteHeader.classList.toggle("is-scrolled", window.scrollY > 18);
    }
  };

  const setActiveNavLink = (targetId) => {
    const targetHref = `#${targetId}`;
    allNavLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === targetHref);
    });
  };

  const syncActiveNavByScroll = () => {
    if (isManualNavSelection || !trackedSections.length) {
      return;
    }

    const headerOffset = siteHeader?.offsetHeight ?? 0;
    const triggerLine = headerOffset + 120;
    let currentSectionId = trackedSections[0].id;

    trackedSections.forEach((section) => {
      if (section.getBoundingClientRect().top <= triggerLine) {
        currentSectionId = section.id;
      }
    });

    setActiveNavLink(currentSectionId);
  };

  const animateStatNumber = (element) => {
    const target = Number.parseInt(element.dataset.target || "0", 10);
    if (!target || element.dataset.animating === "true") {
      return;
    }

    element.dataset.animating = "true";
    const duration = 1400;
    const startTime = performance.now();
    const suffix = target >= 100 ? "+" : "";

    const step = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = 1 - (1 - progress) * (1 - progress);
      element.textContent = `${Math.round(target * eased)}${suffix}`;

      if (progress < 1) {
        window.requestAnimationFrame(step);
        return;
      }

      element.textContent = `${target}${suffix}`;
      element.dataset.animating = "false";
    };

    window.requestAnimationFrame(step);
  };

  const getVisibleCards = () => {
    if (window.innerWidth <= 760) return 1;
    if (window.innerWidth <= 1100) return 2;
    return 3;
  };

  const clampSlideIndex = (index) => {
    if (index < 0) return maxSlideIndex;
    if (index > maxSlideIndex) return 0;
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
    if (!testimonialCards.length || !testimonialTrack) {
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

  const startAutoSlide = () => {
    if (!testimonialSlider || maxSlideIndex < 1) {
      return;
    }

    window.clearInterval(autoSlideId);
    autoSlideId = window.setInterval(() => {
      setActiveSlide(activeSlide + 1);
    }, 3000);
  };

  const stopAutoSlide = () => {
    window.clearInterval(autoSlideId);
  };

  const goToPrevSlide = () => {
    setActiveSlide(activeSlide - 1);
    startAutoSlide();
  };

  const goToNextSlide = () => {
    setActiveSlide(activeSlide + 1);
    startAutoSlide();
  };

  menuToggle?.addEventListener("click", () => {
    if (mobileMenu?.hidden) {
      openMobileMenu();
    } else {
      closeMobileMenu();
    }
  });

  languageToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const nextLanguage = toggle.getAttribute("data-language-toggle");
      if (!nextLanguage || nextLanguage === currentLanguage) {
        return;
      }

      currentLanguage = nextLanguage;
      document.body.classList.remove("menu-open");
      initApp();
    });
  });

  allNavLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = link.getAttribute("href");
      const targetSection = target ? document.querySelector(target) : null;

      if (targetSection) {
        event.preventDefault();
        const headerOffset = (siteHeader?.offsetHeight ?? 0) + 18;
        const targetTop = targetSection.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top: Math.max(targetTop, 0), behavior: "smooth" });
      }

      document
        .querySelectorAll(`.main-nav a[href="${target}"], .footer-nav a[href="${target}"], .mobile-nav a[href="${target}"]`)
        .forEach((item) => item.classList.add("active"));

      allNavLinks.forEach((item) => {
        if (item.getAttribute("href") !== target) {
          item.classList.remove("active");
        }
      });

      closeMobileMenu();

      isManualNavSelection = true;
      window.clearTimeout(manualNavTimeoutId);
      manualNavTimeoutId = window.setTimeout(() => {
        isManualNavSelection = false;
        syncActiveNavByScroll();
      }, 700);
    });
  });

  if (statNumbers.length) {
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateStatNumber(entry.target);
            return;
          }

          if (entry.target.dataset.animating === "true") {
            return;
          }

          const target = Number.parseInt(entry.target.dataset.target || "0", 10);
          const suffix = target >= 100 ? "+" : "";
          entry.target.textContent = `0${suffix}`;
        });
      },
      { threshold: 0.45 }
    );

    statNumbers.forEach((stat) => statsObserver.observe(stat));
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      setActiveSlide(index);
      startAutoSlide();
    });
  });

  prevArrow?.addEventListener("click", goToPrevSlide);
  nextArrow?.addEventListener("click", goToNextSlide);

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
      currentTranslate = previousTranslate + (event.clientX - startX);
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
        startAutoSlide();
        return;
      }

      setActiveSlide(activeSlide);
      isDragging = false;
      testimonialSlider.classList.remove("dragging");
      startAutoSlide();
    });
    testimonialSlider.addEventListener("mouseenter", stopAutoSlide);
  }

  const syncSliderLayout = () => {
    visibleCards = getVisibleCards();
    maxSlideIndex = Math.max(0, testimonialCards.length - visibleCards);
    setActiveSlide(Math.min(activeSlide, maxSlideIndex));
  };

  window.onresize = () => {
    syncSliderLayout();
    if (window.innerWidth > 760) {
      closeMobileMenu();
    }
  };
  window.onscroll = () => {
    syncHeaderState();
    syncActiveNavByScroll();
  };

  syncHeaderState();
  syncActiveNavByScroll();
  syncSliderLayout();
  setActiveSlide(0);
  startAutoSlide();
};

initApp();
