function init() {
  // SECTION: banner
  const bannerContentContainer = document.querySelector(".desktop-banner").querySelector(".content-container");
  const mm = gsap.matchMedia();
  mm.add("(min-width: 767px)", () => {
    const tlBanner = gsap.timeline({});
    tlBanner.from(".letter-fadeInUp", { y: "0.75rem", autoAlpha: 0, duration: 0.6, stagger: 0.1 });
    tlBanner.from(".dot-fadeIn", { autoAlpha: 0, duration: 0.4, stagger: 0.12 }, "<+=0.1");
    tlBanner.from(bannerContentContainer, { autoAlpha: 0, duration: 0.4 }, ">-=0.25");
    tlBanner.from(bannerContentContainer, {
      clipPath: "circle(1.2% at 57.125% 37%)",
      duration: 1.2,
      ease: "power2.inOut",
    });
    tlBanner.from(".heading-banner-word", { autoAlpha: 0, y: "1.25rem", duration: 0.6, stagger: 0.06 });
  });

  // SECTION: section 2
  mm.add("(min-width: 767px)", () => {
    const tlSection2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-khoi-nguon-tu-tinh-bang-huu",
        toggleActions: "play pause play none",
        start: "top top+=40%",
        end: "bottom top",
      },
    });
    tlSection2.from(".section-khoi-nguon-tu-tinh-bang-huu .section-deco-1", {
      scale: 1.12,
      autoAlpha: 0,
      y: "4rem",
      duration: 0.8,
      ease: "power1.inOut",
    });
    tlSection2.from(
      ".section-khoi-nguon-tu-tinh-bang-huu .section-deco-5",
      {
        scale: 0.6,
        autoAlpha: 0,
        duration: 0.8,
        y: "-2rem",
        ease: "power1.inOut",
      },
      "<"
    );
    tlSection2.from(
      ".section-khoi-nguon-tu-tinh-bang-huu .section-deco-6",
      {
        scale: 0.6,
        autoAlpha: 0,
        duration: 0.8,
        y: "2rem",
        ease: "power1.inOut",
      },
      "<"
    );
    tlSection2.from(
      ".section-khoi-nguon-tu-tinh-bang-huu .section-deco-7",
      {
        scale: 0.6,
        autoAlpha: 0,
        duration: 0.8,
        x: "-2rem",
        ease: "power1.inOut",
      },
      "<"
    );
    tlSection2.from(
      ".section-khoi-nguon-tu-tinh-bang-huu .content-container",
      {
        y: "6rem",
        autoAlpha: 0,
        duration: 0.8,
        ease: "power1.inOut",
      },
      "<"
    );
  });

  kKao4RoundDecoScaleButton(".primary-btn", ".btn-round-deco");

  // SECTION: section 3
  mm.add("(min-width: 767px)", () => {
    gsap.from(".section-tam-nhin h4", {
      autoAlpha: 0,
      y: "2rem",
      duration: 0.8,
      scrollTrigger: {
        trigger: ".section-tam-nhin .heading-container",
        start: "top top+=80%",
        end: "bottom top",
        toggleActions: "play pause play none",
      },
    });
    gsap.from(".section-tam-nhin .heading-line", {
      autoAlpha: 0,
      y: "2rem",
      duration: 0.8,
      stagger: 0.12,
      scrollTrigger: {
        trigger: ".section-tam-nhin .heading-container",
        start: "top top+=80%",
        end: "bottom top",
        toggleActions: "play pause play none",
      },
    });
  });

  // SECTION: section 4
  mm.add("(min-width: 767px)", () => {
    gsap.from(".section-su-menh-desktop h4", {
      autoAlpha: 0,
      y: "2rem",
      duration: 0.8,
      scrollTrigger: {
        trigger: ".section-su-menh-desktop .heading-container",
        start: "top top+=80%",
        end: "bottom top",
        toggleActions: "play pause play none",
      },
    });
    gsap.from(".section-su-menh-desktop h2 > .heading-line", {
      autoAlpha: 0,
      y: "2rem",
      duration: 0.8,
      stagger: 0.12,
      scrollTrigger: {
        trigger: ".section-su-menh-desktop .heading-container",
        start: "top top+=80%",
        end: "bottom top",
        toggleActions: "play pause play none",
      },
    });
    const rightCol = document.querySelector(".section-su-menh-desktop .sticky-container .right-col");
    const endDistance = (parseFloat(window.getComputedStyle(rightCol).paddingTop) + 6.5) * 2;
    gsap.to(".section-su-menh-desktop .sticky-container .left-col p", {
      scrollTrigger: {
        trigger: ".section-su-menh-desktop .sticky-container .left-col",
        endTrigger: ".section-su-menh-desktop .sticky-container .left-col",
        start: "top top",
        end: `bottom+=${endDistance}px bottom`,
        pin: true,
        anticipatePin: 1,
      },
    });
    const leftColPinSpacer = document.querySelector(".section-su-menh-desktop .sticky-container .pin-spacer");
    window.addEventListener("load", () => {
      leftColPinSpacer.style.flexBasis = "15rem";
    });
    gsap.to(".section-su-menh-desktop .sticky-container .right-col .image-container", {
      scrollTrigger: {
        trigger: ".section-su-menh-desktop .sticky-container .right-col",
        endTrigger: ".section-su-menh-desktop .sticky-container .right-col",
        start: "top top",
        end: `bottom+=${endDistance}px bottom`,
        pin: true,
        anticipatePin: 1,
      },
    });
  });

  window.addEventListener("scroll", () => {
    if (window.innerWidth >= 767) {
      const activeItemsText = document.querySelector(".section-su-menh-desktop .active-item-index-text");
      const totalItemsText = document.querySelector(".section-su-menh-desktop .total-item-text");
      const items = document.querySelectorAll(".section-su-menh-desktop .sticky-container .mid-col .item");
      const imageItems = document.querySelectorAll(".section-su-menh-desktop .sticky-container .right-col img");
      totalItemsText.textContent = kKao4FormatNumber(imageItems.length);
      for (let i = 0; i < items.length; i++) {
        const rect = items[i].getBoundingClientRect();
        if (rect.top > 0) {
          items.forEach((item, i) => {
            item.style.opacity = 0.6;
            imageItems[i].style.opacity = 0;
            imageItems[i].style.pointerEvents = "none";
          });
          items[i].style.opacity = 1;
          imageItems[i].style.opacity = 1;
          imageItems[i].style.pointerEvents = "all";
          activeItemsText.textContent = kKao4FormatNumber(Math.max(Math.min(i + 1, items.length), 0));
          break;
        }
      }
    }
  });

  if (window.innerWidth < 767) {
    const items = document.querySelectorAll(".section-su-menh-mobile .item");
    const totalItems = kKao4FormatNumber(items.length);
    items.forEach((item, i) => {
      indexContainer = item.querySelector(".index-container");
      item.querySelector(".index-item").textContent = kKao4FormatNumber(i + 1);
      item.querySelector(".total-item").textContent = totalItems;
    });
  }

  // SECTION: section 5
  if (window.innerWidth > 767) {
    const swiperLinhVucDauTu = new Swiper(".section-linh-vuc-dau-tu-desktop .swiper-linh-vuc-dau-tu", {
      speed: 800,
      effect: "fade",
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
    const drawSVGArray = ["40%", "54%", "68%", "83%", "100%"];
    gsap.set(".swiper-progress-bar-path", { drawSVG: drawSVGArray[0], autoAlpha: 1 });
    const slideContents = document.querySelectorAll(".section-linh-vuc-dau-tu-desktop .slide-content");
    const paginationButtons = document.querySelectorAll(".section-linh-vuc-dau-tu-desktop .pagination-btn");
    swiperLinhVucDauTu.on("realIndexChange", () => {
      slideContents.forEach((slideContent, i) => {
        slideContent.style.opacity = 0;
        slideContent.style.pointerEvents = "none";
        paginationButtons[i].classList.remove("pagination-btn-active");
      });
      slideContents[swiperLinhVucDauTu.realIndex].style.opacity = 1;
      slideContents[swiperLinhVucDauTu.realIndex].style.pointerEvents = "all";
      paginationButtons[swiperLinhVucDauTu.realIndex].classList.add("pagination-btn-active");
      gsap.to(".swiper-progress-bar-path", { drawSVG: drawSVGArray[swiperLinhVucDauTu.realIndex], duration: 0.8 });
    });
    paginationButtons.forEach((paginationButton, i) => {
      paginationButton.addEventListener("click", () => {
        swiperLinhVucDauTu.slideTo(i, 800);
      });
    });
  } else {
    const swiperLinhVucDauTu = new Swiper(".section-linh-vuc-dau-tu-mobile .swiper-linh-vuc-dau-tu", {
      speed: 800,
      effect: "fade",
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
    const slideContents = document.querySelectorAll(".section-linh-vuc-dau-tu-mobile .slide-content");
    const paginationButtons = document.querySelectorAll(".section-linh-vuc-dau-tu-mobile .pagination-btn");
    swiperLinhVucDauTu.on("realIndexChange", () => {
      slideContents.forEach((slideContent, i) => {
        slideContent.style.opacity = 0;
        slideContent.style.pointerEvents = "none";
        paginationButtons[i].classList.remove("pagination-btn-active");
      });
      slideContents[swiperLinhVucDauTu.realIndex].style.opacity = 1;
      slideContents[swiperLinhVucDauTu.realIndex].style.pointerEvents = "all";
      paginationButtons[swiperLinhVucDauTu.realIndex].classList.add("pagination-btn-active");
    });
    paginationButtons.forEach((paginationButton, i) => {
      paginationButton.addEventListener("click", () => {
        swiperLinhVucDauTu.slideTo(i, 800);
      });
    });
  }

  // SECTION: section 6
  mm.add("(min-width: 767px)", () => {
    gsap.to(".section-dau-an .content-container", {
      scrollTrigger: {
        trigger: ".section-dau-an .content-container",
        endTrigger: ".section-dau-an",
        start: "top top",
        end: "bottom bottom",
        pin: true,
        anticipatePin: 1,
        markers: true,
      },
    });
  });

}

window.addEventListener("DOMContentLoaded", init);
