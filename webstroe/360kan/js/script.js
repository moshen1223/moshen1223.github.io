window.onload = function () {
	function set1(box,tab) {
		var oBox = document.getElementById(box);
		var oTab = document.getElementById(tab);
		var aList = oBox.getElementsByTagName('li');
		var aTab = oTab.getElementsByTagName('li');
		for (var i = 0;i < aTab.length;i++) {
				(function(index){
					aTab[i].onmouseover = function () {
						num = index;
						for (var i = 0;i < aTab.length;i++) {
							aList[i].style.display = 'none';
							aTab[i].className = '';
						};
						aList[index].style.display = 'block';
						aTab[index].className = 'active';
					};
				})(i);
		};
	};
	// card
	function set(box,tab) {
		var oBox = document.getElementById(box);
		var oTab = document.getElementById(tab);
		var aList = oBox.getElementsByTagName('li');
		var aTab = oTab.getElementsByTagName('li');
		for (var i = 0;i < aTab.length;i++) {
				(function(index){
					aTab[i].onmouseover = function () {
						for (var i = 0;i < aTab.length;i++) {
							aList[i].style.display = 'none';
							aTab[i].className = '';
						};
						aList[index].style.display = 'block';
						aTab[index].className = 'active';
					};
				})(i);
		};
	};
	var timer = null;
	var num = 0;
	function interval(box,tab){
		var oHeader = document.getElementById('header');
		var oBox = document.getElementById(box);
		var oTab = document.getElementById(tab);
		var aList = oBox.getElementsByTagName('li');
		var aTab = oTab.getElementsByTagName('li');
		timer = setInterval(function(){
			num++;
			if(num==aTab.length){
				num=0;
			}
			for (var i = 0;i < aTab.length;i++) {
				aList[i].style.display = 'none';
				aTab[i].className = '';
			};
			aList[num].style.display = 'block';
			aTab[num].className = 'active';	
		},2000);
		oHeader.onmouseover = function(){
			clearInterval(timer);
		};
		oHeader.onmouseout = function(){
			timer = setInterval(function(){
				num++;
				if(num==aTab.length){
					num=0;
				}
				for (var i = 0;i < aTab.length;i++) {
					aList[i].style.display = 'none';
					aTab[i].className = '';
				};
				aList[num].style.display = 'block';
				aTab[num].className = 'active';
			},2000);
		};
	}
	interval('pic_box','pic_tab');
	set1('pic_box','pic_tab');

	// slip
	function slip(sBox) {
		var oBox = document.getElementById(sBox);
		var aBots = oBox.getElementsByClassName('slip_bot');
		var aLi = oBox.getElementsByTagName('li');
		for (var i = 0;i < aBots.length;i++) {
			// 变色
			if (i%2 == 0) {
				aBots[i].style.background = '#eee';
			} else {
				aBots[i].style.background = '#f4f4f4';
			};
			// 加鼠标移入时间
			aLi[i].onmouseover = function () {
				for (var i = 0;i < aLi.length;i++) {
					aLi[i].className = 'slip';
				};
				this.className = 'slip on';
			};
		};
	};
	slip('slip1');
	slip('slip2');
	slip('slip3');
	slip('slip4');
	function bigCard (tab,list) {
		var oTab = document.getElementById(tab);
		var oList = document.getElementById(list);
		var aTabs = oTab.getElementsByTagName('a');
		var aLists = oList.getElementsByTagName('ul');
		for (var i = 0;i < aLists.length;i++) {
			aTabs[i].index = i;
			aTabs[i].onmouseover = function () {
				for (var i = 0;i < aLists.length;i++) {
					aTabs[i].className = '';
					aLists[i].style.display = 'none';
				};
				this.className = 'on';
				aLists[this.index].style.display = 'block';
			};
		};
	};
	bigCard('tab1','list1');
	bigCard('tab2','list2');
	bigCard('tab3','list3');
	bigCard('tab4','list4');

	function lastCard (tab,list) {
		var oTab = document.getElementById(tab);
		var oList = document.getElementById(list);
		var aTabs = oTab.getElementsByTagName('a');
		var aLists = oList.getElementsByClassName('girls');
		for (var i = 0;i < aLists.length;i++) {
			aTabs[i].index = i;
			aTabs[i].onmouseover = function () {
				for (var i = 0;i < aLists.length;i++) {
					aTabs[i].className = '';
					aLists[i].style.display = 'none';
				};
				this.className = 'on';
				aLists[this.index].style.display = 'block';
			};
		};
	};
	lastCard('tab5','list5');

	var oTime = document.getElementsByClassName('time_num')[0];
	var aA = oTime.getElementsByTagName('a');
	for (var i = 0;i < aA.length;i++) {
		aA[i].onclick = function () {
			for (var i = 0;i < aA.length;i++) {
				aA[i].className = '';
			};
			this.className = 'on';
		};
	};

	// search bar
	function search () {
		var oSearch = document.getElementsByClassName('search')[0];
		var oText = oSearch.getElementsByClassName('search_text')[0];
		var oSug = oSearch.getElementsByClassName('search_sug')[0];
		var sValue = oText.value;
		oText.onfocus = function () {
			oSug.style.display = 'block';
			this.value = '';
		};
		oText.onblur = function () {
			oSug.style.display = 'none';
			this.value = sValue;
		};
	};
	search();


	
};