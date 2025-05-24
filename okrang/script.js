const cookieButtonEl = document.querySelector("#cookie");
const heroImagesEl = document.querySelector(".hero-end");

cookieButtonEl.addEventListener("click", (e) => {
	const cookieEl = e.currentTarget.parentElement;
	cookieEl.remove();
});

window.onscroll = function () {
	if (window.scrollY > 0 && window.scrollY <= 500) {
		console.log(window.scrollY);
		heroImagesEl.style.setProperty("--x", window.scrollY);
	}
};
