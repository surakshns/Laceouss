const image = document.getElementById("image");
const sad = document.querySelector('#sad');
const happy = document.querySelector('#happy');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const music = document.querySelector('#music');
const preorder = document.querySelector('.preorder')
const media = matchMedia('(max-width: 400px)')
const mediamob = matchMedia('(max-width: 575px)')
const mediaheight = matchMedia('(min-height: 786px)')
const mediamac = matchMedia('(min-height: 686px) and (max-height: 785px)')
console.log(preorder);
var scrollAmount
if (media.matches == true) {
		scrollAmount = 50;
}
else if (mediamob.matches == true) {
	  scrollAmount = 180;
}
if (mediaheight.matches == true){
	 scrollAmount = 240;
}
if (mediamac.matches) {
	 scrollAmount = 150;
}
window.addEventListener("scroll",(event) => {
	const { top } = image.getBoundingClientRect();
	if (top < scrollAmount) {
		sad.style.opacity = 0;
		happy.style.opacity = 1;
		h1.style.color= "#ff0000";
		h1.style.opacity= 1;
		music.style.color= "white";
		body.setAttribute("style","animation: animate 1000ms ease-in-out;")
		body.style.backgroundColor= "black";
		preorder.setAttribute("style","animation: come 1000ms ease-out;")
		if (media.matches == true) {
			happy.style.top = "50%";
		}
		else if (mediamob.matches == true) {
			happy.style.top = "50%";
		}
		else {
			happy.style.top = "30%";
		}
	}else {
		sad.style.opacity = 1;
		happy.style.opacity = 0;
		body.style.backgroundColor= "white";
		body.style.animation= "ease-in-out";
		music.style.animation= "ease-in-out";
		preorder.style.animation= "ease-in-out";
		music.style.color= "white";
		h1.style.opacity= 0;
			// sad.style.top= "40%";
	}
});
