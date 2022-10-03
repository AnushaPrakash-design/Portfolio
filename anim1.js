gsap.registerPlugin(ScrollTrigger);
const landingAnimation = gsap.timeline();

// Landing section Animation

landingAnimation.from(".landing_image", {
  duration: 0.8,
  scale: 1.05,
  opacity: 0,
});

const tl2 = gsap.timeline();

tl2.from(".line2", {
  duration: 0.8,
  opacity: 0,
  x: -50,
  ease: "power1.easeOut",
});

const tl3 = gsap.timeline();

tl3.from(".down_arrow", {
  duration: 1.5,
  opacity: 0,
  y: -20,
  repeat: 1000,
  stagger: 0.2,
  ease: "back.out(1.7)",
});

// About section Animation
