var input = document.getElementById("input");
var leftIn = document.getElementById("leftin");
var rightIn = document.getElementById("rightin");
var leftOut = document.getElementById("leftout");
var rightOut = document.getElementById("rightout");
var arrSort = document.getElementById("arrsort");
var div = document.getElementById("div");


function rightin(){
	if(input.value == ""){
		alert("请输入一个数字");
	}else if(!isNaN(input.value)){
		if(Number(input.value) >= 10 && Number(input.value) <= 100){
			var txt = document.createElement("div");
			div.appendChild(txt);
			txt.setAttribute("class","text");
			txt.style.height = input.value + "px";
			document.getElementById("input").value = "";
		}else{
			alert("输入范围：10-100");
		}
	}else{
		alert("请输入数字！")
	}
}

function leftin(){
	if(input.value == ""){
		alert("请输入一个数字");
	}else if(!isNaN(input.value)){
		if(Number(input.value) >= 10 && Number(input.value) <= 100){
			var txt = document.createElement("div");
			div.insertBefore(txt,div.firstChild);
			txt.setAttribute("class","text");
			txt.style.height = input.value + "px";
			document.getElementById("input").value = "";
		}else{
			alert("输入范围：10-100");
		}
		
	}else{
		alert("请输入数字！");
	}
}

function rightout(){
	var divList = document.getElementsByTagName("div");
	alert(divList[divList.length-1].innerHTML);
	divList[divList.length-1].remove();
}

function leftout(){
	var divList = div.getElementsByTagName("div");
	alert(divList[0].innerHTML);
	divList[0].remove();
}

 function Sort1(){
 	var divList = div.getElementsByTagName("div");
	var heightList = new Array();
	for(var i=0;i<divList.length;i++){
		heightList.push(divList[i].offsetHeight);
	}
 	var Sort2 = selectionSort(heightList);
 	var len = Sort2.length;
 	if(Sort2.length == 0){
 		alert("参数为空");
 		return false;
 	}else{
 		div.innerHTML = "";
 		for(var i = 0; i<len; i++){
    		var txt = document.createElement("div");
			div.insertBefore(txt,div.firstChild);
			txt.setAttribute("class","text");
			txt.style.height = Sort2[i] + "px";
		}
 	}
    }

 function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {     //寻找最小的数
                minIndex = j;                 //将最小数的索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

function init() {
  	leftIn.onclick = leftin;
  	rightIn.onclick = rightin;
  	leftOut.onclick = leftout;
  	rightOut.onclick = rightout;
  	arrSort.onclick = Sort1;
}
init();