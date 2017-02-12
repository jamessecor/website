function onLoading() {
	// Top Button
	document.getElementById('topButton').addEventListener("click", function() { 
		onOff(); 
	});
	
	// Back Button
	document.getElementById('back').addEventListener("click", function() { 
		turnOff();
		turnOn();
	});
	
	// TODO: fix the following
	// Contact App
	document.getElementById('contact').addEventListener("click", function() {
		window.location.href = "contact.php";
	});
	
	// Map App
	document.getElementById('map').addEventListener("click", function() { 
		hideObjects(apps);
		drawMap(); 
	});
		
	// Show Info App
	document.getElementById('info').addEventListener("click", function() {
		turnOff();
		showInfo();
	});
	
	// Images App
	document.getElementById('showImages').addEventListener("click", function() {
		turnOff();
		showImages();
	});
	
	// Next button
	document.getElementById('next').addEventListener("click", function() {
		turnOff();
		showImages();
	});
		
	
}

// Button array
var apps = document.getElementsByClassName('app');
var imgButtons = document.getElementsByClassName('imgButtons');

// Phone Screen (canvas element)
var c = document.getElementById("phone");
var ctx = c.getContext("2d");

// Make Map
function drawMap() {
	turnOff();
	onOrOff = true;
	ctx.fillStyle = "#f66";
	ctx.fillRect(0,0,phone.width,phone.height);
	ctx.fillStyle="rgba(100,200,230,.7)";
	ctx.fillRect(0,80,140,phone.height-80);
	ctx.fillRect(190, 55, phone.width-165, 70);
	ctx.fillRect(0,0,150,45);
	ctx.fillRect(210,10,phone.width-210,30);
	ctx.fillStyle = "rgba(50,100,120,.5);";
	ctx.fillRect(190,110,10,10);
	ctx.fillRect(220,55,40,5);
	ctx.font = "10px sans-serif";
	//ctx.fillText("Stairs (Down)", 200, 135);
	ctx.fillRect(40, 80, 60, 20);
	//ctx.fillText("Elevator", 60, 102);
}

// Show #nomophobia info
function showInfo() {
	turnOff();
	onOrOff = true;
	ctx.fillStyle = "#dfc";
	ctx.fillRect(0,0,phone.width,phone.height);
	document.getElementById('infoText').style.display = 'inline';
}

// Image Array
var nomoImages = document.getElementsByClassName('nomoImages');
var imageIndex = 0;
var prevImg = nomoImages[imageIndex];
var curImg = nomoImages[imageIndex];

// Show images
function showImages() {
	onOrOff = true;
	if(imageIndex == nomoImages.length) 
		imageIndex = 0;
	curImg = nomoImages[imageIndex];
	ctx.drawImage(curImg, 0, 0, phone.width, phone.height);
	displayObjects(imgButtons);
	prevImg = curImg;
	imageIndex++;
	
}

// Makes using onOff possible
var onOrOff = false;

function onOff() {
	if(onOrOff===false) turnOn();
	else turnOff();
}

function turnOn() {
	hideObjects(imgButtons);
	// Shows apps and screen lit up
	displayObjects(apps);
	ctx.fillStyle = '#eff';
	ctx.clearRect(0,0,phone.width,phone.height);
	ctx.fillRect(0,0,phone.width,phone.height);
	ctx.fillStyle = 'rgba(100,100,100,.1)';
	ctx.fillRect(20, 5, 258, 10);
	onOrOff = true;
}


function turnOff() {
	hideObjects(apps);
	hideObjects(imgButtons);
	ctx.fillStyle = '#555';
	ctx.clearRect(0,0,phone.width,phone.height);
	ctx.fillRect(0,0,phone.width,phone.height);
	document.getElementById('infoText').style.display = 'none';
	onOrOff = false;
}

function displayObjects(objectsArray) {
	for(var i = 0; i < objectsArray.length; i++) {
        objectsArray[i].style.display = "inline";
	}
}

function hideObjects(objectsArray) {
	for(var i = 0; i < objectsArray.length; i++) {
		objectsArray[i].style.display = "none";
	}
}