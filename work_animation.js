gsap.registerPlugin(ScrollTrigger);
const WorkAnimation = gsap.timeline();

// Work Landing section Animation

WorkAnimation.from(".landing_image", {
  duration: 0.8,
  scale: 1.05,
  opacity: 0,
}).from(".single_words h2", {
  duration: 1,
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
    ease: "power2.easeOut",
    delay: 0.3,
  })
  .from(
    ".line2",
    {
      duration: 1,
      opacity: 0,
      y: -20,
      ease: "power2.easeOut",
    },
    "-=0.5"
  );

const tl3 = gsap.timeline();

tl3.from(".down_arrow", {
  duration: 2,
  opacity: 0,
  y: -10,
  repeat: 1000,
  stagger: 0.2,
  ease: "back.out(1.7)",
});

// Project detail animation

// const tl4 = gsap.timeline({
//   defaults: {
//     duration: 0.5,
//     y: -20,
//     stagger: 0.2,
//     opacity: 0,
//     ease: "power2.easeOut",
//   },

//   scrollTrigger: {
//     trigger: ".project_details",
//     // markers: true,
//   },
// });

// tl4.from(".about_food", {
//   delay: 0.5,
// });

// .from(".year", {}, "-=0.2");
// .from(".tech", {}, "-=0.2")
// .from(".livesite", {}, "-=0.2")
// .from(".code", {}, "-=0.2");

// project images animation

const tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".work_images",
    // markers: true,
  },
});

ScrollTrigger.batch(".small_image", {
  onEnter: (batch) => {
    batch.forEach((small_image, index) =>
      gsap.from(small_image, {
        duration: 0.8,
        opacity: 0,
        // y: 0,
        scale: 0.9,
        stagger: 0.2,
        delay: index * 0.3,
        ease: "power2.out",
      })
    );
  },
  once: true,
});

// Next Project content animation

const tl6 = gsap.timeline({
  defaults: {
    duration: 0.5,
    x: -30,
    stagger: 0.2,
    opacity: 0,
    ease: "power2.easeOut",
  },

  scrollTrigger: {
    trigger: ".next",
    // markers: true,
  },
});

tl6.from("h4", {
  delay: 0.3,
});
tl6.from(".next_link", {}, "-=0.1");

// Social media icons animation

// const tl7 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".footer",
//     // markers: true,
//   },
// });

// tl7.from(".icons a img", {
//   duration: 0.8,
//   x: -10,
//   stagger: 0.2,
//   opacity: 0,
//   ease: "power2.easeOut",
// });
