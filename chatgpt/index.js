const input = document.querySelector(".input");
const svgEl = document.querySelector(".icon.filled");
const toggleBarEls = document.querySelectorAll(".toggle-menu");
const sideBarEl = document.querySelector(".side-bar");
const actionViewEl = sideBarEl.nextElementSibling;
const mobileMenuEls = document.querySelectorAll(".menu");
const dropdownButtonEls = document.querySelectorAll("#model-type");

input.addEventListener("keydown", (e) => {
	const pattern = /\b[\w]\b|[\W]/; // Lovely that I learned regex, eh

	// Seems makeshift, but it works. Wonder how it works for prod-level code
	if (e.target.textContent.length === 0 && pattern.test(e.key)) {
		e.target.dataset.contains = "contains";
		svgEl.dataset.contains = "contains";
	} else if (e.target.textContent.length === 1 && e.key === "Backspace") {
		e.target.dataset.contains = "empty";
		svgEl.dataset.contains = "empty";
	}
});

toggleBarEls.forEach((toggleBarEl) => {
	toggleBarEl.addEventListener("click", (e) => {
		sideBarEl.dataset.state =
			sideBarEl.dataset.state === "out-of-view" ? "visible" : "out-of-view";
		actionViewEl.dataset.state =
			actionViewEl.dataset.state === "full-view" ? "half-view" : "full-view";
	});
});

mobileMenuEls.forEach((mobileMenuEl) => {
	mobileMenuEl.addEventListener("click", () => {
		sideBarEl.dataset.view =
			sideBarEl.dataset.view === "mobile" ? "desktop" : "mobile";
	});
});

dropdownButtonEls.forEach((dropdownButtonEl) => {
	dropdownButtonEl.addEventListener("click", () => {
		const dropdownEl = dropdownButtonEl.nextElementSibling;
		dropdownEl.dataset.open =
			dropdownEl.dataset.open === "true" ? "false" : "true";
	});
});
