'use strict';
function getStyle(obj,sName){
	return (obj.currentStyle||getComputedStyle(obj,false))[sName];
}
function move(obj,json,options){
	options = options||{};
	options.duration = options.duration||700;
	options.easing = options.easing||'linear';
	
	var start = {};
	var dis = {};
	for(var name in json){
		start[name] = parseFloat(getStyle(obj,name));
		if(isNaN(start[name])){
			switch(name){
				case 'width':
					start[name]=obj.offsetWidth;
					break;
				case 'height':
					start[name]=obj.offsetHeight;
					break;
				case 'top':
					start[name]=obj.offsetTop;
					break;
				case 'left':
					start[name]=obj.offsetLeft;
					break;
				case 'opacity':
					start[name]=1;
					break;
				case 'borderWidth':
					start[name]=0;
					break;
			}
		}
		dis[name] = json[name]-start[name];
	}
	var count = Math.floor(options.duration/30);
	clearInterval(obj.timer);
	var n =0;
	obj.timer = setInterval(function(){
		n++;
		for(var name in json){
			switch(options.easing){
				case 'linear':
					var cur = start[name]+dis[name]*n/count;
					break;
				case 'easeIn':
					var a = n/count;
					var cur = start[name]+dis[name]*Math.pow(a,3);
					break;
				case 'easeOut':
					var a = 1-n/count;
					var cur = start[name]+dis[name]*(1-Math.pow(a,3));
					break;
			}
			if(name=='opacity'){
				obj.style.opacity = cur;
				obj.style.fitler='alpha(opacity:'+cur*100+')';
			}else{
				obj.style[name]=cur+'px';
			}
		}
		if(n==count){
			clearInterval(obj.timer);
			options.complete&&options.complete();
		}
	},30);
}



















