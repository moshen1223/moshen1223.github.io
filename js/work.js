"use strict";
function moveBox(e) {
    var t = r,
    o = e - t,
    s = Math.floor(50),
    i = 0;
    clearInterval(timer),
    timer = setInterval(function() {
        i++;
        var e = 1 - i / s;
        if (r = t + o * (1 - Math.pow(e, 3)), workBox.style.WebkitTransform = workBox.style.MozTransform = workBox.style.transform = "translateX(-12px)  translateZ(-" + winW / 2 + "px) rotateY(" + (r + 1) + "deg)", r % 360 == 0 || r % 360 == 180 || r % 360 == 270) {
            var n = document.getElementById("h5_works");
            n.style.display = "none"
        }
        if (r % 360 == 90) {
            var n = document.getElementById("h5_works");
            n.style.display = "block",
            swing()
        }
        i == s && clearInterval(timer)
    },
    30)
}
function now(e) {
    return e > 0 ? e % aLi.length: (e % aLi.length + aLi.length) % aLi.length
}
function tab() {
    function e() {
        aLi[now(iNow)].removeEventListener("transitionend", e, !1),
        bOk = !1,
        location.hash = iNow
    }
    for (var t = 0; t < aLi.length; t++) aLi[t].className = "";
    aLi[now(iNow - 2)].className = "l2",
    aLi[now(iNow - 1)].className = "l1",
    aLi[now(iNow)].className = "cur",
    aLi[now(iNow + 1)].className = "r1",
    aLi[now(iNow + 2)].className = "r2",
    aLi[now(iNow)].addEventListener("transitionend", e, !1)
}
function wave(e, t) {
    var r = e.children[0],
    o = r.children[0],
    s = t.pageX - getPos(e).left,
    i = t.pageY - getPos(e).top;
    o.style.left = s + "px",
    o.style.top = i + "px",
    addClass(r, "is-active"),
    r.addEventListener("animationend",
    function(e) {
        removeClass(r, "is-active")
    },
    !1),
    r.addEventListener("webkitAnimationEnd",
    function(e) {
        removeClass(r, "is-active")
    },
    !1),
    r.addEventListener("MSAnimationEnd",
    function(e) {
        removeClass(r, "is-active")
    },
    !1)
}
function swing() {
    for (var e = document.getElementById("h5_works"), t = e.getElementsByTagName("li"), o = 0, s = 0, i = null, s = 0; s < t.length; s++) {
        var n = t[s].children;
        n[0].style.WebkitTransform = n[0].style.MozTransform = n[0].style.transform = "rotateX(-180deg)"
    }
    for (var s = 0; s < t.length; s++) !
    function(e) {
        t[s].children;
        t[e].r = -180,
        i = setTimeout(function() { !
            function(e) {
                clearInterval(t[e].timer);
                var s = t[e].children;
                t[e].timer = setInterval(function() {
                    o += (0 - t[e].r) / 1.5,
                    o *= .7,
                    t[e].r += o,
                    t[e].r < -60 ? t[e].style.opacity = 0 : t[e].style.opacity = 1,
                    s[0].style.WebkitTransform = s[0].style.MozTransform = s[0].style.transform = "rotateX(" + t[e].r + "deg)",
                    0 == Math.floor(o) && 0 == Math.floor(r) && clearInterval(t[e].timer)
                },
                150)
            } (e)
        },
        300)
    } (s)
}
document.onmousedown = function() {
    return ! 1
};
var workBox = document.getElementById("work_box"),
aDiv = workBox.children,
wrpBox = document.getElementById("work_wrapper"),
winW = document.documentElement.clientWidth,
winH = document.documentElement.clientHeight,
oL = aDiv[0],
oR = aDiv[1],
oF = aDiv[3],
oB = aDiv[2],
oDeg = parseInt(getCookie("deg")) || 0;
window.onresize = function() {
    workBox.style.height = winH + "px"
},
workBox.style.height = winH + "px",
workBox.style.WebkitTransform = workBox.style.MozTransform = workBox.style.transform = "translateX(-11px) translateZ(-" + winW / 2 + "px) rotateY(" + (oDeg + 1) + "deg)",
oL.style.WebkitTransform = oL.style.MozTransform = oL.style.transform = "translateX(-" + winW / 2 + "px) rotateY(-90deg)",
oR.style.WebkitTransform = oR.style.MozTransform = oR.style.transform = "translateX(" + winW / 2 + "px) rotateY(90deg)",
oF.style.WebkitTransition = oF.style.MozTransition = oF.style.transform = "translateZ(" + winW / 2 + "px)",
oB.style.WebkitTransition = oB.style.MozTransition = oB.style.transform = "translateZ(-" + winW / 2 + "px) rotateY(-180deg)";
var i = oDeg,
timer = null,
r = oDeg;
if (r % 360 == 90) {
    var h5Works = document.getElementById("h5_works");
    h5Works.style.display = "block",
    swing()
}
document.onkeydown = function(e) {
    var t = e || event;
    switch (t.keyCode) {
    case 37:
        i -= 90,
        moveBox(i);
        break;
    case 39:
        i += 90,
        moveBox(i)
    }
};
var cssWorks = document.getElementById("css_works"),
aLi = cssWorks.getElementsByTagName("li"),
cssBtn = document.getElementById("css_btn"),
oL = cssBtn.getElementsByTagName("button")[0],
oR = cssBtn.getElementsByTagName("button")[1],
iNow = 2,
bOk = !1;
location.hash && (iNow = parseInt(location.hash.substring(1)), tab()),
oL.onclick = function(e) {
    if (!bOk) {
        var t = e || event;
        wave(oL, t),
        bOk = !0,
        iNow--,
        tab()
    }
},
oR.onclick = function(e) {
    if (!bOk) {
        var t = e || event;
        wave(oR, t),
        bOk = !0,
        iNow++,
        tab()
    }
},
function() {
    function e(e) {
        for (var t = 0; t < r.length; t++) r[t].getElementsByTagName("a")[0].href = i[e][t].href,
        r[t].getElementsByTagName("img")[0].src = i[e][t].src,
        r[t].getElementsByTagName("p")[0].innerHTML = i[e][t].p
    }
    for (var t = document.getElementById("js_works"), r = t.getElementsByTagName("li"), o = document.getElementById("js_btn"), s = o.getElementsByTagName("button"), i = [[{
        href: "jsstroe/运动/3D图片轮换/demo.html",
        src: "img/3d_pic.jpg",
        p: "3D图片轮换"
    },
    {
        href: "jsstroe/运动/iphone 图片查看器/zns_demo.html",
        src: "img/iphone.jpg",
        p: "图片查看器"
    },
    {
        href: "jsstroe/照片墙/wall.html",
        src: "img/js_wall.jpg",
        p: "照片墙"
    },
    {
        href: "jsstroe/运动/鼠标滚轮控制图片大小/鼠标滚轮控制图片大小.html",
        src: "img/toBig.jpg",
        p: "鼠标滚轮控制图片大小"
    },
    {
        href: "jsstroe/运动/3D立体效果/zns_demo.html",
        src: "img/3D_LT.jpg",
        p: "3D立体效果"
    },
    {
        href: "jsstroe/运动/分块运动/分块运动.html",
        src: "img/fenkuai.jpg",
        p: "分块运动"
    },
    {
        href: "jsstroe/运动/手风琴/手风琴.html",
        src: "img/accordion.jpg",
        p: "手风琴"
    },
    {
        href: "jsstroe/无缝滚动/无缝滚动.html",
        src: "img/js_scroll.jpg",
        p: "无缝滚动"
    },
    {
        href: "jsstroe/运动/苹果菜单/苹果菜单.html",
        src: "img/iphone_menu.jpg",
        p: "苹果菜单"
    }], [{
        href: "jsstroe/运动/分步运动/分步运动.html",
        src: "img/fenbu.jpg",
        p: "分步运动"
    },
    {
        href: "jsstroe/超酷数码钟表/Clock.html",
        src: "img/kuxuanshizhong.jpg",
        p: "超酷数码钟表"
    },
    {
        href: "jsstroe/运动/圆.html",
        src: "img/circle_sport.jpg",
        p: "圆型运动"
    },
    {
        href: "jsstroe/高级运动/碰撞+拖拽.html",
        src: "img/drag_and_sprot.jpg",
        p: "碰撞和拖拽"
    },
    {
        href: "jsstroe/输入框倒计时/countDown.html",
        src: "img/daojishi.jpg",
        p: "输入框倒计时"
    },
    {
        href: "jsstroe/图片延时加载/图片延迟加载.html",
        src: "img/load.jpg",
        p: "图片延迟加载"
    },
    {
        href: "jsstroe/拖拽/九宫格拖拽最终版.html",
        src: "img/drag9.jpg",
        p: "九宫格拖拽"
    },
    {
        href: "jsstroe/放大镜/放大镜.html",
        src: "img/js_big.jpg",
        p: "放大镜"
    },
    {
        href: "jsstroe/高级运动/漂浮广告.html",
        src: "img/ad_fly.jpg",
        p: "漂浮广告"
    }], [
    {
        href: "jsstroe/拖拽/带框的拖拽.html",
        src: "img/tubiaoyidong.jpg",
        p: "桌面图标"
    },
    {
        href: "jsstroe/运动/无限运动/无限运动的小球.html",
        src: "img/infinity_sport.jpg",
        p: "无限运动"
    },
    {
        href: "jsstroe/图片延时加载/网络进度条.html",
        src: "img/webload.jpg",
        p: "网络进度条"
    },
	{
        href: "jsstroe/拖拽/拖拽回放.html",
        src: "img/fanghui.jpg",
        p: "拖拽放回"
    },
    {
        href: "jsstroe/瀑布流6列.html",
        src: "img/pubuliu.jpg",
        p: "瀑布流"
    },
    {
        href: "jsstroe/简易游戏图片/game.html",
        src: "img/youxi.jpg",
        p: "简易游戏图片"
    },
    {
        href: "javascrip:;",
        src: "img/wite.jpg",
        p: "还在完善，静候..."
    },
    {
        href: "javascrip:;",
        src: "img/wite.jpg",
        p: "还在完善，静候..."
    },
    {
        href: "javascrip:;",
        src: "img/wite.jpg",
        p: "还在完善，静候..."
    }]], n = [], a = 0; a < r.length; a++) n.push({
        left: r[a].offsetLeft,
        top: r[a].offsetTop,
        width: r[0].offsetWidth,
        height: r[0].offsetHeight
    });
    for (var a = 0; a < r.length; a++) r[a].style.left = n[a].left + "px",
    r[a].style.top = n[a].top + "px",
    r[a].style.position = "absolute",
    r[a].style.margin = 0;
    for (var l = 0,
    c = !1,
    a = 0; a < s.length; a++) !
    function(t) {
        s[t].onclick = function(o) {
            if (!c) {
                c = !0;
                var s = t,
                i = o || event;
                wave(this, i);
                var a = 0;
                l = setInterval(function() { !
                    function(t) {
                        startmove(r[t], {
                            left: 432,
                            top: 420,
                            width: 0,
                            height: 0
                        },
                        {
                            complete: function() {
                                if (t == r.length - 1) {
                                    e(s);
                                    var o = r.length - 1;
                                    l = setInterval(function() { !
                                        function(e) {
                                            startmove(r[e], {
                                                left: n[e].left,
                                                top: n[e].top,
                                                width: n[0].width,
                                                height: n[0].height
                                            },
                                            {
                                                complete: function() {
                                                    0 == e && (c = !1)
                                                }
                                            })
                                        } (o),
                                        o--,
                                        -1 == o && clearInterval(l)
                                    },
                                    100)
                                }
                            }
                        })
                    } (a),
                    a++,
                    a == r.length && clearInterval(l)
                },
                100)
            }
        }
    } (a)
} ();