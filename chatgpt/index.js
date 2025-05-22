const input = document.querySelector(".input");
const svgEl = document.querySelector(".icon.filled");

input.addEventListener("keydown", (e) => {
	const pattern = /\b[\w]\b|[\W]/; // Cool to learn regex, eh

	// Seems makeshift, but it works. Wonder how it works for prod-level code
	if (e.target.textContent.length === 0 && pattern.test(e.key)) {
		e.target.dataset.contains = "contains";
		svgEl.dataset.contains = "contains";
	} else if (e.target.textContent.length === 1 && e.key === "Backspace") {
		e.target.dataset.contains = "empty";
		svgEl.dataset.contains = "empty";
	}
});
