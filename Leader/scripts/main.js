bar.style.height = (window.pageYOffset + window.outerHeight) / document.documentElement.offsetHeight * bar.parentNode.offsetHeight + "px";
function chnageBar() {
    bar.style.height = (window.pageYOffset + window.outerHeight) / document.documentElement.offsetHeight * bar.parentNode.offsetHeight + "px";
}
if (window.addEventListener) {
    window.addEventListener('scroll', chnageBar, false);
} else {
    window.attachEvent('onscroll', chnageBar);
}
