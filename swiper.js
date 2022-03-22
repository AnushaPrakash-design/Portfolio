const workBody = document.querySelector("body");
const imagesArr = document.querySelectorAll(".small_image");
const swiperWrap = document.querySelector(".swiper_container");
const close = document.querySelector(".swiper-close");

console.log("imagesArr", imagesArr);

const imageClick = () => {
	imagesArr.classList.toggle(".swiper_container");
	imagesArr.addEventListner("click", imageClick);
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
	close.classList.remove(".swiper_container");
	close.addEventListner("click", closeClick);
};

// close.addEventListner("click", () => {
// 	close.classList.remove(".swiper_container");
// });
