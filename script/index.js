const columnContainer = document.querySelector(".column.container");

const recreations = [
	{
		name: "Studio Null",
		details:
			"Studio Null is a digital experience studio designing spaces for fun, commerce and conversation on the web.",
		src: "https://media-hosting.imagekit.io//ebbf5a7bb6814eca/madebynull.png?Expires=1835349662&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=rKZKl-tNYuZhmMzfnj78rLIjU4TcSGR5VvXJbNYu-BQgH3gZ6lZUnKkwgoeQl6pBugITLBsS2tAcQYbLRHRi098lJ0fZ-VfrzG1FPOKqTDhh6XzmnAQsCkhltRg6R6N3WRSk4ZJuVH62ZRO8ggJMe-QFRrOYO8EpeVgA5tw-JDjjmrtce1LdxXv92pI12iUITsg2Ke3MvtkVlluvXxiyIW7gt2WVwc5CbZazwhVAEk2-fMRgWh8pkmhGqATmnXwCr9QN9STnF14ayge8qS7~-inE37LQjL0AXpNrP1uDbGwGjQlmTp3He1fiYaONiX6BNS~lK0xDMfh8bFGQRHgxVw__",
		alt: "Studio Null Website",
		mainURL: "https://madebynull.com",
		recreationURL: "./studionull/index.html",
	},
	{
		name: "Matt Jumper",
		details:
			"Toronto-based brand & web designer. No-code and Framer expert, partner and educator.",
		src: "https://media-hosting.imagekit.io//a3962604bc8c4c95/mattjumper.com_(Laptop 1920).png?Expires=1835570362&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=KbxsRtF8DlaavrL1v7k8F3CSnh6AGOX9aGiO366H5pVtynMpIyDH-IGJalcoMldC4IlGOdeLcy2-tIO-RRz3vSzT6ldlum0sNOKgTBQjBWRjPFekl6n8t94mMRMhasH9PpSnVoIabJWcbq-4aHF6rvyh9wZ3Iy5kUIPH2y~4A8jJh0yZrnAqfkOcAwjZwPb4dTWJzITJOUqnbVa45JEDy3NbLwVNaslWDjYftrsU-pEsfM9t3awyF6sugD7y6ZrRqScBvJsKB4YwpYmSPeh0cqQEg4vGHH8Pkri8EGpl3uorydo609JENE9e-NVxWryhD80lPakuDRRQjuja7FA3gg__",
		alt: "Matt Jumper Website",
		mainURL: "https://mattjumper.com/",
		recreationURL: "./mattjumper/index.html",
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
