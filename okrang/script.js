const cookieButtonEl = document.querySelector("#cookie");
const heroImagesEl = document.querySelector(".hero-end");
const productFrameEl = document.querySelector(".product-frame");
const ballEls = document.querySelectorAll(".ball");
const productListEl = document.querySelector(".product-list");
const listEls = productListEl.querySelectorAll("li");

const menuToggleEl = document.querySelector("#menu-toggler");
const mainNavigationEl = document.querySelector("#main-nav");
const linkHoldersEl = document.querySelector("#link-holders");

cookieButtonEl.addEventListener("click", (e) => {
	const cookieEl = e.currentTarget.parentElement;
	cookieEl.remove();
});

window.onscroll = function () {
	if (window.scrollY > 0 && window.scrollY <= 500) {
		heroImagesEl.style.setProperty("--x", window.scrollY);
	}
};

productFrameEl.addEventListener("scroll", () => {
	const firstProductEl = document.querySelector(".product");
	const productDetails = firstProductEl.getBoundingClientRect();

	const productWidth = productDetails.width;
	const productLeft = productDetails.left;
	const index = Math.floor(productLeft / (productWidth - 64)) * -1 - 1;

	ballEls.forEach((ballEl, i) => {
		if (i === index) {
			ballEl.dataset.status = "active";
		} else if (index === -1 && i === 0) {
			ballEl.dataset.status = "active";
		} else if (index === 6 && i === 5) {
			ballEl.dataset.status = "active";
		} else {
			ballEl.dataset.status = "inactive";
		}
	});
});

productListEl.addEventListener("click", (e) => {
	if (e.target.closest("li")) {
		const clickedListEl = e.target.closest("li");

		listEls.forEach((listEl) => {
			listEl.dataset.state = "inactive";
		});

		clickedListEl.dataset.state = "active";
		const factor = Number(clickedListEl.dataset.num) - 1;

		const firstProductEl = document.querySelector(".product");
		const productDetails = firstProductEl.getBoundingClientRect();

		const productWidth = productDetails.width;
		const transformValue = productWidth * factor + 32 * factor;

		firstProductEl.parentElement.style.setProperty("--diff", transformValue);
	}
});

menuToggleEl.addEventListener("click", (e) => {
	menuToggleEl.dataset.open =
		menuToggleEl.dataset.open === "open" ? "close" : "open";

	mainNavigationEl.dataset.open =
		mainNavigationEl.dataset.open === "open" ? "close" : "open";

	document.body.dataset.overflow =
		document.body.dataset.overflow === "true" ? "false" : "true";
});

linkHoldersEl.addEventListener("click", (e) => {
	const listEl = e.target.closest("li");

	if (listEl && listEl.dataset.open !== "open") {
		const allLinkEls = linkHoldersEl.querySelectorAll("li");

		allLinkEls.forEach((linkEl) => {
			linkEl.dataset.open = "close";
		});

		listEl.dataset.open = "open";
	} else if (
		listEl &&
		listEl.dataset.open === "open" &&
		e.target.closest(".nav-crumb")
	) {
		listEl.dataset.open = "close";
	}
});

// To mitigate data-overflow bug
window.addEventListener("resize", () => {
	console.log(window.innerWidth);
	if (window.innerWidth > 1200) {
		document.body.removeAttribute("data-overflow");
		menuToggleEl.removeAttribute("data-open");
		mainNavigationEl.removeAttribute("data-open");
	}
});
