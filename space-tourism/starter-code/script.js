let planetImg = document.querySelector(".idk img");
let planets = document.querySelectorAll(".planets span");
let currentPlanets = document.querySelector(".current.planet");
let planetInfo = document.querySelector(".info");
let avgDis = document.querySelector(".avg");
let estTim = document.querySelector(".est-travel");
let selected = document.querySelector("span.selected");

console.log(avgDis);
// crew

let role = document.querySelector(".role");
let crewName = document.querySelector(".name");
let crewDesc = document.querySelector(".crew-ov");
let crews = document.querySelectorAll(".crews span");
let crewImg = document.querySelector("#crew img");
let selectedCrew = document.querySelector(".selected-crew");

// tech
let launches = document.querySelectorAll(".launch-nav div");
let launchDetails = document.querySelector(".launch-details");
let details = document.querySelector(".details");
let img = document.querySelector(".img img");
let selectedLaunch = document.querySelector(".selected-launch");

function removeSelected(element, className, e) {
	element.classList.toggle(className);
	e.target.classList.toggle(className);
	return (element = e.target);
}

fetch("data.json")
	.then((res) => res.json())
	.then((data) => {
		if (window.location.href.includes("destinations.html")) {
			let destinations = data.destinations;
			planets.forEach((planet) => {
				planet.addEventListener("click", (e) => {
					selected = removeSelected(selected, "selected", e);
					currentPlanets.classList.toggle("go-right");
					planetInfo.classList.toggle("go-right");
					avgDis.classList.toggle("go-right");
					estTim.classList.toggle("go-right");
					planetImg.classList.toggle("go-left");

					setTimeout(() => {
						let target = e.target.getAttribute("data-planet");
						let destination = destinations[target];
						currentPlanets.textContent = destination.name;
						planetImg.src = destination.images.png;
						planetInfo.textContent = destination.description;
						avgDis.firstElementChild.textContent = destination.distance;
						estTim.firstElementChild.textContent = destination.travel;
					}, 500);
					setTimeout(() => {
						currentPlanets.classList.toggle("go-right");
						planetInfo.classList.toggle("go-right");
						avgDis.classList.toggle("go-right");
						estTim.classList.toggle("go-right");
						planetImg.classList.toggle("go-left");
					}, 1000);
				});
			});
		}
		if (window.location.href.includes("crew.html")) {
			let crewsArray = data.crew;
			crews.forEach((crew) => {
				crew.addEventListener("click", (e) => {
					selectedCrew = removeSelected(selectedCrew, "selected-crew", e);

					crewImg.classList.toggle("go-right");
					crewDesc.classList.toggle("go-left");
					crewName.classList.toggle("go-left");
					role.classList.toggle("go-left");

					setTimeout(() => {
						let target = e.target.getAttribute("data-crew");
						let crewData = crewsArray[target];
						role.textContent = crewData.role;
						crewName.textContent = crewData.name;
						crewDesc.textContent = crewData.bio;
						crewImg.src = crewData.images.png;
					}, 500);

					setTimeout(() => {
						crewImg.classList.toggle("go-right");
						crewDesc.classList.toggle("go-left");
						crewName.classList.toggle("go-left");
						role.classList.toggle("go-left");
					}, 1000);
				});
			});
		}
		if (window.location.href.includes("technologies.html")) {
			let technologies = data.technology;
			launches.forEach((launche) => {
				launche.addEventListener("click", (e) => {
					selectedLaunch = removeSelected(selectedLaunch, "selected-launch", e);
					selectedLaunch.classList.toggle("selected-launch");
					e.target.classList.toggle("selected-launch");
					selectedLaunch = e.target;

					img.classList.toggle("go-right");
					details.classList.toggle("go-left");
					launchDetails.classList.toggle("go-left");

					setTimeout(() => {
						let target = e.target.getAttribute("data-launch");
						let technologyData = technologies[target];
						launchDetails.textContent = technologyData.name;
						details.textContent = technologyData.description;
						img.src = technologyData.images.portrait;
					}, 500);

					setTimeout(() => {
						img.classList.toggle("go-right");
						details.classList.toggle("go-left");
						launchDetails.classList.toggle("go-left");
					}, 1000);
				});
			});
		}
	});

let expolre = document.querySelector(".explore");

expolre.addEventListener("click", (e) => {
	expolre.style.transform = "translate(-70vh, -20vh) scale(9)";
	expolre.style.backgroundColor = "black";
	setTimeout(() => {
		window.location.href = "http://127.0.0.1:5501/starter-code/destinations.html";
	}, 700);
});
