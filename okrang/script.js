const cookieButtonEl = document.querySelector("#cookie");
const heroImagesEl = document.querySelector(".hero-end");
const productFrameEl = document.querySelector(".product-frame");
const ballEls = document.querySelectorAll(".ball");
const productListEl = document.querySelector(".product-list");
const listEls = productListEl.querySelectorAll("li");

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
