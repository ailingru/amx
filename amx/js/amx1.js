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

//连接数据库--新闻中心
first();
var news = document.querySelector(".news"); //父标签
function first() {
	var xhr = getXhr();
	xhr.open("GET", "amx.php?hide=0");
	xhr.send(null);
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			var data = JSON.parse(xhr.responseText);
			data.reverse();

			for(var i = 0; i < data.length; i++) {
				var div = document.createElement("div");
				div.className = "box"; //外层盒子
				var div1 = document.createElement("div"); //装日期的盒子
				var div2 = document.createElement("div"); //时间
				div2.className = "red";
				div2.innerHTML = data[i][1].slice(5);
				div1.appendChild(div2);
				var div3 = document.createElement("div"); //年份
				div3.innerHTML = data[i][1].slice(0, 4);
				div1.appendChild(div3);
				var div4 = document.createElement("div"); //内容的外层盒子
				var a = document.createElement("a");
				var p = document.createElement("p");
				p.className = "red";
				p.innerHTML = data[i][2];
				var h5 = document.createElement("h5");
				h5.innerHTML = data[i][3];
				a.appendChild(p);
				a.appendChild(h5);
				div4.appendChild(a);
				div.appendChild(div1);
				div.appendChild(div4);
				news.appendChild(div);
			}
			var p = news.getElementsByTagName("p");
//			console.log(p);
			p[0].onclick = function() {
				location = "amx4.html";
			}
			p[1].onclick = function() {
				location = "amx5.html";
			}
			p[2].onclick = function() {
				location = "amx2.html";
			}
			p[3].onclick = function() {
				location = "amx3.html";
			}
		}
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

