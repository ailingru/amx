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
var $li = $(".newsUl>li>span");
var $span = $(".sy>span:gt(1)")
var $yc = $(".yc");
var $us = $(".us");
$li.click(e => {
	var target = e.target;
	$us.html("")
	$(target).css("color", "red");
	$yc.css("opacity", "0")
	$(target).next().css("opacity", "1");
	$(target).parent().siblings().children().css("color", "#333");
	if($(target).html() == "刘清扬") {
		$($span[0]).css("display", "inline-block");
		$($span[0]).attr("class", "active");
		$span[1].style.display = "none";
		$span[2].style.display = "none";
		$span[3].style.display = "none";
		$($span[0]).siblings().removeAttr("class", "active")
		lqy();
	} else if($(target).html() == "韩璐璐") {
		$($span[1]).css("display", "inline-block");
		$($span[1]).attr("class", "active");
		$span[0].style.display = "none";
		$span[2].style.display = "none";
		$span[3].style.display = "none";
		hll();
		$($span[1]).siblings().removeAttr("class", "active")
	} else if($(target).html() == "周翔宇") {
		$($span[2]).css("display", "inline-block");
		$($span[2]).attr("class", "active");
		$span[1].style.display = "none";
		$span[0].style.display = "none";
		$span[3].style.display = "none";
		zxy();
		$($span[2]).siblings().removeAttr("class", "active")
	} else if($(target).html() == "罗峥") {
		$($span[3]).css("display", "inline-block");
		$($span[3]).attr("class", "active");
		$span[1].style.display = "none";
		$span[2].style.display = "none";
		$span[0].style.display = "none";
		lz();
		$($span[3]).siblings().removeAttr("class", "active")
	}
})
lqy();

