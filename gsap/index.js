function init() {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

  ScrollSmoother.create({
    smooth: 0.8,
    effects: true,
  });
}

window.addEventListener("DOMContentLoaded", init);
