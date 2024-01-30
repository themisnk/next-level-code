// fish follow cursor
let fish = document.getElementById('fish'); 

document.onmousemove = function(e){
	let mouseX = e.clientX;
	let mouseY = e.clientY;

    fish.style.left = e.clientX - 500 + 'px';
    fish.style.top = e.clientY - 500 + 'px';
	// do something with the coordinates here
}