function lqy() {
	var xhr = getXhr();
	xhr.open("GET", "amx.php?hide=8");
	xhr.send(null);
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			var data = JSON.parse(xhr.responseText);
			var $usT = $(`<div class='usT'></div>`);
			var $cont = $(`<div class='cont'></div>`);
			var $cont1 = $(`<div class='cont1'></div>`);
			var $h5 = $(`<h5></h5>`);
			var $span1 = $(`<span>生平简介   </span>`);
			var $span2 = $(`<span>DESIGN CONCEPT</span>`);
			$h5.append($span1);
			$h5.append($span2);
			var $img = $(`<img src='images/pic28.png'>`);
			var $p = $(`<p></p>`);
			var pH = data[0][1];
			$p.html(pH);
			$cont1.append($h5);
			$cont1.append($img);
			$cont1.append($p);
			$cont.append($cont1); //生平简介
			var $cont2 = $(`<div class='cont1'></div>`);
			var $h51 = $(`<h5></h5>`);
			var $span3 = $(`<span>设计风格    </span>`);
			var $span4 = $(`<span>DESIGN CONCEPT</span>`);
			$h51.append($span3);
			$h51.append($span4);
			var $img1 = $(`<img src='images/pic28.png'>`);
			var $p1 = $(`<p></p>`);
			var pH1 = data[0][2];
			$p1.html(data[0][2]);
			$cont2.append($h51);
			$cont2.append($img1);
			$cont2.append($p1);
			$cont.append($cont2); //设计风格
			$usT.append($cont);
			var $img2 = $(`<img>`);
			$img2.attr("src", `${data[0][3]}`);
			$usT.append($img2);
			var $usB = $(`<div class='usB'></div>`);
			var $usBT = $(`<div class='usBT'></div>`);
			var $h52 = $(`<h5></h5>`);
			var $span5 = $(`<span>设计风格</span>`);
			var $span6 = $(`<span>DESIGN CONCEPT</span>`);
			$h52.append($span5);
			$h52.append($span6);
			var $hr = $(`<hr/>`);
			$usBT.append($h52);
			$usBT.append($hr);
			var $img3 = $(`<img src='images/pic28.png'>`);
			$usBT.append($img3);
			var $ul = $(`<ul></ul>`);
			var $li1 = $("<li></li>");
			var $img4 = $(`<img>`);
			var imgs = data[0][5].split("&");
			$img4.attr("src", `${imgs[0]}`);
			$li1.append($img4);
			var $li2 = $(`<li></li>`);
			var $img5 = $(`<img>`);
			$img5.attr("src", `${imgs[1]}`);
			$li2.append($img5);
			var $li3 = $(`<li></li>`);
			var $img6 = $(`<img>`);
			$img6.attr("src", `${imgs[2]}`);
			$li3.append($img6);
			var $li4 = $("<li></li>");
			var $img7 = $(`<img>`);
			$img7.attr("src", `${imgs[3]}`);
			$li4.append($img7);
			$ul.append($li1);
			$ul.append($li2);
			$ul.append($li3);
			$ul.append($li4);
			var $ul1 = $(`<ul></ul>`);
			var $li5 = $("<li class='btn btn-default text-center'>&lt;</li>");
			var $li6 = $("<li class='btn btn-default text-center'>1</li>");
			var $li7 = $("<li class='btn btn-default text-center'>2</li>");
			var $li8 = $("<li class='btn btn-default text-center'>&gt;</li>");
			$ul1.append($li5);
			$ul1.append($li6);
			$ul1.append($li7);
			$ul1.append($li8);
			$usB.append($usBT)
			$usB.append($ul);
			$usB.append($ul1);

		}
		$us.append($usT);
		$us.append($usB);
		var q = 0;
		$(".btn").click((e) => {
			q++;
			e = e || window.event;
			var target = e.target || e.srcElement;
			var $img = $("ul:eq(3)>li>img");
			if($(target).html() == 1) {
				$(target).prev().css({
					"background": "#f5f5f5",
					"color": "#fff"
				})
				$(target).next().next().css({
					"background": "#fff",
					"color": "#777",
				})
				for(var i = 0; i < $img.length; i++) {
					$img[i].src = imgs[i];
				}
				$(target).siblings().css("color", "#777");
				$(target).css("color", "#e4393c");
			} else if($(target).html() == 2) {
				$(target).prev().prev().css({
					"background": "#fff",
					"color": "#777",
				})
				$(target).next().css({
					"background": "#f5f5f5",
					"color": "#fff"
				})
				for(var i = 0; i < $img.length; i++) {
					$img[i].src = imgs[i + 4];
				}
				$(target).siblings().css("color", "#777");
				$(target).css("color", "#e4393c");
			} else if($(target).html() == "&gt;") {
				$(target).siblings().css("color", "#777");
				$(target).prev().css("color", "red");
				if(q % 2 == 1) {
					for(var i = 0; i < $img.length; i++) {
						$img[i].src = imgs[i + 4];
					}
				}
			} else {
				$(target).siblings().css("color", "#777");
				$(target).next().css("color", "red");
				if(q % 2 == 0) {
					for(var i = 0; i < $img.length; i++) {
						$img[i].src = imgs[i];
					}
				}
			}
		})
	}
}

