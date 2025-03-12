const videoWrappers = document.querySelectorAll(".video");
const videoCircle = document.querySelector(".play_circle");

const boxHover = document.querySelector(".box-hover");

videoWrappers.forEach((videoWrapper) => {
	const videoSrc = videoWrapper.querySelector("video");
	const videoIcon = videoWrapper.querySelector(".play_circle");

	videoSrc.addEventListener("mousemove", (e) => {
		videoSrc.classList.add("overlay");
		videoIcon.classList.add("circle_visible");

		boxHover.style.display = "inline";
		// the value 20 prevents the cursor from clashing
		// pageYOffset allows us to know how much scrolling as happened so we can add
		boxHover.style.top = `${e.clientY - 20 + window.pageYOffset}px`;
		boxHover.style.left = `${e.clientX}px`;
	});

	videoSrc.addEventListener("mouseout", () => {
		videoSrc.classList.remove("overlay");
		videoIcon.classList.remove("circle_visible");
		boxHover.style.display = "none";
	});
});
