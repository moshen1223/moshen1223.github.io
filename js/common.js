function addEvent(e, t, a) {
    e.addEventListener ? e.addEventListener(t, a, !1) : e.attachEvent("on" + t, a)
}
function addWheel(e, t) {
    function a(e) {
        var a = !0,
        o = e || event;
        return a = o.wheelDelta ? o.wheelDelta < 0 : o.detail > 0,
        t && t(a),
        o.preventDefault && o.preventDefault(),
        !1
    } - 1 != window.navigator.userAgent.indexOf("Firefox") ? addEvent(e, "DOMMouseScroll", a) : addEvent(e, "mousewheel", a)
}
function getStyle(e, t) {
    return (e.currentStyle || getComputedStyle(e, !1))[t]
}
function addClass(e, t) {
    if (e.className) {
        var a = new RegExp("\\b" + t + "\\b", "g"); - 1 == e.className.search(a) && (e.className += " " + t)
    } else e.className = t
}
function removeClass(e, t) {
    if (e.className) {
        var a = new RegExp("\\b" + t + "\\b", "g");
        e.className = e.className.replace(a, " ").replace(/^\s+|\s+$/g, "").replace(/\s+/g, " "),
        e.className || e.removeAttribute("class")
    }
}
function getPos(e) {
    for (var t = 0,
    a = 0; e;) t += e.offsetLeft,
    a += e.offsetTop,
    e = e.offsetParent;
    return {
        left: t,
        top: a
    }
}
function addCookie(e, t, a) {
    if (a) {
        var o = new Date;
        o.setDate(o.getDate() + a),
        document.cookie = e + "=" + t + "; PATH=/; EXPIRES=" + o.toGMTString()
    } else document.cookie = e + "=" + t + "; PATH=/"
}
function getCookie(e) {
    for (var t = document.cookie.split("; "), a = 0; a < t.length; a++) {
        var o = t[a].split("=");
        if (o[0] == e) return o[1]
    }
}
function removeCookie(e) {
    addCookie(e, 1, -1)
} !
function() {
    window.startmove = function(e, t, a) {
        a = a || {},
        a.duration = a.duration || 700,
        a.easing = a.easing || "ease-out";
        var o = {},
        r = {};
        for (var n in t) {
            if (o[n] = parseFloat(getStyle(e, n)), isNaN(o[n])) switch (n) {
            case "top":
                o[n] = e.offsetTop;
                break;
            case "left":
                o[n] = e.offsetLeft;
                break;
            case "width":
                o[n] = e.offsetWidth;
                break;
            case "height":
                o[n] = e.offsetHeight;
                break;
            case "opacity":
                o[n] = 1;
                break;
            case "borderWidth":
                o[n] = 0
            }
            r[n] = t[n] - o[n]
        }
        var s = Math.floor(a.duration / 30),
        i = 0;
        clearInterval(e.timer),
        e.timer = setInterval(function() {
            i++;
            for (var n in t) {
                switch (a.easing) {
                case "linear":
                    var c = o[n] + r[n] * i / s;
                    break;
                case "ease-in":
                    var l = i / s,
                    c = o[n] + r[n] * Math.pow(l, 3);
                    break;
                case "ease-out":
                    var l = 1 - i / s,
                    c = o[n] + r[n] * (1 - Math.pow(l, 3))
                }
                "opacity" == n ? (e.style.opacity = c, e.style.filter = "alpha(opacity:" + 100 * c + ")") : e.style[n] = c + "px"
            }
            i == s && (clearInterval(e.timer), a.complete && a.complete())
        },
        30)
    }
} ();