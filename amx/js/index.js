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
	if(j == 5) {
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
		if(j == 5) {
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

//产品展示
var nr=document.querySelector(".nr");
var p=nr.querySelectorAll("p");
for(var i=0;i<p.length;i++){
	p[i].onclick=function(){
		for(var j=0;j<p.length;j++){
			p[j].className="";
		}
		this.className="red";
	}
}


//设计团队
var team=document.querySelector(".team");
var mc=team.getElementsByClassName("mc");
var ps=team.querySelectorAll("p");
for(var i=0;i<mc.length;i++){
	ps[1].style.color="red";
	mc[1].style.background="rgba(0,0,0,0)";
	mc[i].onclick=function(){
		var z=this.getAttribute("al");		
		for(var j=0;j<mc.length;j++){
			mc[j].style.background="rgba(0,0,0,.5)";
			ps[j].style.color="";
		}
		this.style.background="rgba(0,0,0,0)";
		ps[z].style.color="red";
	}
}


//新闻动态
var inf=document.querySelector(".inf");
var num=inf.querySelectorAll(".num");
var ps1=inf.querySelectorAll("p");
for(var i=0;i<mc.length;i++){
	ps1[1].style.color="red";
	num[1].style.color="red";
	ps1[i].onclick=function(){
		var z=this.getAttribute("al");		
		for(var j=0;j<mc.length;j++){
			num[j].style.color="";
			ps1[j].style.color="";
		}
		this.style.color="red";
		num[z].style.color="red";
	}
}
