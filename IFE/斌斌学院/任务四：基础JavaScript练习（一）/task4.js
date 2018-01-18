var input = document.getElementById("input");
var leftIn = document.getElementById("leftin");
var rightIn = document.getElementById("rightin");
var leftOut = document.getElementById("leftout");
var rightOut = document.getElementById("rightout");
var div = document.getElementById("div");

function rightin(){
	if(input.value == ""){
		alert("请输入一个数字");
	}else if(!isNaN(input.value)){
		var txt = document.createElement("div");
		var txtVal = document.createTextNode(input.value);
		div.appendChild(txt);
		txt.appendChild(txtVal);
		txt.setAttribute("class","text");
		
		document.getElementById("input").value = "";
	}else{
		alert("请输入数字！")
	}

}

function leftin(){
	if(input.value == ""){
		alert("请输入一个数字");
	}else if(!isNaN(input.value)){
		var txt = document.createElement("div");
		var txtVal = document.createTextNode(input.value);
		div.insertBefore(txt,div.firstChild);
		txt.setAttribute("class","text");
		txt.appendChild(txtVal);
		document.getElementById("input").value = "";
	}else{
		alert("请输入数字！")
	}
}

function rightout(){
	var divList = document.getElementsByTagName("div");
	alert(divList[divList.length-1].innerHTML);
	divList[divList.length-1].remove();
}

function leftout(){
	var divList = document.getElementsByTagName("div");
	alert(divList[1].innerHTML);
	divList[1].remove();
}

function init() {
  	leftIn.onclick = leftin;
  	rightIn.onclick = rightin;
  	leftOut.onclick = leftout;
  	rightOut.onclick = rightout;
}
init();