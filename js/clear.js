"use strict";
	function fn(e) {
	var o=oPage.path();
	o.attr("stroke-width",12),o.attr("stroke","#ffef5c");
	var t=["M",0,0],n=0,f=null;
	f=setInterval(function() {
	t.push(e[n]),n++,o.attr("path",t.join(" ")),n==e.length&&clearInterval(f)
}
,15)}function penMove() {
	document.onmousemove=function(e) {
	oPen.style.left=e.pageX-oC.offsetLeft+"px",oPen.style.top=e.pageY-oC.offsetTop-oPen.offsetHeight+"px"
}
}document.onmousedown=function() {
	return!1
}
,-1!=window.navigator.userAgent.indexOf("MSIE")||-1!=window.navigator.userAgent.indexOf("11.0");
	var winW=document.documentElement.clientWidth,winH=document.documentElement.clientHeight,
	oPage=Raphael(winW/2-400,winH/2-310,800,600),
	aLine= {
	y:[/*司*/"M",70,55,"L",220,53,"M",218,50,"L",220,250,"M",220,245,"L",185,230,"M",85,85,"L",200,82,"M",105,119,"L",105,198,"M",102,122,"L",185,119,"M",181,115,"L",182,200,"M",103,196,"L",185,196,
	  /*智*/ "M",320,45,"L",285,85,"M",302,65,"L",360,65,"M",285,97,"L",372,97,"M",330,66,"L",290,130,"M",330,100,"L",370,130,"M",380,62,"L",380,110,"M",378,60,"L",428,60,"M",426,60,"L",426,110,"M",380,108,"L",426,108,"M",330,150,"L",330,245,"M",330,150,"L",436,150,"M",436,150,"L",436,245,"M",330,200,"L",436,200,"M",330,245,"L",436,245,
	  /*乾*/ "M",486,65,"L",586,65, "M",530,45,"L",525,100, "M",490,98,"L",490,175, "M",490,98,"L",580,98, "M",580,98,"L",580,175, "M",490,135,"L",580,135, "M",490,173,"L",580,173, "M",486,200,"L",586,200, "M",530,175,"L",525,248,"M",620,55,"L",590,98, "M",606,70,"L",680,70, "M",600,108,"L",675,108, "M",672,106,"L",595,225, "M",593,223,"L",675,223, "M",675,225,"L",665,198,]
}
;for(var name in aLine) {
	var data=[];
	data=aLine[name],fn(data)
}
var oC=document.querySelector(".c1"),gd=oC.getContext("2d");
	oC.width=winW,oC.height=winH,oC.onmousedown=function(e) {
	return document.onmousemove=null,gd.moveTo(e.pageX-oC.offsetLeft,e.pageY-oC.offsetTop),gd.lineWidth=10,gd.strokeStyle="#ffef5c",document.onmousemove=function(e) {
	gd.clearRect(0,0,winW,winH),gd.lineTo(e.pageX-oC.offsetLeft,e.pageY-oC.offsetTop),gd.stroke(),oPen.style.left=e.pageX-oC.offsetLeft+"px",oPen.style.top=e.pageY-oC.offsetTop-oPen.offsetHeight+"px"
}
,document.onmouseup=function() {
	document.onmouseup=null,document.onmousemove=null,penMove()
}
,!1};
	var oPen=document.querySelector(".pen");
	penMove();
	var oBtn=document.querySelector(".clear_btn");
	oBtn.onmousedown=function(e) {
	document.onmousemove=null;
	var o=e||event,t=o.clientX-oBtn.offsetLeft;
	return document.onmousemove=function(e) {
	var o=e||event,n=o.clientX-t;
	-50>n?n=-50:n>oBtn.parentNode.offsetWidth-oBtn.offsetWidth+50&&(n=oBtn.parentNode.offsetWidth-oBtn.offsetWidth+50),oBtn.style.left=n+"px",oPen.style.left=e.pageX-oC.offsetLeft+"px",oPen.style.top=e.pageY-oC.offsetTop-oPen.offsetHeight+"px"
}
,document.onmouseup=function(e) {
	var o=e||event,n=0,f=null,u=o.clientX-t;
	u>oBtn.parentNode.offsetWidth-oBtn.offsetWidth+50?(u=oBtn.parentNode.offsetWidth-oBtn.offsetWidth+50,window.open("init.html","_self"),-1!=window.navigator.userAgent.indexOf("Firefox")&&(oBtn.style.left="0px")):f=setInterval(function() {
	n++,u-=n,-50>u&&(u=-50,clearInterval(f)),oBtn.style.left=u+"px"
}
,30),document.onmousemove=null,document.onmouseup=null,penMove()},!1};