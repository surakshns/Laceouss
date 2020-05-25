// console.log(document.getElementById("title"))

// console.log(document instanceof HTMLDocument)
document.addEventListener("DOMContentLoaded",
	function (event){
		function sayHello (event) {
			console.log(event);
	this.textContent = "Pressed";
	var name = 
	document.getElementById("name").value;
	var message = "<h2>hello " + name + "!</h2>";


	document
	  .getElementById("content")
	  .innerHTML = message;
    
        if (name === "su") {
    var title =
	  document
	   .querySelector("#title1")
	   .textContent;
	title += " Come In";
    document
	    .querySelector("h1")  //explectly declaring
	    .textContent = title; //pass by value
	    
}
 }


 document.querySelector("button")
        .onclick = sayHello;

	});


    // document.querySelector("button")
    //     .addEventListener("click",sayHello);


