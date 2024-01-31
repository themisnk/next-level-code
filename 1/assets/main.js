// fish follow cursor
let fish = document.getElementById('fish'); 
let interval;

document.onmousemove = function(e){
	let mouseX = e.clientX;
	let mouseY = e.clientY;

    fish.style.left = e.clientX - 500 + 'px';
    fish.style.top = e.clientY - 200 + 'px';
}


document.addEventListener("mousemove", (e)=>{
    mousePosX=e.x;
})

setInterval(()=>{
    if(mousePosX>window.innerWidth-100){
        window.scrollBy(1, 0);
		fish.className = 'forward';

    }
    if(mousePosX<600){
        window.scrollBy(-1, 0);
		fish.className = 'flip';
    }

	let img1 = document.getElementById('img1');
	if (window.scrollX >= 1500) {
		img1.style.display = 'block';
		img1.className = 'spin';
 	 } 
	 else {
		img1.style.display = 'none';
	 }

	 let img2 = document.getElementById('img2');
	 if (window.scrollX >= 4600) {
		img2.style.display = 'block';
		img2.className = 'slide';
 	 } 
	 else {
		img2.style.display = 'none';
	 }

	 let img3 = document.getElementById('img3');
	 let heart = document.getElementById('heart');

	 if (window.scrollX >= 9900) {
		img3.style.display = 'block';
		heart.style.display = 'block';
 	 } 
	 else {
		img3.style.display = 'none';
		heart.style.display = 'none';
	 }

	let img4 = document.getElementById('img4');
	 if (window.scrollX >= 11700) {
		img4.style.display = 'block';
 	 } 
	 else {
		img4.style.display = 'none';
	 }

	 let img5 = document.getElementById('img5');
	 if (window.scrollX >= 16500) {
		img5.style.display = 'block';
 	 } 
	 else {
		img5.style.display = 'none';
	 }
	

}, 1);

let button = document.getElementById('fish-button');
button.addEventListener("click", (e)=>{
	let border = document.getElementById('border');

	if (border.style.display === 'none'){
    	border.style.display = 'block';
	} else{
		border.style.display = 'none';
	}
})



