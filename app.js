// PRELOADER

// var loader = document.getElementById("preloader");
// window.addEventListener("load", function () {
// 	loader.style.display = "none";
// });

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var lastScrollTop;
navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	//This line will get the location on scroll

	if (scrollTop > lastScrollTop) {
		//if it will be greater than the previous
		navbar.style.top = "-100px";
		//set the value to the negetive of height of navbar
	} else {
		navbar.style.top = "0";
	}
	lastScrollTop = scrollTop; //New Position Stored
});

// window.onscroll = function () {
// 	scrollFunction();
// };

// function scrollFunction() {
// 	if (
// 		document.body.scrollTop > 80 ||
// 		document.documentElement.scrollTop > 80
// 	) {
// 		document.getElementById("navbar").style.padding = "4vh 8vw 2.4vh  ";
// 	} else {
// 		document.getElementById("navbar").style.padding = "4.92vh 8vw 2.4vh";
// 	}
// var mq = window.matchMedia("(min-width: 768px)");
// if (mq.matches) {
// 	document.getElementById("navbar").style.padding = "5vh 5.5vw 2.5vh  ";
// } else {
// 	document.getElementById("navbar").style.padding = "5vh 5.5vw 2.5vh";
// }

// document.documentElement?.clientHeight || window.innerHeight

// const vH = document.documentElement?.clientHeight || window.innerHeight;
// const landingSection = document.querySelector(".landing");
// console.log(vH);
// // landingSection.style.height = vH * 0.5;
// landingSection.css

// window.addEventListener("resize", function (event) {
// 	// landingSection.style("height", vH + px);
// 	console.log(vH);
// 	console.log(landingSection);

// });

// landing page- 100vh

const landSection = document.querySelector(".landing");

const measureHeight = () => {
	return document.documentElement?.clientHeight || window.innerHeight;
};

const setHeight = (val) => {
	landSection.style.height = val + "px";
};

console.log(measureHeight());

// First time load
let vH = measureHeight();
setHeight(vH);

// On every resize
window.addEventListener("resize", () => {
	vH = measureHeight();
	setHeight(vH);
	// console.log(measureHeight());
});
