// PRELOADER

var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
	loader.style.display = "none";
	// setTimeout(function () {
	// 	preloader(secs + 1);
	// }, 3000);
	window.onload = function () {
		setInterval(function () {
			alert("Hello");
		}, 10000);
	};
});

// When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let lastScrollTop;
const navbar = document.getElementById("navbar");

const navHeight = navbar.getBoundingClientRect().height;
console.log(navHeight);

window.addEventListener("scroll", function () {
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	//This line will get the location on scroll

	if (scrollTop > lastScrollTop) {
		//if it will be greater than the previous
		navbar.style.top = "-" + navHeight + "px";
		//set the value to the negetive of height of navbar
	} else {
		navbar.style.top = "0";
	}
	lastScrollTop = scrollTop; //New Position Stored
});

// hamburger menu

const bodyDom = document.querySelector("body");
const hamburger = document.querySelector(".hamburger_open");
const navMenu = document.querySelector(".hamburger_container");

const handleHamClick = () => {
	bodyDom.classList.toggle("no-scroll");
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
	console.log("hello");
};
hamburger.addEventListener("click", handleHamClick);

document.querySelectorAll(".nav_links").forEach((n) =>
	n.addEventListener("click", () => {
		bodyDom.classList.remove("no-scroll");
		hamburger.classList.remove("active");
		navMenu.classList.remove("active");
	})
);

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
