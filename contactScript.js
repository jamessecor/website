function onLoading() {
	// Phone Screen (canvas element)
	
	/*  Might need this to get the full screen the right color???
	
	var c = document.getElementById("phone");
	var ctx = c.getContext("2d");
	ctx.fillStyle = '#8dd';
	ctx.clearRect(0,0,phone.width,phone.height);
	ctx.fillRect(0,0,phone.width,phone.height);
	
	*/
	
	document.getElementById('back').addEventListener("click", function() { 
		window.location.href = "index.php";
	});
	
	// Top Button
	document.getElementById('topButton').addEventListener("click", function() { 
		onOff();
	});
	

}

// Makes using onOff possible
var onOrOff = false;
var f = document.getElementById('contactForm');

function onOff() {
	if(onOrOff===false) turnOn();
	else turnOff();
}

function turnOn() {
	f.style.display = "inline";
	onOrOff = true;
}


function turnOff() {
	f.style.display = "none";
	onOrOff = false;
}