gsap.registerPlugin(ScrollTrigger);
const landingAnimation = gsap.timeline();

// Landing section Animation

landingAnimation.from(".landing_image", {
  duration: 0.8,
  scale: 1.05,
  opacity: 0,
  ease: "power2.easeOut",
});

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".main_landing",
    // markers: true,
  },
});

tl2.from(".landing_line2", {
  duration: 1.5,
  opacity: 0,
  scale: 0.95,
  // x: -50,
  ease: "power2.easeOut",
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

const tl4 = gsap.timeline({
  defaults: {
    duration: 0.8,
    y: -20,
    // stagger: 0.2,
    opacity: 0,
    ease: "power2.easeOut",
  },
  scrollTrigger: {
    trigger: ".about_heading",
    // markers: true,
  },
});

tl4
  .from(".about_line1 ", {
    delay: 0.2,
  })
  .from(".about_line2", {});
// .from(".single_words h2", {}, "-=1.5");

// Service section Animation

const tl5 = gsap.timeline({
  defaults: {
    duration: 0.8,
    opacity: 0,
    ease: "power2.easeOut",
  },
  scrollTrigger: {
    trigger: ".services .image_wrapper ",
    // markers: true,
  },
});

tl5
  .from(".service_img img", {
    scale: 0.9,
  })
  .from(".service_line1", { y: -20 })
  .from(".service_line2", { y: -20 });

const tl6 = gsap.timeline({
  defaults: {
    duration: 0.8,
    x: -20,
    opacity: 0,
    stagger: 0.05,
    ease: "power2.easeOut",
  },
  scrollTrigger: {
    trigger: ".services_content",
    // markers: true,
  },
});

tl6.from(".part1", {}).from(".part2", {}).from(".part3", {});

// Contact section Animation

const tl7 = gsap.timeline({
  defaults: {
    duration: 0.8,
    y: -20,
    opacity: 0,
    // stagger: 0.2,
    ease: "power2.easeOut",
  },
  scrollTrigger: {
    trigger: ".contact_content ",
    // markers: true,
  },
});

tl7
  .from(".contact_line1", {
    delay: 0.5,
  })
  .from(".contact_line2", {}, "-=0.2")
  .from(".contact_line3", {}, "-=0.2");

// Social media icons animation

const tl8 = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact_footer",
    // markers: true,
  },
});

tl8.from(".icons a img", {
  // delay: 1,
  duration: 0.8,
  x: -10,
  stagger: 0.2,
  opacity: 0,
  ease: "power2.easeOut",
});
