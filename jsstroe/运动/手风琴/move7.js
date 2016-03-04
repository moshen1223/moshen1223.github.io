'use strict';
function getStyle(obj,sName){
	return (obj.currentStyle||getComputedStyle(obj,false))[sName];
}
//json{sName:iTarget,sName:iTarget}
//type	linear	ease-in		ease-out
//options	type	time	end
function startMove(obj,json,options){
	options = options||{};
	options.type = options.type||'ease-out';
	options.time = options.time||700;
	var start = {};
	var dis = {};
	
	//var start = parseFloat(getStyle(obj,sName));
	//var dis = iTarget-start;
	
	for(var name in json){
		//name 			sName
		//json[name]	iTarget
		start[name] = parseFloat(getStyle(obj,name));
		//给真正的默认值
		if(isNaN(start[name])){
			switch(name){
				case 'left':
					start[name]=obj.offsetLeft;
					break;
				case 'top':
					start[name]=obj.offsetTop;
					break;
				case 'width':
					start[name]=obj.offsetWidth;
					break;
				case 'height':
					start[name]=obj.offsetHeight;
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
	
	var count = Math.floor(options.time/30);
	var n = 0;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		n++;
		for(var name in json){
			switch(options.type){
				case 'linear':
					var cur = start[name]+dis[name]*n/count;
					break;
				case 'ease-in':
					var a = n/count;
					var cur = start[name]+dis[name]*Math.pow(a,3);
					break;
				case 'ease-out':
					var a = 1-n/count;
					var cur = start[name]+dis[name]*(1-Math.pow(a,3));
					break;
			}
			
			if(name=='opacity'){
				obj.style.opacity=cur;
				obj.style.filter='alpha(opacity:'+cur*100+')';
			}else{
				obj.style[name]=cur+'px';
			}
		}
		
		if(n==count){
			clearInterval(obj.timer);
			options.end&&options.end();
		}
	},30);
}











