const stickyHeaderEl = document.querySelector(".sticky-header");

window.onscroll = function () {
	if (window.scrollY > 80) {
		stickyHeaderEl.dataset.state = "active";
	} else if (window.scrollY < 80) {
		stickyHeaderEl.dataset.state = "inactive";
	}
};
