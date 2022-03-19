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
