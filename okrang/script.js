const cookieButtonEl = document.querySelector("#cookie");

cookieButtonEl.addEventListener("click", (e) => {
	const cookieEl = e.currentTarget.parentElement;
	cookieEl.remove();
});
