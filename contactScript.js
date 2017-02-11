function onLoading() {
	// Phone Screen (canvas element)
	var c = document.getElementById("phone");
	var ctx = c.getContext("2d");
	ctx.fillStyle = '#8dd';
	ctx.clearRect(0,0,phone.width,phone.height);
	ctx.fillRect(0,0,phone.width,phone.height);
	
	//document.getElementById('topButton').addEventListener("click", function() { onOff(); });
	document.getElementById('back').addEventListener("click", function() { 
		window.location.href = "index.php";
	});
	
	// Top Button
	document.getElementById('topButton').addEventListener("click", function() { 
		window.location.href = "index.php"; 
	});
	

}

function turnOn() {
	
}