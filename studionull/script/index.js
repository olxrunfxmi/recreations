const links = document.querySelectorAll(".nav-link");
const bottomBase = document.querySelector(".bottom-base");

links.forEach((link) => {
	link.addEventListener("click", (e) => {
		e.preventDefault();
		bottomBase.classList.toggle("disappear");
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