function hll() {
	var xhr = getXhr();
	xhr.open("GET", "amx.php?hide=9");
	xhr.send(null);
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			var data = JSON.parse(xhr.responseText);
			var $usT = $(`<div class='usT'></div>`);
			var $cont = $(`<div class='cont'></div>`);
			var $cont1 = $(`<div class='cont1'></div>`);
			var $h5 = $(`<h5></h5>`);
			var $span1 = $(`<span>生平简介   </span>`);
			var $span2 = $(`<span>DESIGN CONCEPT</span>`);
			$h5.append($span1);
			$h5.append($span2);
			var $img = $(`<img src='images/pic28.png'>`);
			var $p = $(`<p></p>`);
			var pH = data[0][1];
			$p.html(pH);
			$cont1.append($h5);
			$cont1.append($img);
			$cont1.append($p);
			$cont.append($cont1); //生平简介
			var $cont2 = $(`<div class='cont1'></div>`);
			var $h51 = $(`<h5></h5>`);
			var $span3 = $(`<span>设计风格    </span>`);
			var $span4 = $(`<span>DESIGN CONCEPT</span>`);
			$h51.append($span3);
			$h51.append($span4);
			var $img1 = $(`<img src='images/pic28.png'>`);
			var $p1 = $(`<p></p>`);
			var pH1 = data[0][2];
			$p1.html(data[0][2]);
			$cont2.append($h51);
			$cont2.append($img1);
			$cont2.append($p1);
			$cont.append($cont2); //设计风格
			$usT.append($cont);
			var $img2 = $(`<img>`);
			$img2.attr("src", `${data[0][3]}`);
			$usT.append($img2);
			var $usB = $(`<div class='usB'></div>`);
			var $usBT = $(`<div class='usBT'></div>`);
			var $h52 = $(`<h5></h5>`);
			var $span5 = $(`<span>设计风格</span>`);
			var $span6 = $(`<span>DESIGN CONCEPT</span>`);
			$h52.append($span5);
			$h52.append($span6);
			var $hr = $(`<hr/>`);
			$usBT.append($h52);
			$usBT.append($hr);
			var $img3 = $(`<img src='images/pic28.png'>`);
			$usBT.append($img3);
			var $ul = $(`<ul></ul>`);
			var $li1 = $("<li></li>");
			var $img4 = $(`<img>`);
			var imgs = data[0][5].split("&");
			$img4.attr("src", `${imgs[0]}`);
			$li1.append($img4);
			var $li2 = $(`<li></li>`);
			var $img5 = $(`<img>`);
			$img5.attr("src", `${imgs[1]}`);
			$li2.append($img5);
			var $li3 = $(`<li></li>`);
			var $img6 = $(`<img>`);
			$img6.attr("src", `${imgs[2]}`);
			$li3.append($img6);
			var $li4 = $("<li></li>");
			var $img7 = $(`<img>`);
			$img7.attr("src", `${imgs[3]}`);
			$li4.append($img7);
			$ul.append($li1);
			$ul.append($li2);
			$ul.append($li3);
			$ul.append($li4);
			var $ul1 = $(`<ul></ul>`);
			var $li5 = $("<li class='btn btn-default text-center'><</li>");
			var $li6 = $("<li class='btn btn-default text-center'>1</li>");
			var $li7 = $("<li class='btn btn-default text-center'>2</li>");
			var $li9 = $("<li class='btn btn-default text-center'>3</li>");
			var $li8 = $("<li class='btn btn-default text-center'>></li>");
			$ul1.append($li5);
			$ul1.append($li6);
			$ul1.append($li7);
			$ul1.append($li9);
			$ul1.append($li8);
			$usB.append($usBT)
			$usB.append($ul);
			$usB.append($ul1);

			$us.append($usT);
			$us.append($usB);
			var q = 0;
			$(".btn").click((e) => {
				q++;
				e = e || window.event;
				var target = e.target || e.srcElement;
				var $img = $("ul:eq(3)>li>img");
				if($(target).html() == 1) {
					$(target).prev().css({
						"background": "#f5f5f5",
						"color": "#fff"
					})
					$(target).next().next().next().css({
						"background": "#fff",
						"color": "#777",
					})
					for(var i = 0; i < $img.length; i++) {
						$img[i].src = imgs[i];
					}
					$(target).siblings().css("color", "#777");
					$(target).css("color", "#e4393c");
				} else if($(target).html() == 2) {
					$(target).next().css({
						"background": "#f5f5f5",
						"color": "#fff"
					})
					for(var i = 0; i < $img.length; i++) {
						$img[i].src = imgs[i + 4];
					}
					$(target).siblings().css("color", "#777");
					$(target).css("color", "#e4393c");
				} else if($(target).html() == 3) {
					$(target).prev().prev().prev().css({
						"background": "#fff",
						"color": "#777",
					})
					$(target).next().css({
						"background": "#f5f5f5",
						"color": "#fff"
					})
					for(var i = 0; i < $img.length; i++) {
						$img[i].src = imgs[i + 8];
					}
					$(target).siblings().css("color", "#777");
					$(target).css("color", "#e4393c");
				} else if($(target).html() == "&gt;") {
					$(target).siblings().css("color", "#777");
					$(target).prev().css("color", "red");
					if(q % 2 == 1) {
						for(var i = 0; i < $img.length; i++) {
							$img[i].src = imgs[i + 4];
						}
					} else {
						for(var i = 0; i < $img.length; i++) {
							$img[i].src = imgs[i + 8];
						}
					}
				} else {
					$(target).siblings().css("color", "#777");
					$(target).next().css("color", "red");
					if(q % 2 == 0) {
						for(var i = 0; i < $img.length; i++) {
							$img[i].src = imgs[i + 4];
						}
					} else {
						for(var i = 0; i < $img.length; i++) {
							$img[i].src = imgs[i];
						}
					}
				}
			})

		}

	}
}

