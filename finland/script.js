const stickyHeaderEl = document.querySelector(".sticky-header");

window.onscroll = function () {
	console.log(window.scrollY);
	if (window.scrollY > 80) {
		stickyHeaderEl.dataset.state = "active";
	} else if (window.scrollY < 80) {
		stickyHeaderEl.dataset.state = "inactive";
	}
};
