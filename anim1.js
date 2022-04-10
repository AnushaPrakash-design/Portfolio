const landingAnimation = gsap.timeline();

landingAnimation
	.from(".single_words", {
		duration: 0.5,
		opacity: 0,
		x: -30,
		stagger: 0.6,
		ease: "power2.easeInOut",
	})
	.from(
		".main_heading",
		{
			duration: 1,
			opacity: 0,
			y: -50,
			ease: "power2.easeInOut",

			// stagger: 0.6,
		},
		"-=2.2"
	);
