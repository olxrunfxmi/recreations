const columnContainer = document.querySelector(".column.container");

const recreations = [
	{
		name: "Studio Null",
		details:
			"Studio Null is a digital experience studio designing spaces for fun, commerce and conversation on the web.",
		src: "https://ik.imagekit.io/ndtwmeq4p/studio:null?updatedAt=1747698686606",
		alt: "Studio Null Website",
		mainURL: "https://madebynull.com",
		recreationURL: "./studionull/index.html",
	},
	{
		name: "Matt Jumper",
		details:
			"Toronto-based brand & web designer. No-code and Framer expert, partner and educator.",
		src: "https://ik.imagekit.io/ndtwmeq4p/mattjumper?updatedAt=1747698686838",
		alt: "Matt Jumper Website",
		mainURL: "https://mattjumper.com/",
		recreationURL: "./mattjumper/index.html",
	},
	{
		name: "Yle News Site Page",
		details:
			"Finland's national public broadcasting company publication site. A publication about phones in school",
		src: "https://ik.imagekit.io/ndtwmeq4p/Screenshot%20(8589).png?updatedAt=1747698465848",
		alt: "YLE Finland Publication",
		mainURL: "https://yle.fi/a/74-20158886",
		recreationURL: "./finland/index.html",
	},
];

generateRecreations(recreations);

function generateRecreations(recreations) {
	recreations.forEach((recreation) => {
		const columnBar = document.createElement("div");
		columnBar.classList.add("column-bar");

		const header = document.createElement("h4");
		header.classList.add("header-details");
		header.textContent = recreation["name"];
		columnBar.appendChild(header);

		const para = document.createElement("p");
		para.classList.add("details-item");
		para.textContent = recreation["details"];
		columnBar.appendChild(para);

		const img = document.createElement("img");
		img.src = recreation["src"];
		img.alt = recreation["alt"];
		columnBar.appendChild(img);

		const btnGroup = document.createElement("div");
		btnGroup.classList.add("btn-group");
		const mainBtn = document.createElement("a");
		const altBtn = document.createElement("a");
		mainBtn.classList.add("btn", "main-btn");
		altBtn.classList.add("btn", "alt-btn");
		mainBtn.textContent = "Their site";
		altBtn.textContent = "Recreation site";
		mainBtn.href = recreation["mainURL"];
		altBtn.href = recreation["recreationURL"];
		btnGroup.appendChild(mainBtn);
		btnGroup.appendChild(altBtn);
		columnBar.appendChild(btnGroup);

		columnContainer.appendChild(columnBar);
	});
}
