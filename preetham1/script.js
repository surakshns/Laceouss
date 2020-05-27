const image = document.getElementById("image");
const sad = document.querySelector('#sad');
const happy = document.querySelector('#happy');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const music = document.querySelector('#music');
const media = matchMedia('(min-width: 425px)')
console.log(media);
const scrollAmount = 55;
window.addEventListener("scroll",(event) => {
	const { top } = image.getBoundingClientRect();
	if (top < scrollAmount) {
			sad.style.opacity = 0;
			happy.style.opacity = 1;
            h1.style.color= "white";
            music.style.color= "white";
            body.setAttribute("style","animation: animate 0.5s ease-in-out;")
            body.style.backgroundColor= "black";
            if (MediaQueryList === "true") {
            happy.style.top= "100%";
}

	}else {
			sad.style.opacity = 1;
			happy.style.opacity = 0;
			body.style.backgroundColor= "white";
			body.style.animation= "ease-in-out";
			music.style.color= "white";
			// sad.style.top= "40%";
	}
});