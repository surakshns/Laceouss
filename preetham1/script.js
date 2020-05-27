const image = document.getElementById("image");
const sad = document.querySelector('#sad');
const happy = document.querySelector('#happy');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const music = document.querySelector('#music');
const media = matchMedia('(max-width: 637px)')
console.log(media.matches);
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
            console.log(media.matches);
            if (media.matches == true) {
            	console.log("hi")
            happy.style.top = "130%";
        }
            else{
            	happy.style.top = "15%";
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