const openerEl = document.querySelector(".opener");
const menuEl = document.querySelector("#menu-button");
const menuBarEl = document.querySelector(".menu-bar");
const backgroundEl = document.querySelector(".background");
const mainLinkButtonEl = document.querySelector("#main-links");
const cancelBannerButtonEl = document.querySelector("#cancel-banner");

openerEl.addEventListener("click", () => {
	openerEl.parentElement.dataset.open =
		openerEl.parentElement.dataset.open === "true" ? "false" : "true";
});

menuEl.addEventListener("click", (e) => {
	menuBarEl.dataset.menu = menuBarEl.dataset.menu === "open" ? "close" : "open";
	backgroundEl.dataset.menu =
		backgroundEl.dataset.menu === "open" ? "close" : "open";
});

backgroundEl.addEventListener("click", () => {
	menuBarEl.dataset.menu = menuBarEl.dataset.menu === "open" ? "close" : "open";
	backgroundEl.dataset.menu =
		backgroundEl.dataset.menu === "open" ? "close" : "open";
});

mainLinkButtonEl.addEventListener("click", () => {
	mainLinkButtonEl.dataset.open =
		mainLinkButtonEl.dataset.open === "true" ? "false" : "true";
});

cancelBannerButtonEl.addEventListener("click", () => {
	cancelBannerButtonEl.parentElement.parentElement.remove();
});
