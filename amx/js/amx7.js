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

//连接数据库
