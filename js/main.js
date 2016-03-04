"use strict";
function toDou(t) {
    return 10 > t ? "0" + t: "" + t
} !
function() {
    function t() {
        var t = document.getElementById("scrollCon");
        t.style.height = document.documentElement.clientHeight + "px"
    }
    t(),
    window.onresize = function() {
        t()
    }
} (),
document.onmousedown = function() {
    return ! 1
},
function() {
    function t() {
        o.offsetTop <= 0 ? r.style.display = "none": r.style.display = "block"
    }
    function e(t) {
        var e = n.offsetHeight - o.offsetHeight;
        0 > t ? t = 0 : t > e && (t = e),
        o.style.top = t + "px";
        var r = t / e;
        a.style.top = -r * (a.scrollHeight - c.offsetHeight) + "px"
    }
    var o = document.getElementById("bar"),
    n = document.getElementById("scrollBar"),
    a = document.getElementById("scrollHeigh"),
    r = document.getElementById("back_top"),
    l = null,
    s = !1,
    c = document.getElementById("scrollCon");
    t(),
    r.onclick = function() {
        var n = o.offsetTop,
        a = 0 - n,
        r = Math.floor(2e3 / 30),
        c = 0;
        clearInterval(l),
        l = setInterval(function() {
            s = !1,
            c++;
            var o = 1 - c / r,
            i = n + a * (1 - Math.pow(o, 3));
            e(i),
            t(),
            c == r && clearInterval(l)
        },
        30)
    },
    o.onmousedown = function(n) {
        var a = n || event,
        r = a.clientY - o.offsetTop;
        return document.onmousemove = function(t) {
            var o = t || event,
            n = o.clientY - r;
            e(n)
        },
        document.onmouseup = function() {
            document.onmousemove = null,
            document.onmouseup = null,
            o.releaseCapture && o.releaseCapture(),
            t()
        },
        o.setCapture && o.setCapture(),
        !1
    }
} (),
function() {
    var t = (document.getElementById("nav_ct"), document.getElementById("slide_bg")),
    e = document.getElementById("nav_ul"),
    o = e.getElementsByTagName("li"),
    n = 0;
    o[1].children[0].onclick = function() {
        addCookie("deg", 0, 1)
    };
    for (var a = 0; a < o.length; a++) !
    function(e) {
        o[a].onmouseover = function() {
            move(t, t.offsetWidth * e);
            for (var n = 0; n < o.length; n++) o[n].className = "";
            this.className = "on"
        },
        o[a].onmouseout = function() {
            move(t, t.offsetWidth * n);
            for (var e = 0; e < o.length; e++) o[e].className = "";
            o[n].className = "on"
        },
        o[a].onclick = function() {
            n = e
        }
    } (a)
} (),
function() {
    var t = 0,
    e = 0,
    o = null;
    window.move = function(n, a) {
        clearInterval(o),
        o = setInterval(function() {
            e += (a - t) / 5,
            e *= .7,
            t += e,
            n.style.left = t + "px",
            0 == Math.floor(e) && Math.floor(t) == a && clearInterval(o)
        },
        30)
    }
} (),
function() {
    var t = document.getElementById("nav_clock"),
    e = t.getElementsByTagName("img");
    setInterval(function() {
        for (var t = new Date,
        o = toDou(t.getHours()) + toDou(t.getMinutes()) + toDou(t.getSeconds()), n = 0; n < e.length; n++) startmove(e[n], {
            top: 35 * -o.charAt(n)
        })
    },
    1e3)
} (),
function() {
    var t = document.getElementById("nav_font"),
    e = document.documentElement.clientWidth / 2;
    move(t, e)
} (),
function() {
    function t(t, e, o) {
        clearInterval(l),
        l = setInterval(function() {
            o += 2;
            var n = t.offsetTop + o;
            n >= e && (n = e, o *= -.8),
            0 > n && (n = 0, o *= -.8),
            t.style.top = n + "px",
            Math.abs(o) < 1 && (o = 0),
            0 == o && n == e && clearInterval(l)
        },
        30)
    }
    var e = document.getElementById("nav_container"),
    o = document.getElementById("logo"),
    n = document.getElementById("nav_ct"),
    a = document.getElementById("nav_clock"),
    r = document.getElementById("page"),
    l = null;
    o.onclick = function() {
        function t() {
            r.removeEventListener("transitionend", t, !1),
            clearTimeout(l),
            l = setTimeout(function() {
                r.style.WebkitTransform = r.style.MozTransform = r.style.transform = "perspective(1500px) translateZ(0px) translateX(0px) translateY(0px) rotateY(0deg) rotateX(0deg) rotateZ(0deg) scale(1,1)"
            },
            300)
        }
        r.style.WebkitTransform = r.style.MozTransform = r.style.transform = "perspective(1500px) translateZ(-100px) translateX(500px) translateY(-20px) rotateY(-20deg) rotateX(58deg) rotateZ(60deg) scale(0.5,0.5)",
        r.addEventListener("transitionend", t, !1)
    },
    t(o, 125, 30),
    setTimeout(function() {
        clearInterval(l),
        move(n, 888),
        startmove(e, {
            height: 80
        },
        {
            complete: function() {
                t(a, 25, 2)
            }
        }),
        -1 != window.navigator.userAgent.indexOf("Firefox") ? startmove(o, {
            width: 260,
            height: 32,
            left: 360,
            top: 26,
            margin: 0
        }) : startmove(o, {
            width: 260,
            height: 32,
            left: 0,
            top: 26,
            margin: 0
        })
    },
    3e3)
} (),
function() {
    for (var t = document.getElementById("wk_left"), e = document.getElementById("wk_left"), o = 4, n = 10, a = 0; n > a; a++) for (var r = 0; o > r; r++) {
        var l = document.createElement("span");
        l.style.width = t.offsetWidth / o + "px",
        l.style.height = t.offsetHeight / n + "px",
        t.appendChild(l),
        l.style.left = r * t.offsetWidth / o + "px",
        l.style.top = a * t.offsetHeight / n + "px",
        l.style.backgroundPosition = -r * t.offsetWidth / o + "px -" + a * t.offsetHeight / n + "px",
        l.c = r,
        l.r = a
    }
    var s = t.children,
    c = null,
    i = 0,
    f = !1;
    t.onmouseover = function() {
        if (!f) {
            i++,
            f = !0;
            for (var t = 0; t < s.length; t++) !
            function(t) {
                c = setTimeout(function() {
                    s[t].style.backgroundImage = "url(img/monkey-wandesign" + (i % 2 + 1) + ".png)",
                    s[t].style.opacity = "0",
                    s[t].style.filter = "alpha(opacity:0)",
                    function(t) {
                        startmove(s[t], {
                            opacity: 1
                        },
                        {
                            complete: function() {
                                t == s.length - 1 && (f = !1, e.style.background = "url(img/monkey-wandesign" + (i % 2 + 1) + ".png)")
                            }
                        })
                    } (t)
                },
                100 * (s[t].c + s[t].r))
            } (t)
        }
    }
} (),
function() {
    function t(t, e) {
        var o = document.getElementById(t),
        n = document.getElementById(e),
        a = n.getElementsByTagName("p")[0],
        r = n.getElementsByTagName("span");
        o.onmouseover = function(t) {
            var e = t || event,
            n = e.formElement || e.relatedTarget;
            o.contains(n) || (startmove(r[0], {
                left: 126
            },
            {
                duration: 300
            }), startmove(r[2], {
                right: 126
            },
            {
                duration: 300
            }), startmove(r[1], {
                top: 42
            },
            {
                duration: 300
            }), startmove(r[3], {
                top: 42
            },
            {
                duration: 300
            }), a.style.backgroundColor = "#333030")
        },
        o.onmouseout = function(t) {
            var e = t || event,
            n = e.toElement || e.relatedTarget;
            o.contains(n) || (startmove(r[0], {
                left: -150
            },
            {
                duration: 300
            }), startmove(r[2], {
                right: -150
            },
            {
                duration: 300
            }), startmove(r[1], {
                top: -36
            },
            {
                duration: 300
            }), startmove(r[3], {
                top: 108
            },
            {
                duration: 300
            }), a.style.backgroundColor = "#36d254")
        }
    }
    var e = document.getElementById("int_second");
    e.onclick = function() {
        window.open("person.html", "_blank")
    },
    t("per_int", "int_second"),
    t("thc", "thc_second")
} (),
function() {
    function t(t) {
        for (var e = 0,
        o = 0; t;) e += t.offsetLeft,
        o += t.offsetTop,
        t = t.offsetParent;
        return {
            left: e,
            top: o
        }
    }
    function e(t) {
        return 180 * t / Math.PI
    }
    function o(o, n) {
        var a = document.documentElement.scrollTop || document.body.scrollTop,
        r = t(o).left + 132 - n.clientX,
        l = t(o).top + 132 - a - n.clientY;
        return Math.round((e(Math.atan2(l, r)) + 180) / 90) % 4
    }
    function n(t) {
        var e = t.children[0],
        n = e.children[1],
        a = n.children[0],
        r = n.children[1];
        n.onmouseover = function(e) {
            var l = e || event,
            s = l.formElement || l.relatedTarget;
            if (!n.contains(s)) {
                var c = o(n, l);
                switch (c) {
                case 0:
                    a.style.left = t.offsetWidth + "px",
                    a.style.top = 0,
                    r.style.left = t.offsetWidth + "px",
                    r.style.top = 0;
                    break;
                case 1:
                    a.style.top = t.offsetHeight + "px",
                    a.style.left = 0,
                    r.style.left = 0,
                    r.style.top = t.offsetHeight + "px";
                    break;
                case 2:
                    a.style.left = -t.offsetWidth + "px",
                    a.style.top = 0,
                    r.style.left = -t.offsetWidth + "px",
                    r.style.top = 0;
                    break;
                case 3:
                    a.style.top = -t.offsetWidth + "px",
                    a.style.left = 0,
                    r.style.left = 0,
                    r.style.top = -t.offsetWidth + "px"
                }
                startmove(a, {
                    left: 0,
                    top: 0
                }),
                startmove(r, {
                    left: 0,
                    top: 0
                })
            }
        },
        n.onmouseout = function(t) {
            var e = t || event,
            l = e.toElement || e.relatedTarget;
            if (!n.contains(l)) {
                var s = o(l, e);
                switch (s) {
                case 0:
                    startmove(a, {
                        left: 264,
                        top: 0
                    }),
                    startmove(r, {
                        left: 264,
                        top: 0
                    });
                    break;
                case 1:
                    startmove(a, {
                        left: 0,
                        top: 264
                    }),
                    startmove(r, {
                        left: 0,
                        top: 264
                    });
                    break;
                case 2:
                    startmove(a, {
                        left: -264,
                        top: 0
                    }),
                    startmove(r, {
                        left: -264,
                        top: 0
                    });
                    break;
                case 3:
                    startmove(a, {
                        left: 0,
                        top: -264
                    }),
                    startmove(r, {
                        left: 0,
                        top: -264
                    })
                }
            }
        }
    }
    var a = document.getElementById("wall"),
    r = a.getElementsByTagName("li"),
    l = document.getElementById("page"),
    s = document.getElementById("work_title");
    s.onclick = function() {
        addCookie("deg", 0, 1)
    };
    for (var c = 0; c < r.length; c++) n(r[c]),
    function(t) {
        r[t].onclick = function() {
            function e() {
                l.removeEventListener("transitionend", e, !1),
                l.style.WebkitTransform = l.style.MozTransform = l.style.transform = "perspective(1500px) translateZ(0px) translateX(0px) translateY(0px) rotateY(0deg) rotateX(0deg) rotateZ(0deg) scale(1,1)"
            }
            switch (5 == t && (l.style.WebkitTransform = l.style.MozTransform = l.style.transform = "perspective(1500px) translateZ(-100px) translateX(500px) translateY(-20px) rotateY(-20deg) rotateX(58deg) rotateZ(60deg) scale(0.5,0.5)"), l.addEventListener("transitionend", e, !1), t) {
            case 0:
                addCookie("deg", 0, 1);
                break;
            case 1:
                addCookie("deg", 90, 1);
                break;
            case 2:
                addCookie("deg", -90, 1);
                break;
            case 3:
                addCookie("deg", 180, 1)
            }
        }
    } (c)
} ();