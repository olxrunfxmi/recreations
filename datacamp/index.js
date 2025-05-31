const openerEl = document.querySelector(".opener");
const menuEl = document.querySelector("#menu-button");
const menuBarEl = document.querySelector(".menu-bar");
const backgroundEl = document.querySelector(".background");

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
	console.log("EEEE");
	menuBarEl.dataset.menu = menuBarEl.dataset.menu === "open" ? "close" : "open";
	backgroundEl.dataset.menu =
		backgroundEl.dataset.menu === "open" ? "close" : "open";
});
