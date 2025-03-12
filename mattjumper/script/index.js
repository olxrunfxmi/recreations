const videoWrappers = document.querySelectorAll(".video");
const videoCircle = document.querySelector(".play_circle");

const boxHover = document.querySelector(".box-hover");

videoWrappers.forEach((videoWrapper) => {
	const mediaSrc = videoWrapper.querySelector(".media");
	const videoIcon = videoWrapper.querySelector(".play_circle");

	mediaSrc.addEventListener("mousemove", (e) => {
		mediaSrc.classList.add("overlay");
		videoIcon.classList.add("circle_visible");

		boxHover.style.display = "inline";
		// the value 20 prevents the cursor from clashing
		// pageYOffset allows us to know how much scrolling as happened so we can add
		boxHover.style.top = `${e.clientY - 20 + window.pageYOffset}px`;
		boxHover.style.left = `${e.clientX}px`;
	});

	mediaSrc.addEventListener("mouseout", () => {
		mediaSrc.classList.remove("overlay");
		videoIcon.classList.remove("circle_visible");
		boxHover.style.display = "none";
	});
});
