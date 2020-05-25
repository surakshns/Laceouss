const image = document.getElementById("image");
const sad = document.querySelector('#sad');
const happy = document.querySelector('#happy');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const music = document.querySelector('#music');
const scrollAmount = 40;
window.addEventListener("scroll",(event) => {
	const { top } = image.getBoundingClientRect();
	if (top < scrollAmount) {
			sad.style.opacity = 0;
			happy.style.opacity = 1;
            body.style.backgroundColor= "black";
            h1.style.color= "white";
            music.style.color= "black";
            music.style.backgroundColor= "white";


	}else {
			sad.style.opacity = 1;
			happy.style.opacity = 0;
			body.style.backgroundColor= "white";
			music.style.color= "white";
	}
});