function zxy() {
	var xhr = getXhr();
	xhr.open("GET", "amx.php?hide=10");
	xhr.send(null);
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			var data = JSON.parse(xhr.responseText);
			var $usT = $(`<div class='usT'></div>`);
			var $cont = $(`<div class='cont'></div>`);
			var $cont1 = $(`<div class='cont1'></div>`);
			var $h5 = $(`<h5></h5>`);
			var $span1 = $(`<span>生平简介   </span>`);
			var $span2 = $(`<span>DESIGN CONCEPT</span>`);
			$h5.append($span1);
			$h5.append($span2);
			var $img = $(`<img src='images/pic28.png'>`);
			var $p = $(`<p></p>`);
			var pH = data[0][1];
			$p.html(pH);
			$cont1.append($h5);
			$cont1.append($img);
			$cont1.append($p);
			$cont.append($cont1); //生平简介
			var $cont2 = $(`<div class='cont1'></div>`);
			var $h51 = $(`<h5></h5>`);
			var $span3 = $(`<span>设计风格    </span>`);
			var $span4 = $(`<span>DESIGN CONCEPT</span>`);
			$h51.append($span3);
			$h51.append($span4);
			var $img1 = $(`<img src='images/pic28.png'>`);
			var $p1 = $(`<p></p>`);
			var pH1 = data[0][2];
			$p1.html(data[0][2]);
			$cont2.append($h51);
			$cont2.append($img1);
			$cont2.append($p1);
			$cont.append($cont2); //设计风格
			$usT.append($cont);
			var $img2 = $(`<img>`);
			$img2.attr("src", `${data[0][3]}`);
			$usT.append($img2);
			var $usB = $(`<div class='usB'></div>`);
			var $usBT = $(`<div class='usBT'></div>`);
			var $h52 = $(`<h5></h5>`);
			var $span5 = $(`<span>设计风格</span>`);
			var $span6 = $(`<span>DESIGN CONCEPT</span>`);
			$h52.append($span5);
			$h52.append($span6);
			var $hr = $(`<hr/>`);
			$usBT.append($h52);
			$usBT.append($hr);
			var $img3 = $(`<img src='images/pic28.png'>`);
			$usBT.append($img3);
			var $ul = $(`<ul></ul>`);
			var $li1 = $("<li></li>");
			var $img4 = $(`<img>`);
			var imgs = data[0][5].split("&");
			$img4.attr("src", `${imgs[8]}`);
			$li1.append($img4);
			var $li2 = $(`<li></li>`);
			var $img5 = $(`<img>`);
			$img5.attr("src", `${imgs[7]}`);
			$li2.append($img5);
			var $li3 = $(`<li></li>`);
			var $img6 = $(`<img>`);
			$img6.attr("src", `${imgs[9]}`);
			$li3.append($img6);
			var $li4 = $("<li></li>");
			var $img7 = $(`<img>`);
			$img7.attr("src", `${imgs[5]}`);
			$li4.append($img7);
			$ul.append($li1);
			$ul.append($li2);
			$ul.append($li3);
			$ul.append($li4);
			var $ul1 = $(`<ul></ul>`);
			var $li5 = $("<li class='btn btn-default text-center'><</li>");
			var $li6 = $("<li class='btn btn-default text-center'>1</li>");
			var $li7 = $("<li class='btn btn-default text-center'>2</li>");
			var $li9 = $("<li class='btn btn-default text-center'>3</li>");
			var $li8 = $("<li class='btn btn-default text-center'>></li>");
			$ul1.append($li5);
			$ul1.append($li6);
			$ul1.append($li7);
			$ul1.append($li9);
			$ul1.append($li8);
			$usB.append($usBT)
			$usB.append($ul);
			$usB.append($ul1);
			$us.append($usT);
			$us.append($usB);
			var q = 0;
			$(".btn").click((e) => {
				q++;
				e = e || window.event;
				var target = e.target || e.srcElement;
				var $img = $("ul:eq(3)>li>img");
				if($(target).html() == 1) {
					$(target).prev().css({
						"background": "#f5f5f5",
						"color": "#fff"
					})
					$(target).next().next().next().css({
						"background": "#fff",
						"color": "#777",
					})
					for(var i = 0; i < $img.length; i++) {
						$img[i].src = imgs[i];
					}
					$(target).siblings().css("color", "#777");
					$(target).css("color", "#e4393c");
				} else if($(target).html() == 2) {
					$(target).next().css({
						"background": "#f5f5f5",
						"color": "#fff"
					})
					for(var i = 0; i < $img.length; i++) {
						$img[i].src = imgs[i + 4];
					}
					$(target).siblings().css("color", "#777");
					$(target).css("color", "#e4393c");
				} else if($(target).html() == 3) {
					$(target).prev().prev().prev().css({
						"background": "#fff",
						"color": "#777",
					})
					$(target).next().css({
						"background": "#f5f5f5",
						"color": "#fff"
					})
					for(var i = 0; i < $img.length; i++) {
						$img[i].src = imgs[i + 8];
					}
					$(target).siblings().css("color", "#777");
					$(target).css("color", "#e4393c");
				} else if($(target).html() == "&gt;") {
					$(target).siblings().css("color", "#777");
					$(target).prev().css("color", "red");
					if(q % 2 == 1) {
						for(var i = 0; i < $img.length; i++) {
							$img[i].src = imgs[i + 4];
						}
					} else {
						for(var i = 0; i < $img.length; i++) {
							$img[i].src = imgs[i + 8];
						}
					}
				} else {
					$(target).siblings().css("color", "#777");
					$(target).next().css("color", "red");
					if(q % 2 == 0) {
						for(var i = 0; i < $img.length; i++) {
							$img[i].src = imgs[i + 4];
						}
					} else {
						for(var i = 0; i < $img.length; i++) {
							$img[i].src = imgs[i];
						}
					}
				}
			})

		}

	}
}

