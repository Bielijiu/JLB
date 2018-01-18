//使用数组完成类似效果

var arr = new Array();
function leftin(){
	var Num = document.getElementById("input").value;
	if(Num === ""){return false;}
	arr.unshift(Num);
	document.getElementById("input").value = "";
	console.log(arr);
}

function rightin(){
	var Num = document.getElementById("input").value;
	if(Num === ""){return false;}
	arr.push(Num);
	document.getElementById("input").value = "";
	console.log(arr);
}

function leftout(){
	if(arr.length === 0){return false;}
	arr.shift();
	console.log(arr);
}

function rightout(){
	if(arr.length === 0){return false;}
	arr.pop();
	console.log(arr);
}
function init() {
	btn1 = document.getElementById("leftin");
  	btn1.onclick = leftin;
  	btn2 = document.getElementById("rightin");
  	btn2.onclick = rightin;
  	btn3 = document.getElementById("leftout");
  	btn3.onclick = leftout;
  	btn4 = document.getElementById("rightout");
  	btn4.onclick = rightout;
}

init();

