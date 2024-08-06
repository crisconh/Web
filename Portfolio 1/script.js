gsap.registerPlugin(ScrollTrigger);

window.onload = function () {
  var timeline = new TimelineMax();
  timeline
    .from(".hero-bg-txt", 1, { x: -300 }, 0)
    .from(".hero-fg", 1, { scale: 1.5 }, 0)
    .from(".brand-nav", 1, { opacity: 0 }, 0.5)
    .from(".nav-links", 1, { opacity: 0 }, 1);
};

gsap.to(".separator", {
  scrollTrigger: {
    trigger: ".separator",
    start: "300 bottom",
    toggleAction: "play none none none",
  },
  opacity: 1,
  duration: 2,
});