//数字滚动条
var gdt = document.querySelector(".gdt");
var btns = gdt.querySelectorAll("button");
for(var i = 0; i < btns.length; i++) {
	btns[i].onclick = function() {
		for(var i = 0; i < btns.length; i++) {
			btns[i].style.color = "";
		}
		this.style.color = "red";
		if(this.innerHTML == "首页") {
			location = "index.html";
		} else if(this.innerHTML == "1") {
			var xhr = getXhr();
			xhr.open("GET", "amx.php?hide=0");
			xhr.send(null);
			xhr.onreadystatechange = function() {
				if(xhr.readyState == 4 && xhr.status == 200) {
					var data = JSON.parse(xhr.responseText);
					data.reverse();
					var box = document.querySelectorAll(".box");
					for(var i = 0; i < box.length; i++) {
						var div = box[i].querySelectorAll("div");
						var p = box[i].querySelectorAll("p");
						var h5 = box[i].querySelectorAll("h5");
						for(var j = 0; j < data.length; j++) {
							div[1].innerHTML = data[j][1].slice(5);
							div[2].innerHTML = data[i][1].slice(0, 4);
							p[0].innerHTML = data[i][2];
							h5[0].innerHTML = data[i][3];
						}
					}

				}
			}
		} else if(this.innerHTML == "2") {
			var xhr = getXhr();
			xhr.open("GET", "amx.php?hide=1");
			xhr.send(null);
			xhr.onreadystatechange = function() {
				if(xhr.readyState == 4 && xhr.status == 200) {
					var data = JSON.parse(xhr.responseText);
					var box = document.querySelectorAll(".box");
					for(var i = 0; i < box.length; i++) {
						var div = box[i].querySelectorAll("div");
						var p = box[i].querySelectorAll("p");
						var h5 = box[i].querySelectorAll("h5");
						for(var j = 0; j < data.length; j++) {
							div[1].innerHTML = data[j][1].slice(5);
							div[2].innerHTML = data[i][1].slice(0, 4);
							p[0].innerHTML = data[i][2];
							h5[0].innerHTML = data[i][3];
						}
					}

				}
			}
		} else if(this.innerHTML == "3") {
			var xhr = getXhr();
			xhr.open("GET", "amx.php?hide=2");
			xhr.send(null);
			xhr.onreadystatechange = function() {
				if(xhr.readyState == 4 && xhr.status == 200) {
					var data = JSON.parse(xhr.responseText);
					data.reverse();
					var box = document.querySelectorAll(".box");
					for(var i = 0; i < box.length; i++) {
						var div = box[i].querySelectorAll("div");
						var p = box[i].querySelectorAll("p");
						var h5 = box[i].querySelectorAll("h5");
						for(var j = 0; j < data.length; j++) {
							div[1].innerHTML = data[j][1].slice(5);
							div[2].innerHTML = data[i][1].slice(0, 4);
							p[0].innerHTML = data[i][2];
							h5[0].innerHTML = data[i][3];
						}
					}
				}
			}
		} else if(this.innerHTML == "4") {
			var xhr = getXhr();
			xhr.open("GET", "amx.php?hide=0");
			xhr.send(null);
			xhr.onreadystatechange = function() {
				if(xhr.readyState == 4 && xhr.status == 200) {
					var data = JSON.parse(xhr.responseText);

					var box = document.querySelectorAll(".box");
					for(var i = 0; i < box.length; i++) {
						var div = box[i].querySelectorAll("div");
						var p = box[i].querySelectorAll("p");
						var h5 = box[i].querySelectorAll("h5");
						for(var j = 0; j < data.length; j++) {
							div[1].innerHTML = data[j][1].slice(5);
							div[2].innerHTML = data[i][1].slice(0, 4);
							p[0].innerHTML = data[i][2];
							h5[0].innerHTML = data[i][3];
						}
					}

				}
			}
		} else if(this.innerHTML == "5") {
			var xhr = getXhr();
			xhr.open("GET", "amx.php?hide=0");
			xhr.send(null);
			xhr.onreadystatechange = function() {
				if(xhr.readyState == 4 && xhr.status == 200) {
					var data = JSON.parse(xhr.responseText);
					data.reverse();
					var box = document.querySelectorAll(".box");
					for(var i = 0; i < box.length; i++) {
						var div = box[i].querySelectorAll("div");
						var p = box[i].querySelectorAll("p");
						var h5 = box[i].querySelectorAll("h5");
						for(var j = 0; j < data.length; j++) {
							div[1].innerHTML = data[j][1].slice(5);
							div[2].innerHTML = data[i][1].slice(0, 4);
							p[0].innerHTML = data[i][2];
							h5[0].innerHTML = data[i][3];
						}
					}

				}
			}
		} else if(this.innerHTML == "6") {
			var xhr = getXhr();
			xhr.open("GET", "amx.php?hide=1");
			xhr.send(null);
			xhr.onreadystatechange = function() {
				if(xhr.readyState == 4 && xhr.status == 200) {
					var data = JSON.parse(xhr.responseText);
					var box = document.querySelectorAll(".box");
					for(var i = 0; i < box.length; i++) {
						var div = box[i].querySelectorAll("div");
						var p = box[i].querySelectorAll("p");
						var h5 = box[i].querySelectorAll("h5");
						for(var j = 0; j < data.length; j++) {
							div[1].innerHTML = data[j][1].slice(5);
							div[2].innerHTML = data[i][1].slice(0, 4);
							p[0].innerHTML = data[i][2];
							h5[0].innerHTML = data[i][3];
						}
					}

				}
			}
		} else if(this.innerHTML == "7") {
			var xhr = getXhr();
			xhr.open("GET", "amx.php?hide=2");
			xhr.send(null);
			xhr.onreadystatechange = function() {
				if(xhr.readyState == 4 && xhr.status == 200) {
					var data = JSON.parse(xhr.responseText);
					data.reverse();
					var box = document.querySelectorAll(".box");
					for(var i = 0; i < box.length; i++) {
						var div = box[i].querySelectorAll("div");
						var p = box[i].querySelectorAll("p");
						var h5 = box[i].querySelectorAll("h5");
						for(var j = 0; j < data.length; j++) {
							div[1].innerHTML = data[j][1].slice(5);
							div[2].innerHTML = data[i][1].slice(0, 4);
							p[0].innerHTML = data[i][2];
							h5[0].innerHTML = data[i][3];
						}
					}
				}
			}
		} else if(this.innerHTML == "8") {
			var xhr = getXhr();
			xhr.open("GET", "amx.php?hide=0");
			xhr.send(null);
			xhr.onreadystatechange = function() {
				if(xhr.readyState == 4 && xhr.status == 200) {
					var data = JSON.parse(xhr.responseText);

					var box = document.querySelectorAll(".box");
					for(var i = 0; i < box.length; i++) {
						var div = box[i].querySelectorAll("div");
						var p = box[i].querySelectorAll("p");
						var h5 = box[i].querySelectorAll("h5");
						for(var j = 0; j < data.length; j++) {
							div[1].innerHTML = data[j][1].slice(5);
							div[2].innerHTML = data[i][1].slice(0, 4);
							p[0].innerHTML = data[i][2];
							h5[0].innerHTML = data[i][3];
						}
					}

				}
			}
		} else if(this.innerHTML == "9") {
			var xhr = getXhr();
			xhr.open("GET", "amx.php?hide=0");
			xhr.send(null);
			xhr.onreadystatechange = function() {
				if(xhr.readyState == 4 && xhr.status == 200) {
					var data = JSON.parse(xhr.responseText);
					data.reverse();
					var box = document.querySelectorAll(".box");
					for(var i = 0; i < box.length; i++) {
						var div = box[i].querySelectorAll("div");
						var p = box[i].querySelectorAll("p");
						var h5 = box[i].querySelectorAll("h5");
						for(var j = 0; j < data.length; j++) {
							div[1].innerHTML = data[j][1].slice(5);
							div[2].innerHTML = data[i][1].slice(0, 4);
							p[0].innerHTML = data[i][2];
							h5[0].innerHTML = data[i][3];
						}
					}

				}
			}
		} else if(this.innerHTML == "10") {
			var xhr = getXhr();
			xhr.open("GET", "amx.php?hide=1");
			xhr.send(null);
			xhr.onreadystatechange = function() {
				if(xhr.readyState == 4 && xhr.status == 200) {
					var data = JSON.parse(xhr.responseText);
					var box = document.querySelectorAll(".box");
					for(var i = 0; i < box.length; i++) {
						var div = box[i].querySelectorAll("div");
						var p = box[i].querySelectorAll("p");
						var h5 = box[i].querySelectorAll("h5");
						for(var j = 0; j < data.length; j++) {
							div[1].innerHTML = data[j][1].slice(5);
							div[2].innerHTML = data[i][1].slice(0, 4);
							p[0].innerHTML = data[i][2];
							h5[0].innerHTML = data[i][3];
						}
					}

				}
			}
		} else if(this.innerHTML == "11") {
			var xhr = getXhr();
			xhr.open("GET", "amx.php?hide=2");
			xhr.send(null);
			xhr.onreadystatechange = function() {
				if(xhr.readyState == 4 && xhr.status == 200) {
					var data = JSON.parse(xhr.responseText);
					data.reverse();
					var box = document.querySelectorAll(".box");
					for(var i = 0; i < box.length; i++) {
						var div = box[i].querySelectorAll("div");
						var p = box[i].querySelectorAll("p");
						var h5 = box[i].querySelectorAll("h5");
						for(var j = 0; j < data.length; j++) {
							div[1].innerHTML = data[j][1].slice(5);
							div[2].innerHTML = data[i][1].slice(0, 4);
							p[0].innerHTML = data[i][2];
							h5[0].innerHTML = data[i][3];
						}
					}
				}
			}
		} else if(this.innerHTML == "12") {
			var xhr = getXhr();
			xhr.open("GET", "amx.php?hide=0");
			xhr.send(null);
			xhr.onreadystatechange = function() {
				if(xhr.readyState == 4 && xhr.status == 200) {
					var data = JSON.parse(xhr.responseText);

					var box = document.querySelectorAll(".box");
					for(var i = 0; i < box.length; i++) {
						var div = box[i].querySelectorAll("div");
						var p = box[i].querySelectorAll("p");
						var h5 = box[i].querySelectorAll("h5");
						for(var j = 0; j < data.length; j++) {
							div[1].innerHTML = data[j][1].slice(5);
							div[2].innerHTML = data[i][1].slice(0, 4);
							p[0].innerHTML = data[i][2];
							h5[0].innerHTML = data[i][3];
						}
					}

				}
			}
		}
	}
}