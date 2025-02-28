const links = document.querySelectorAll(".nav-link");
const bottomBase = document.querySelector(".bottom-base");
let view = "info";

const infoView = document.querySelector(".top-start");

function generateInfoView() {
	const old = infoView;

	const sectionTop = document.querySelector(".top");
	const container = document.querySelector(".top-start");

	sectionTop.replaceChild(old, container);
}

links.forEach((link) => {
	link.addEventListener("click", (e) => {
		e.preventDefault();

		if (link.id === "info" && view === "work") {
			// Generate The Info View();
			generateInfoView();
			// Remove The Bottom Base
			bottomBase.classList.toggle("disappear");
			view = "info";
		} else if (link.id === "work" && view === "info") {
			generateProjectView();
			// Add The Bottom Base
			bottomBase.classList.toggle("disappear");
			view = "work";
		}
	});
});

const projects = [
	{
		name: "Korty",
		details:
			"Identity and Website for one of Nigeria's fastest rising youtubers",
		href: "https://kortyeo.madebynull.com/",
	},
	{
		name: "Paystack Terminal",
		details: "Marketing website for Paystack’s Point of Sale solution",
		href: "https://deploy-preview-162--paystack-terminal.netlify.app/terminal/",
	},
	{
		name: "Radio Null Rewind 2022",
		details: "A music-themed year in review website for 2022.",
		href: "https://2022.madebynull.com/",
	},
	{
		name: "Danfo",
		details:
			"Bespoke type specimen website for a Google fonts commissioned typeface.",
		href: "https://www.afrotype.com/danfo",
	},
	{
		name: "PITH Africa",
		details:
			"E-commerce and editorial experience for a lagos based fashion house",
		href: "https://pithafrica.com/",
	},
	{
		name: "Group 256",
		details:
			"Portfolio website for Visual Designer and Art Director, Isaac Fayemi.",
		href: "https://www.fayemi.design/",
	},
];

function generateProjectView() {
	const sectionTop = document.querySelector(".top");
	const container = document.querySelector(".top-start");

	let newTopStart = document.createElement("div");
	newTopStart.classList.add("top-start");

	let item;

	projects.forEach((project, index, array) => {
		if (index % 2 === 0) {
			item = document.createElement("div");
			item.classList.add("top-start-item");
		}
		const article = document.createElement("article");
		const h4 = document.createElement("h4");
		h4.classList.add("start-header");
		const a = document.createElement("a");
		a.href = project["href"];
		a.textContent = project["name"];
		h4.appendChild(a);

		const para = document.createElement("p");
		para.textContent = project["details"];

		article.appendChild(h4);
		article.appendChild(para);

		item.appendChild(article);

		if (index % 2 === 1) {
			newTopStart.appendChild(item);
		}
	});

	sectionTop.replaceChild(newTopStart, container);
}
