function onLoading() {
	// Phone Screen (canvas element)
	var c = document.getElementById("phone");
	var ctx = c.getContext("2d");
	ctx.fillStyle = "#bff";
	ctx.fillRect(0,0,phone.width,phone.height);
	//document.getElementById('topButton').addEventListener("click", function() { onOff(); });
	document.getElementById('back').addEventListener("click", function() { 
		window.location.href = "index.php";
	});
}