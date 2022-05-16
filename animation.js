gsap.registerPlugin(ScrollTrigger);

const projTitles = document.querySelectorAll(".main_text");
const projContainers = document.querySelectorAll(".project_item");
console.log(projTitles);

let viewHeight = document.getElementById("food_section").clientHeight;
console.log(viewHeight);

window.addEventListener("resize", () => {
  viewHeight = document.getElementById("food_section").clientHeight;
  console.log(viewHeight);
  gsap.killTweensOf(".main_text");
  setAnim();
});

const setAnim = () => {
  projTitles.forEach((item, idx) => {
    const itemHalfHeight = item.clientHeight / 2;
    let moveByY;
    if (idx == 0) {
      moveByY = viewHeight * 0.5 + itemHalfHeight;
      gsap.set(item, {
        y: 0,
      });
      gsap.to(item, {
        y: moveByY,
        ease: "linear",
        //   stagger: 0.5,
        scrollTrigger: {
          trigger: projContainers[idx],
          start: "center center",
          end: `+=${viewHeight * 0.5 + itemHalfHeight}`,
          scrub: 0,
          pin: false,
          // markers: true,
        },
      });
    } else {
      let startVal, endVal;

      startVal = `top-=${itemHalfHeight * 2} center`;
      if (idx == projTitles.length - 1) {
        moveByY = 0;
        endVal = `+=${viewHeight * 0.5 + itemHalfHeight}`;
      } else {
        startVal = `top-=${itemHalfHeight * 1} center`;
        moveByY = viewHeight * 0.5 + itemHalfHeight * 2;
        endVal = `+=${viewHeight + itemHalfHeight * 2}`;
      }
      gsap.set(item, {
        y: -(viewHeight * 0.5 + itemHalfHeight * 1),
      });
      gsap.to(item, {
        y: moveByY,
        ease: "linear",
        //   stagger: 0.5,
        scrollTrigger: {
          trigger: projContainers[idx],
          start: startVal,
          end: endVal,
          scrub: 0,
          pin: false,
          // markers: true,
        },
      });
    }
  });
};
setAnim();
