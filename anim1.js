gsap.registerPlugin(ScrollTrigger);

// <!-- LANDING ANIMATION-->

const tl1 = gsap.timeline();

tl1.from(".landing_hero_wrapper", {
  duration: 1,
  scale: 1.1,
  opacity: 0,
  ease: "power0.easeOut",
  // delay: 0.3,
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
  // scale: 0.9,
  // y: 50,
  ease: "power2.easeOut",
  delay: 0.5,
});

const tl3 = gsap.timeline();

tl3.from(".down_arrow", {
  duration: 1.5,
  opacity: 0,
  y: -30,
  repeat: 1000,
  // stagger: 0.2,
  ease: "back.out(1.7)",
});

// // <!-- ABOUT ANIMATION-->

// const tl4 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".about_section",
//     // markers: true,
//     start: "top center",
//   },
// });

// tl4
//   .from(".about_image", {
//     duration: 0.8,
//     opacity: 0,
//     // scale: 0.9,
//     // y: 50,
//     ease: "power2.easeOut",
//     // delay: 0.3,
//   });

const tl5 = gsap.timeline({
  defaults: {
    duration: 0.8,
    y: 25,
    opacity: 0,
    ease: "power2.easeOut",
  },
  scrollTrigger: {
    trigger: ".about_heading",
    // markers: true,
  },
});

tl5
  .from(".about_line1 ", {
    delay: 0.1,
  })
  .from(
    ".about_line2",
    {
      delay: 0.1,
    },
    "-=0.4"
  );

// .from(".single_words h2", {}, "-=1.5");

// // Service section Animation

const tl6 = gsap.timeline({
  defaults: {
    duration: 0.8,
    // opacity: 0,
    ease: "power2.easeOut",
  },
  scrollTrigger: {
    trigger: ".services .image_wrapper ",
    // markers: true,
  },
});

tl6
.from(".service_img   ", {
  scale: 1.1,
})

.from(".service_line1", { y: 10 , opacity: 0,})
  .from(".service_line2", { y: 10, opacity: 0, }, "-=0.4")
 
  
const tl7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".services_content .part1 ",
    // markers: true,
  },
});

tl7.from(".part1", {
  duration: 0.8,
  y: 10,

  opacity: 0,
  stagger: 0.05,
  ease: "power2.easeOut",
  delay: 0.3,
});

const tl8 = gsap.timeline({
  scrollTrigger: {
    trigger: ".services_content .part2 ",
    // markers: true,
  },
});

tl8.from(".part2", {
  duration: 0.8,
  y: 10,

  opacity: 0,
  stagger: 0.05,
  ease: "power2.easeOut",
  delay: 0.3,
});

const tl9 = gsap.timeline({
  scrollTrigger: {
    trigger: ".services_content .part3 ",
    // markers: true,
  },
});

tl9.from(".part3", {
  duration: 0.8,
  y: 10,
  opacity: 0,
  stagger: 0.05,
  ease: "power2.easeOut",
  delay: 0.3,
});

// const tl7 = gsap.timeline({
//   defaults: {
//     duration: 0.8,
//     x: -20,
//     opacity: 0,
//     stagger: 0.05,
//     ease: "power2.easeOut",
//   },
//   scrollTrigger: {
//     trigger: ".services_content",
//     // markers: true,
//   },
// });

// tl7.from(".part1", {}).from(".part2", {}).from(".part3", {});

// // Contact section Animation

const tl10 = gsap.timeline({
  defaults: {
    duration: 0.8,
    y: -10,
    opacity: 0,
    // stagger: 0.2,
    ease: "power2.easeOut",
  },
  scrollTrigger: {
    trigger: ".contact_content ",
    // markers: true,
  },
});

tl10
  .from(".contact_line1", {
    delay: 0.5,
  })
  .from(".contact_line2", {}, "-=0.4")
  .from(".contact_line3", {}, "-=0.4")
  .from(
    ".contact_w1",
    {
      y: 0,
    },
    "-=0.3"
  );

// // Social media icons animation

const tl11 = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact_footer",
    // markers: true,
  },
});

tl11.from(".icons a img", {
  // delay: 1,
  duration: 0.8,
  x: -10,
  stagger: 0.2,
  opacity: 0,
  ease: "power2.easeOut",
});

// Preloader animation

const tl12 = gsap.timeline({
  scrollTrigger: {
    trigger: ".center",
  },
});
tl12.from(".center img", {
  duration: 2,
  // y: -30,
  opacity: 0,
  ease: "power2.easeOut",
  repeat: 100,
});
