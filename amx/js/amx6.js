//导航条
var header = document.querySelector("header");
var a = header.querySelectorAll("a");
for(var i = 0; i < a.length; i++) {
	a[i].onclick = function() {
		for(var j = 0; j < a.length; j++) {

			a[j].className = ""
		}
		this.className = "active"
	}
}
//轮播图
var div_lb = document.querySelector(".lb");
var pic = div_lb.querySelector(".pic"); //装轮播图片的div
var imgs = pic.children; //轮播图片
var lis = div_lb.querySelectorAll("li"); //切换的li
var j = 0;
for(var i = 0; i < lis.length; i++) {
	lis[i].onclick = function() {
		var z = this.getAttribute("al");
		for(var j = 0; j < lis.length; j++) {
			lis[j].className = "";
			imgs[j].className = "";
		}
		lis[z].className = "active";
		imgs[z].className = "active";
	}
}
timer = setInterval(function() {
	j++;
	if(j == 4) {
		j = 0;
	}
	for(var i = 0; i < imgs.length; i++) {
		imgs[i].className = "";
		lis[i].className = "";
	}
	imgs[j].className = "active";
	lis[j].className = "active";
}, 1500)
pic.onmouseover = function() {
	clearInterval(timer);
	timer: null;
}
pic.onmouseout = function() {
	timer = setInterval(function() {
		j++;
		if(j == 4) {
			j = 0;
		}
		for(var i = 0; i < imgs.length; i++) {
			imgs[i].className = "";
			lis[i].className = "";
		}
		imgs[j].className = "active";
		lis[j].className = "active";
	}, 1500)
}

//关于我们的导航条--选项卡效果
var newsUl = document.querySelector(".newsUl");
var lis1 = newsUl.querySelectorAll("li");
var sy = document.querySelector(".sy");
var span = sy.querySelectorAll("span");
lis1[1].firstElementChild.firstElementChild.style.color = "red";
lis1[1].lastElementChild.style.opacity = "1";
span[3].style.display="inline-block";
span[2].style.display="none";
//连接数据库
//f1();
function f1() {
	var xhr = getXhr();
	xhr.open("GET", "amx.php?hide=7");
	xhr.send(null);
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			var data = JSON.parse(xhr.responseText)[0];
			var us = document.querySelector(".us");
			var usL = document.createElement("div"); //左边的内容盒子
			var ul = document.createElement("ul");
			for(var i = 1; i < data.length - 1; i++) {
				usL.className = "usL l";
				var li1 = document.createElement("li"); //第一行
				var a1 = document.createElement("a");
				var h41 = document.createElement("h4");
				var span1 = document.createElement("span"); //年份
				span1.innerHTML = data[i][0].slice(0, 4);
				span1.innerHTML = data[i].slice(0, 4);
				h41.appendChild(span1);
				var span2 = document.createElement("span"); //月份
				span2.innerHTML = " " + data[i].slice(5, 7);
				h41.appendChild(span2);
				var span3 = document.createElement("span"); //日期
				span3.innerHTML = data[i].slice(7, 9);
				h41.appendChild(span3);
				a1.appendChild(h41);
				var hr = document.createElement("hr");
				a1.appendChild(hr);
				var img3 = document.createElement("img"); //小剪刀
				img3.src = "images/pic28.png";
				a1.appendChild(img3)
				var p1 = document.createElement("p"); //内容
				p1.innerHTML = data[i].split("&")[1];
				a1.appendChild(p1);
				li1.appendChild(a1);
				ul.appendChild(li1);
				usL.appendChild(ul);
			}
			us.appendChild(usL);
			var usR = document.createElement("div");
			usR.className = "usR r";
			var img = document.createElement("img");
			img.src = data[5];
			var img2 = document.createElement("img");
			img2.src = data[5];
			usR.appendChild(img);
			usR.appendChild(img2);
			var img1 = document.createElement("img");
			img1.src = "images/pic20.png";
			usR.appendChild(img1);
			var div1 = document.createElement("div");
			usR.appendChild(div1);
			us.appendChild(usR)
		}
	}

	function getXhr() {
		var xhr = null;
		if(XMLHttpRequest) {
			xhr = new XMLHttpRequest();
		} else {
			xhr = new ActiveXObject("Microsoft.XMLHttp");
		}
		return xhr;
	}
}
var us = document.querySelector(".us");
lis1[0].onclick = function() {
	us.innerHTML = "";
	var x = this.getAttribute("al");
	for(var j = 2; j < span.length; j++) {
		span[j].style.display = "none";
	}
	span[x].style.display = "inline-block";
	for(var k = 0; k < lis1.length; k++) {
		lis1[k].firstElementChild.firstElementChild.style.color = "";
		lis1[k].lastElementChild.style.opacity = "0";
	}
	this.firstElementChild.firstElementChild.style.color = "red";
	this.lastElementChild.style.opacity = "1";
	f1();
}
lis1[1].onclick = function() {
	var usL=document.querySelector(".usL");
	var usR=document.querySelector(".usR");
	var usT=document.querySelector(".usT");
	var usB=document.querySelector(".usB");
	usL.innerHTML = "";
	usR.innerHTML = "";
//	usT.style.display: "block";
//	usB.style.display: "block";
	var x = this.getAttribute("al");
	for(var j = 2; j < span.length; j++) {
		span[j].style.display = "none";
	}
	span[x].style.display = "inline-block";

	for(var k = 0; k < lis1.length; k++) {
		lis1[k].firstElementChild.style.color = "";
		lis1[k].lastElementChild.style.opacity = "0";
	}
	this.firstElementChild.style.color = "red";
	this.lastElementChild.style.opacity = "1";
}