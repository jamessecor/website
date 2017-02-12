function onLoading() {
	// Phone Screen (canvas element)
	
	turnOn();
	
	document.getElementById('back').addEventListener("click", function() { 
		window.location.href = "index.php";
	});
	
	// Top Button
	document.getElementById('topButton').addEventListener("click", function() { 
		onOff();
	});
	

}

var c = document.getElementById("phone");
var ctx = c.getContext("2d");

// Change screen color
function fill(color) {
	ctx.fillStyle = color;
	ctx.clearRect(0,0,phone.width,phone.height);
	ctx.fillRect(0,0,phone.width,phone.height);
}

// Makes using onOff possible
var onOrOff = true;
var f = document.getElementById('contactForm');

function onOff() {
	if(onOrOff===false) turnOn();
	else turnOff();
}

function turnOn() {
	fill('#8dd');
	f.style.display = "inline";
	onOrOff = true;
}


function turnOff() {
	fill('#555');
	f.style.display = "none";
	onOrOff = false;
}