function lz() {
	var xhr = getXhr();
	xhr.open("GET", "amx.php?hide=11");
	xhr.send(null);
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			var data = JSON.parse(xhr.responseText);
			var $usT = $(`<div class='usT'></div>`);
			var $cont = $(`<div class='cont'></div>`);
			var $cont1 = $(`<div class='cont1'></div>`);
			var $h5 = $(`<h5></h5>`);
			var $span1 = $(`<span>生平简介   </span>`);
			var $span2 = $(`<span>DESIGN CONCEPT</span>`);
			$h5.append($span1);
			$h5.append($span2);
			var $img = $(`<img src='images/pic28.png'>`);
			var $p = $(`<p></p>`);
			var pH = data[0][1];
			$p.html(pH);
			$cont1.append($h5);
			$cont1.append($img);
			$cont1.append($p);
			$cont.append($cont1); //生平简介
			var $cont2 = $(`<div class='cont1'></div>`);
			var $h51 = $(`<h5></h5>`);
			var $span3 = $(`<span>设计风格    </span>`);
			var $span4 = $(`<span>DESIGN CONCEPT</span>`);
			$h51.append($span3);
			$h51.append($span4);
			var $img1 = $(`<img src='images/pic28.png'>`);
			var $p1 = $(`<p></p>`);
			var pH1 = data[0][2];
			$p1.html(data[0][2]);
			$cont2.append($h51);
			$cont2.append($img1);
			$cont2.append($p1);
			$cont.append($cont2); //设计风格
			$usT.append($cont);
			var $img2 = $(`<img>`);
			$img2.attr("src", `${data[0][3]}`);
			$usT.append($img2);
			var $usB = $(`<div class='usB'></div>`);
			var $usBT = $(`<div class='usBT'></div>`);
			var $h52 = $(`<h5></h5>`);
			var $span5 = $(`<span>设计风格</span>`);
			var $span6 = $(`<span>DESIGN CONCEPT</span>`);
			$h52.append($span5);
			$h52.append($span6);
			var $hr = $(`<hr/>`);
			$usBT.append($h52);
			$usBT.append($hr);
			var $img3 = $(`<img src='images/pic28.png'>`);
			$usBT.append($img3);
			var $ul = $(`<ul></ul>`);
			var $li1 = $("<li></li>");
			var $img4 = $(`<img>`);
			var imgs = data[0][5].split("&");
			$img4.attr("src", `${imgs[0]}`);
			$li1.append($img4);
			var $li2 = $(`<li></li>`);
			var $img5 = $(`<img>`);
			$img5.attr("src", `${imgs[3]}`);
			$li2.append($img5);
			var $li3 = $(`<li></li>`);
			var $img6 = $(`<img>`);
			$img6.attr("src", `${imgs[4]}`);
			$li3.append($img6);
			var $li4 = $("<li></li>");
			var $img7 = $(`<img>`);
			$img7.attr("src", `${imgs[5]}`);
			$li4.append($img7);
			$ul.append($li1);
			$ul.append($li2);
			$ul.append($li3);
			$ul.append($li4);
			var $ul1 = $(`<ul></ul>`);
			var $li5 = $("<li class='btn btn-default text-center'><</li>");
			var $li6 = $("<li class='btn btn-default text-center'>1</li>");
			var $li7 = $("<li class='btn btn-default text-center'>2</li>");
			var $li9 = $("<li class='btn btn-default text-center'>3</li>");
			var $li8 = $("<li class='btn btn-default text-center'>></li>");
			$ul1.append($li5);
			$ul1.append($li6);
			$ul1.append($li7);
			$ul1.append($li9);
			$ul1.append($li8);
			$usB.append($usBT)
			$usB.append($ul);
			$usB.append($ul1);
			$us.append($usT);
			$us.append($usB);
			var q = 0;
			$(".btn").click((e) => {
				q++;
				e = e || window.event;
				var target = e.target || e.srcElement;
				var $img = $("ul:eq(3)>li>img");
				if($(target).html() == 1) {
					$(target).prev().css({
						"background": "#f5f5f5",
						"color": "#fff"
					})
					$(target).next().next().next().css({
						"background": "#fff",
						"color": "#777",
					})
					for(var i = 0; i < $img.length; i++) {
						$img[i].src = imgs[i];
					}
					$(target).siblings().css("color", "#777");
					$(target).css("color", "#e4393c");
				} else if($(target).html() == 2) {
					$(target).next().css({
						"background": "#f5f5f5",
						"color": "#fff"
					})
					for(var i = 0; i < $img.length; i++) {
						$img[i].src = imgs[i + 4];
					}
					$(target).siblings().css("color", "#777");
					$(target).css("color", "#e4393c");
				} else if($(target).html() == 3) {
					$(target).prev().prev().prev().css({
						"background": "#fff",
						"color": "#777",
					})
					$(target).next().css({
						"background": "#f5f5f5",
						"color": "#fff"
					})
					for(var i = 0; i < $img.length; i++) {
						$img[i].src = imgs[i + 8];
					}
					$(target).siblings().css("color", "#777");
					$(target).css("color", "#e4393c");
				} else if($(target).html() == "&gt;") {
					$(target).siblings().css("color", "#777");
					$(target).prev().css("color", "red");
					if(q % 2 == 1) {
						for(var i = 0; i < $img.length; i++) {
							$img[i].src = imgs[i + 4];
						}
					} else {
						for(var i = 0; i < $img.length; i++) {
							$img[i].src = imgs[i + 8];
						}
					}
				} else {
					$(target).siblings().css("color", "#777");
					$(target).next().css("color", "red");
					if(q % 2 == 0) {
						for(var i = 0; i < $img.length; i++) {
							$img[i].src = imgs[i + 4];
						}
					} else {
						for(var i = 0; i < $img.length; i++) {
							$img[i].src = imgs[i];
						}
					}
				}
			})

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