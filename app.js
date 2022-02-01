// PRELOADER

// var loader = document.getElementById("preloader");
// window.addEventListener("load", function () {
// 	loader.style.display = "none";
// });

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
// 	var currentScrollPos = window.pageYOffset;
// 	if (prevScrollpos > currentScrollPos) {
// 		document.getElementByClassName("navbar").style.top = "0";
// 	} else {
// 		document.getElementByClassName("navbar").style.top = "-90px";
// 	}
// 	prevScrollpos = currentScrollPos;
// };

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var lastScrollTop;
navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	//This line will get the location on scroll

	if (scrollTop > lastScrollTop) {
		//if it will be greater than the previous
		navbar.style.top = "-90px";
		//set the value to the negetive of height of navbar
	} else {
		navbar.style.top = "0";
	}
	lastScrollTop = scrollTop; //New Position Stored
});
