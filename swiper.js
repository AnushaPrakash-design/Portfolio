const workBody = document.querySelector("body");
const imagesArr = document.querySelectorAll(".small_image");
const swiperWrap = document.querySelector(".swiper_container");
const closeBtn = document.querySelector(".swiper-close");

// console.log("imagesArr", imagesArr);
// console.log("workBody", workBody);

var mySwiper = new Swiper(".swiper_container", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  speed: 400,
  grabCursor: true,
  spaceBetween: 100,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

const imageClick = (index) => {
  workBody.classList.toggle("no-scroll");
  swiperWrap.classList.toggle("active");
  console.log(index);

  mySwiper.activeIndex = index + 1;
  mySwiper.update();
  // console.log("mySwiper.activeIndex", mySwiper.activeIndex)
};

imagesArr.forEach((el, index) => {
  el.addEventListener(
    "click",
    function () {
      imageClick(index);
    },
    false
  );
});

mySwiper.on("slideChange", function (e) {
  console.log("mySwiper.activeIndex", mySwiper.activeIndex);
});

// const imageClick
// swiper.activeIndex();

const closeClick = () => {
  workBody.classList.remove("no-scroll");
  swiperWrap.classList.remove("active");
};
closeBtn.addEventListener("click", closeClick);

// const updateImage = () => {
// 	swiperWrap.updateSlides();
// };
// imagesArr.forEach((el, index) => {
// 	el.addEventListener("click", updateImage);
// });

// imagesArr.on("slideChange", function (e) {
// 	console.log("imagesArr.activeIndex", imagesArr.activeIndex);
// });
