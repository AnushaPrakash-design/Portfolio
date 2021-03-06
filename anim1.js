gsap.registerPlugin(ScrollTrigger);
const landingAnimation = gsap.timeline();

// Landing section Animation

landingAnimation
  .from(".landing_image", {
    duration: 0.8,
    scale: 1.05,
    opacity: 0,
  })
  .from(".single_words h2", {
    duration: 2,
    opacity: 0,
    // x: -30,
    stagger: 0.2,
    ease: "power2.easeOut",
  });

const tl2 = gsap.timeline();

tl2
  .from(".line1", {
    duration: 0.8,
    opacity: 0,
    y: -20,
    ease: "power1.easeOut",
    delay: 0.3,
  })
  .from(
    ".line2",
    {
      duration: 0.8,
      opacity: 0,
      y: -20,
      ease: "power1.easeOut",
    },
    "-=0.5"
  );

// About section Animation
const aboutSection = document.querySelector(".about_section");
// const aboutAnimation = gsap.timeline({
//   ScrollTrigger: {
//     trigger: ".about_section",
//     start: " bottom center",
//     markers: true,
//   },
// });

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".about_section",
    start: " center center",
    // markers: true,
  },
});
