const workBody = document.querySelector("body");
const imagesArr = document.querySelectorAll(".small_image");
const swiperWrap = document.querySelector(".swiper_container");
const closeBtn = document.querySelector(".swiper-close");

// console.log("imagesArr", imagesArr);
// console.log("workBody", workBody);

const imageClick = () => {
	workBody.classList.toggle("no-scroll");
	swiperWrap.classList.toggle("active");
	console.log("hello");
};

imagesArr.forEach((el, index) => {
	el.addEventListener("click", imageClick);
});

var swiper = new Swiper(".swiper_container", {
	spaceBetween: 30,
	effect: "fade",
	loop: true,
	speed: 400,
	spaceBetween: 100,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});




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

mySwiper.on("slideChange", function (e) {
	console.log("*** mySwiper.activeIndex", mySwiper.activeIndex);
});
