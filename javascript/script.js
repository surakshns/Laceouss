var mess ="hello";
	console.log("globle:"+mess);
var a=function () {
	var mess = "first one"
    console.log("a:"+mess);
    function b () {
    console.log("b:"+mess);
}
    b();
}
a();
