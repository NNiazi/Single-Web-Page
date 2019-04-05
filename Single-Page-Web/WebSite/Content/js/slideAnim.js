function element() {
    var h = window.innerHeight;
    document.getElementById('content').style.height = h + "px";
    document.getElementById('content1').style.height = h + "px";
    document.getElementById('content2').style.height = h + "px";
    document.getElementById('content3').style.height = h + "px";
}

function slideAnimate() {
    var i = document.getElementById('span');
    var h = window.innerHeight;
    var x = 2 * h;
    var y = 3 * h;
    var Yoffset = window.pageYOffset;
    if (Yoffset < h) {
        i.style.left = "46.5px";
    } else if (Yoffset < (2 * h)) {
        i.style.left = "146px";
    } else if (Yoffset < (3 * h)) {
        i.style.left = "245.4px";
    } else if (Yoffset >= (3 * h)) {
        i.style.left = "350.8px";
    }
}
window.addEventListener('scroll', slideAnimate);
window.addEventListener('load', element);
window.addEventListener('resize', element);