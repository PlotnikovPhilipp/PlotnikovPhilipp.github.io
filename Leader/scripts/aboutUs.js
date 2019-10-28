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
if (window.addEventListener) {
    window.addEventListener('scroll', changePosition, false);
} else {
    window.attachEvent('onscroll', changePosition);
}