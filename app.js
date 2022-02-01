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
