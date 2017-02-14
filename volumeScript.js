
var volume = 5;
var hi = document.getElementById('hi');

// Volume UP
document.getElementById('up').addEventListener("click", function() {
	hi.innerHTML = "Volume:";
	if(volume == 10) 
		hi.innerHTML+="MAX";
	else {
		volume++;
		for(var i = 0; i < volume; i++) {
			hi.innerHTML+="*";
		}
	}
	hi.style.display = 'inline';
	
	setTimeout(function() {
		hi.innerHTML = "";
	}, 2500);
});
	
// Volume Down
document.getElementById('down').addEventListener("click", function() {
	hi.innerHTML = "Volume:";
	if(volume == 1) 
		hi.innerHTML+="MIN";
	else {
		volume--;
		for(var i = 0; i < volume; i++) {
			hi.innerHTML+="*";
		}
	}
	hi.style.display = 'inline';
	
	setTimeout(function() {
		hi.innerHTML = "";
	}, 2500);
});

