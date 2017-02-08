function color() {
	var c = document.getElementById('phone');
	var ctx = c.getContext("2d");
	ctx.fillStyle="#000000";
	ctx.fillRect(0,0,phone.width,phone.height);
}
