var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for(i=1;i<=5;i++){
	var newImage = document.createElement('img');
  	newImage.setAttribute('src', 'images/pic' + i + '.jpg');
  	thumbBar.appendChild(newImage);
  	
  	function imgChange(e){
  		/*displayedImage = displayedImage.setAttribute('src',e.getAttribute('src'));*/
  		/*var imgSrc = e.target.getAttribute("src");*/
  		displayedImage.setAttribute('src',e.target.getAttribute("src"));
  	}
  	newImage.addEventListener('click',imgChange);
}
  

/* Wiring up the Darken/Lighten button */
function btnChange(){
	var Newbtn = btn.getAttribute('class');
	if(Newbtn === 'dark'){
		btn.setAttribute('class','light');
		btn.textContent = 'Lighten';
		overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
	}else{
		btn.setAttribute('class','dark');
		btn.textContent = 'Darken';
		overlay.style.backgroundColor = "rgba(0,0,0,0)";
	}
}
btn.addEventListener('click',btnChange);