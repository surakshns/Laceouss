// GLOBLE
// var mess ="hello";
// 	console.log("globle:"+mess);
// var a=function () {
// 	var mess = "first one"
//     console.log("a:"+mess);
//     function b () {
//     console.log("b:"+mess);
// }
//     b();
// }
// a();

// FUNCTION CONSTRUCT
// function Circle(radius){
// 	this.radius=radius;

//     this.getarea=function(){
//     	return Math.PI*Math.pow(this.radius,2);
//     };};
// var mycircle = new Circle(10);
// console.log(mycircle);


// ARRAY
// var array= new Array();
// array[0] = "sur";
// array[1] = 2;
// array[2] = function(name) {
// 	console.log("hello "+ name);
// };
// array[3] = {course: "HTML,CSS & JS"};
// console.log(array);
// array[2](array[0])

// var names = ["suraksh", "suthan", "jeevan"];
// console.log(names)

// for (var i = 0; i < names.length; i++) {
// 	console.log("hello " +names[i]);
// }

// var names = ["suraksh", "suthan", "jeevan"];
// console.log(names)
// names[100]="sachin"
// for (var i = 0; i < names.length; i++) {
// 	console.log("hello " +names[i]);
// }

// ARRAY PT-2
// var names2 = ["suraksh", "suthan", "jeevan"];

// var obj ={
//    name: "suraksh",
//    course:"Wed development"
// };
// for (var prop in obj){
// 	console.log(prop +"-" +obj[prop]);
// }

// for(var name in names2){
// 	console.log("hi "+names2[name])
// }
// names2.greeting="hi"; //this is some property that js takes up as array has arrays behave as object
// for(var name in names2){
// 	console.log("hi "+names2[name])
// }

// CLOSURE
// function makemul (multi){
// 	return (
// 		function (x){
// 			return multi*x;
// 		});
// }
// var doubleall = makemul(10);
// console.log(doubleall(3));