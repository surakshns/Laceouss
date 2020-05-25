const image = document.getElementById("image");
const sad = document.querySelector('#sad');
const happy = document.querySelector('#happy');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const music = document.querySelector('#music');
const scrollAmount = 55;
window.addEventListener("scroll",(event) => {
	const { top } = image.getBoundingClientRect();
	if (top < scrollAmount) {
			sad.style.opacity = 0;
			happy.style.opacity = 1;
            h1.style.color= "white";
            music.style.color= "black";
            music.style.backgroundColor= "white";
            body.setAttribute("style","animation: animate 0.5s ease-in-out;")
             body.style.backgroundColor= "black";


	}else {
			sad.style.opacity = 1;
			happy.style.opacity = 0;
			body.style.backgroundColor= "white";
			body.style.animation= "ease-in-out";
			music.style.color= "white";
	}
});