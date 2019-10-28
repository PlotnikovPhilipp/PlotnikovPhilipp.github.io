'use strict'; 
function changePosition() {
    if(lastPosition - window.pageYOffset >= 0) {
        navigation.style.webkitTransform = 'translateY(0)';
        navigation.style.mozTransform = 'translateY(0)';
        navigation.style.MSTransform = 'translateY(0)';
        navigation.style.transform = 'translateY(0)';
    } else {
        navigation.style.webkitTransform = 'translateY(-100%)';
        navigation.style.mozTransform = 'translateY(-100%)';
        navigation.style.MSTransform = 'translateY(-100%)';
        navigation.style.transform = 'translateY(-100%)';
    }
    lastPosition = window.pageYOffset;
}
let lastPosition = window.pageYOffset;
bar.style.height = (window.pageYOffset + window.outerHeight) / document.documentElement.offsetHeight * bar.parentNode.offsetHeight + "px";
function chnageBar() {
    bar.style.height = (window.pageYOffset + window.outerHeight) / document.documentElement.offsetHeight * bar.parentNode.offsetHeight + "px";
}
if (window.addEventListener) {
    window.addEventListener('scroll', chnageBar, false);
    window.addEventListener('scroll', changePosition, false);
} else {
    window.attachEvent('onscroll', chnageBar);
    window.attachEvent('onscroll', changePosition);
}
