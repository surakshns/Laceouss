const image = document.getElementById("image");
const sad = document.querySelector('#sad');
const happy = document.querySelector('#happy');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const music = document.querySelector('#music');
const preorder = document.querySelector('.preorder')
const media = matchMedia('(max-width: 575px)')
console.log(preorder);
var scrollAmount
if (media.matches == true) {
		scrollAmount = 110;
}
else{
	  scrollAmount = 1;
}
window.addEventListener("scroll",(event) => {
	const { top } = image.getBoundingClientRect();
	if (top < scrollAmount) {
		sad.style.opacity = 0;
		happy.style.opacity = 1;
		h1.style.color= "white";
		h1.style.opacity= 1;
		music.style.color= "white";
		body.setAttribute("style","animation: animate 1500ms ease-in-out;")
		body.style.backgroundColor= "black";
		happy.style.top = "15%";
		preorder.setAttribute("style","animation: come 1500ms ease-out;")
		if (media.matches == true) {
			happy.style.top = "50%";
		}
		else {

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
