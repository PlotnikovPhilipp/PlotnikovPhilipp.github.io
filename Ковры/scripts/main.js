function changeColorOfKovrik(e) {
    colorOfKovrika.textContent = e.currentTarget.dataset.color;
    colorK.textContent = e.currentTarget.dataset.color + ';';
    currentColorOfKovrik.firstElementChild.style.border = "0px";
    e.currentTarget.firstElementChild.style.border = "0.5px solid black";
    currentColorOfKovrik = e.currentTarget;
    if(firstView.checked) {
        selfKovriks.forEach((element) => {element.src = "imgs/" + e.currentTarget.className + "_romby" + ".png";});
    } else {
        selfKovriks.forEach((element) => {element.src = "imgs/" + e.currentTarget.className + "_soty" + ".png";});
    }
}

function changeGeneralImage(e) {
    let middleResult = null;
    let sum = parseInt(price.textContent);
    if(e.currentTarget.checked) {
        switch(e.currentTarget.name) {
            case 'shildyk':
                if(dopo.textContent == 'Нет' && !document.getElementsByClassName('shild')[0]) {
                    dopo.textContent = 'Шильдик'
                    price.textContent = parseInt(price.textContent) + parseInt(e.currentTarget.dataset.price) + ' р.';
                } else if(!document.getElementsByClassName('shild')[0]) {
                    dopo.textContent += ', Шильдик';
                    price.textContent = parseInt(price.textContent) + parseInt(e.currentTarget.dataset.price) + ' p.';
                }
                selfKovriks.forEach((element) => {
                    let element1 = document.createElement('img');
                    element1.src = "imgs/shildik.png";
                    element1.className = "shild";
                    element.parentNode.appendChild(element1);
                });
                break;
            case 'podpyannyk_aluminievyi':
                flagAl = true;
                if(flagPlast) {
                    selfKovriks.forEach((element) => {
                        element.parentNode.removeChild(element.parentNode.getElementsByClassName('plast')[0]);
                    });
                    document.getElementsByName('podpyannyk_plastikovyi')[indexOfElement].checked = false;
                    let firstPosition = (dopo.textContent.indexOf(', Пластиковый подпятник') != -1)? dopo.textContent.indexOf(', Пластиковый подпятник') : dopo.textContent.indexOf('Пластиковый подпятник');
                    let lastPosition = (dopo.textContent.indexOf(', Пластиковый подпятник') != -1)? firstPosition + 23 : firstPosition + 21;
                    middleResult  = (dopo.textContent.slice(0, lastPosition + 1) != 'Пластиковый подпятник')? dopo.textContent.slice(0, firstPosition) + dopo.textContent.slice(lastPosition + 2) : 'Нет';
                    sum = sum - 600 + ' р.';
                    flagPlast = false;
                } else if(flagRes) {
                    selfKovriks.forEach((element) => {
                        element.parentNode.removeChild(element.parentNode.getElementsByClassName('resin')[0]);
                    });
                    document.getElementsByName('podpyannyk_rezinovyi')[indexOfElement].checked = false;
                    let firstPosition = (dopo.textContent.indexOf(', Резиновый подпятник') != -1)? dopo.textContent.indexOf(', Резиновый подпятник') : dopo.textContent.indexOf('Резиновый подпятник');
                    let lastPosition = (dopo.textContent.indexOf(', Резиновый подпятник') != -1)? firstPosition + 23 : firstPosition + 21;
                    middleResult  = (dopo.textContent.slice(0, lastPosition + 1) != 'Резиновый подпятник')? dopo.textContent.slice(0, firstPosition) + dopo.textContent.slice(lastPosition + 2) : 'Нет';
                    sum = sum - 600 + ' р.';
                    flagRes = false;
                } else {
                    middleResult = dopo.textContent;
                }
                if(middleResult == 'Нет' && !document.getElementsByClassName('alum')[0]) {
                    dopo.textContent = 'Алюминиевый подпятник';
                    price.textContent = parseInt(sum) + parseInt(e.currentTarget.dataset.price) + ' р.';
                } else if(!document.getElementsByClassName('alum')[0]) {
                    dopo.textContent = middleResult + ', Алюминиевый подпятник';
                    price.textContent = parseInt(sum) + parseInt(e.currentTarget.dataset.price) + ' p.';
                }
                selfKovriks.forEach((element) => {
                    let element1 = document.createElement('img');
                    element1.src = "imgs/aluminievyi_podpyatnik.png";
                    element1.className = "alum";
                    element.parentNode.appendChild(element1);
                });
                break;
            case 'podpyannyk_plastikovyi':
                flagPlast = true;
                if(flagAl) {
                    selfKovriks.forEach((element) => {
                        element.parentNode.removeChild(element.parentNode.getElementsByClassName('alum')[0]);
                    });
                    document.getElementsByName('podpyannyk_aluminievyi')[indexOfElement].checked = false;
                    let firstPosition = (dopo.textContent.indexOf(', Алюминиевый подпятник') != -1)? dopo.textContent.indexOf(', Алюминиевый подпятник') : dopo.textContent.indexOf('Алюминиевый подпятник');
                    let lastPosition = (dopo.textContent.indexOf(', Алюминиевый подпятник') != -1)? firstPosition + 23 : firstPosition + 21;
                    middleResult  = (dopo.textContent.slice(0, lastPosition + 1) != 'Алюминиевый подпятник')? dopo.textContent.slice(0, firstPosition) + dopo.textContent.slice(lastPosition + 2) : 'Нет';
                    sum = sum - 600 + ' р.';
                    flagAl = false;
                } else if(flagRes) {
                    selfKovriks.forEach((element) => {
                        element.parentNode.removeChild(element.parentNode.getElementsByClassName('resin')[0]);
                    });
                    document.getElementsByName('podpyannyk_rezinovyi')[indexOfElement].checked = false;
                    let firstPosition = (dopo.textContent.indexOf(', Резиновый подпятник') != -1)? dopo.textContent.indexOf(', Резиновый подпятник') : dopo.textContent.indexOf('Резиновый подпятник');
                    let lastPosition = (dopo.textContent.indexOf(', Резиновый подпятник') != -1)? firstPosition + 23 : firstPosition + 21;
                    middleResult  = (dopo.textContent.slice(0, lastPosition + 1) != 'Резиновый подпятник')? dopo.textContent.slice(0, firstPosition) + dopo.textContent.slice(lastPosition + 2) : 'Нет';
                    sum = sum - 600 + ' р.';
                    flagRes = false;
                } else {
                    middleResult = dopo.textContent;
                }
                if(middleResult == 'Нет' && !document.getElementsByClassName('plast')[0]) {
                    dopo.textContent = 'Пластиковый подпятник';
                    price.textContent = parseInt(sum) + parseInt(e.currentTarget.dataset.price) + ' р.';
                } else if(!document.getElementsByClassName('plast')[0]) {
                    dopo.textContent = middleResult + ', Пластиковый подпятник';
                    price.textContent = parseInt(sum) + parseInt(e.currentTarget.dataset.price) + ' р.';
                }
                selfKovriks.forEach((element) => {
                    let element1 = document.createElement('img');
                    element1.src = "imgs/plastikovyi_podpyatnik.png";
                    element1.className = "plast";
                    element.parentNode.appendChild(element1);
                });
                break;
            case 'podpyannyk_rezinovyi':
                flagRes = true;
                if(flagAl) {
                    selfKovriks.forEach((element) => {
                        element.parentNode.removeChild(element.parentNode.getElementsByClassName('alum')[0]);
                    });
                    document.getElementsByName('podpyannyk_aluminievyi')[indexOfElement].checked = false;
                    let firstPosition = (dopo.textContent.indexOf(', Алюминиевый подпятник') != -1)? dopo.textContent.indexOf(', Алюминиевый подпятник') : dopo.textContent.indexOf('Алюминиевый подпятник');
                    let lastPosition = (dopo.textContent.indexOf(', Алюминиевый подпятник') != -1)? firstPosition + 23 : firstPosition + 21;
                    middleResult  = (dopo.textContent.slice(0, lastPosition + 1) != 'Алюминиевый подпятник')? dopo.textContent.slice(0, firstPosition) + dopo.textContent.slice(lastPosition + 2) : 'Нет';
                    sum = sum - 600 + ' р.';
                    flagAl = false;
                } else if(flagPlast) {
                    selfKovriks.forEach((element) => {
                        element.parentNode.removeChild(element.parentNode.getElementsByClassName('plast')[0]);
                    });
                    document.getElementsByName('podpyannyk_plastikovyi')[indexOfElement].checked = false;
                    let firstPosition = (dopo.textContent.indexOf(', Пластиковый подпятник') != -1)? dopo.textContent.indexOf(', Пластиковый подпятник') : dopo.textContent.indexOf('Пластиковый подпятник');
                    let lastPosition = (dopo.textContent.indexOf(', Пластиковый подпятник') != -1)? firstPosition + 23 : firstPosition + 21;
                    middleResult  = (dopo.textContent.slice(0, lastPosition + 1) != 'Пластиковый подпятник')? dopo.textContent.slice(0, firstPosition) + dopo.textContent.slice(lastPosition + 2) : 'Нет';
                    sum = sum - 600 + ' р.';
                    flagPlast = false;
                } else {
                    middleResult = dopo.textContent;
                }
                if(middleResult == 'Нет' && !document.getElementsByClassName('resin')[0]) {
                    dopo.textContent = 'Резиновый подпятник';
                    price.textContent = parseInt(sum) + parseInt(e.currentTarget.dataset.price) + ' р.';
                } else if(!document.getElementsByClassName('resin')[0]) {
                    dopo.textContent = middleResult + ', Резиновый подпятник';
                    price.textContent = parseInt(sum) + parseInt(e.currentTarget.dataset.price) + ' р.';
                }
                selfKovriks.forEach((element) => {
                    let element1 = document.createElement('img');
                    element1.src = "imgs/rezinovyi_podpyatnik.png";
                    element1.className = "resin";
                    element.parentNode.appendChild(element1);
                });
                break;
            case 'litaya_lapka':
                if(firstShape.checked) {
                    if(dopo.textContent == 'Нет' && !document.getElementsByClassName('bigCircle')[0]) {
                        dopo.textContent = 'Литая лапка';
                        price.textContent = parseInt(price.textContent) + parseInt(e.currentTarget.dataset.price) + ' p.';
                    } else if(!document.getElementsByClassName('bigCircle')[0]) {
                        dopo.textContent += ', Литая лапка';
                        price.textContent = parseInt(price.textContent) + parseInt(e.currentTarget.dataset.price) + ' p.';
                    }
                    selfKovriks.forEach((element) => {
                        let element1 = document.createElement('img');
                        element1.src = "imgs/litaya_lapka_krug.png";
                        element1.className = "bigCircle";
                        element.parentNode.appendChild(element1);
                    });
                } else {
                    e.currentTarget.checked = false;
                }
        }
            
    } else {
        switch(e.currentTarget.name) {
            case 'shildyk':
                if(document.getElementsByClassName('shild')[0]) {
                    selfKovriks.forEach((element) => {
                        element.parentNode.removeChild(element.parentNode.getElementsByClassName('shild')[0]);
                    });
                    let firstPosition = (dopo.textContent.indexOf(', Шильдик') != -1)? dopo.textContent.indexOf(', Шильдик') : dopo.textContent.indexOf('Шильдик');
                    let lastPosition = (dopo.textContent.indexOf(', Шильдик') != -1)? firstPosition + 9 : firstPosition + 7;
                    dopo.textContent = (dopo.textContent.slice(0, lastPosition + 1) != 'Шильдик')? dopo.textContent.slice(0, firstPosition) + dopo.textContent.slice(lastPosition + 2) : 'Нет';
                    price.textContent = parseInt(price.textContent) - parseInt(e.currentTarget.dataset.price) + ' p.';
                }
                break;
            case 'podpyannyk_aluminievyi':
                if(flagAl) {
                    selfKovriks.forEach((element) => {
                        element.parentNode.removeChild(element.parentNode.getElementsByClassName('alum')[0]);
                    });
                    let firstPosition = (dopo.textContent.indexOf(', Алюминиевый подпятник') != -1)? dopo.textContent.indexOf(', Алюминиевый подпятник') : dopo.textContent.indexOf('Алюминиевый подпятник');
                    let lastPosition = (dopo.textContent.indexOf(', Алюминиевый подпятник') != -1)? firstPosition + 23 : firstPosition + 21;
                    dopo.textContent = (dopo.textContent.slice(0, lastPosition + 1) != 'Алюминиевый подпятник')? dopo.textContent.slice(0, firstPosition) + dopo.textContent.slice(lastPosition + 2) : 'Нет';
                    flagAl = false;
                    price.textContent = parseInt(price.textContent) - parseInt(e.currentTarget.dataset.price) + ' p.';
                }
                break;
            case 'podpyannyk_plastikovyi':
                if(flagPlast) {
                    selfKovriks.forEach((element) => {
                        element.parentNode.removeChild(element.parentNode.getElementsByClassName('plast')[0]);
                    });
                    let firstPosition = (dopo.textContent.indexOf(', Пластиковый подпятник') != -1)? dopo.textContent.indexOf(', Пластиковый подпятник') : dopo.textContent.indexOf('Пластиковый подпятник');
                    let lastPosition = (dopo.textContent.indexOf(', Пластиковый подпятник') != -1)? firstPosition + 23 : firstPosition + 21;
                    dopo.textContent = (dopo.textContent.slice(0, lastPosition + 1) != 'Пластиковый подпятник')? dopo.textContent.slice(0, firstPosition) + dopo.textContent.slice(lastPosition + 2) : 'Нет';
                    flagPlast = false;
                    price.textContent = parseInt(price.textContent) - parseInt(e.currentTarget.dataset.price) + ' p.';
                }
                break;
            case 'podpyannyk_rezinovyi':
                if(flagRes) {
                    selfKovriks.forEach((element) => {
                        element.parentNode.removeChild(element.parentNode.getElementsByClassName('resin')[0]);
                    });
                    let firstPosition = (dopo.textContent.indexOf(', Резиновый подпятник') != -1)? dopo.textContent.indexOf(', Резиновый подпятник') : dopo.textContent.indexOf('Резиновый подпятник');
                    let lastPosition = (dopo.textContent.indexOf(', Резиновый подпятник') != -1)? firstPosition + 23 : firstPosition + 21;
                    dopo.textContent = (dopo.textContent.slice(0, lastPosition + 1) != 'Резиновый подпятник')? dopo.textContent.slice(0, firstPosition) + dopo.textContent.slice(lastPosition + 2) : 'Нет';
                    flagRes = false;
                    price.textContent = parseInt(price.textContent) - parseInt(e.currentTarget.dataset.price) + ' p.';
                }
                break;
            case 'litaya_lapka':
                if(document.getElementsByClassName('bigCircle')[0]) {
                    let firstPosition = (dopo.textContent.indexOf(', Литая лапка') != -1)? dopo.textContent.indexOf(', Литая лапка') : dopo.textContent.indexOf('Литая лапка');
                    let lastPosition = (dopo.textContent.indexOf(', Литая лапка') != -1)? firstPosition + 13 : firstPosition + 11;
                    dopo.textContent = (dopo.textContent.slice(0, lastPosition + 1) != 'Литая лапка')? dopo.textContent.slice(0, firstPosition) + dopo.textContent.slice(lastPosition + 2) : 'Нет';
                    selfKovriks.forEach((element) => {
                        element.parentNode.removeChild(element.parentNode.getElementsByClassName('bigCircle')[0]);
                    });
                    price.textContent = parseInt(price.textContent) - parseInt(e.currentTarget.dataset.price) + ' p.';
                }
        }
    }
}

function changeColorOfOkantovki(e) {
    currentColorOfOkanatovka.firstElementChild.style.border = "0px";
    e.currentTarget.firstElementChild.style.border = "0.5px solid black";
    currentColorOfOkanatovka = e.currentTarget;
    colorOfOkantovki.textContent = e.currentTarget.dataset.color;
    colorO.textContent = e.currentTarget.dataset.color + ';';
    selfOkantovkas.forEach((element) => {element.src = "imgs/" + e.currentTarget.className + ".png";});
}

function changeView(e) {
    let a = selfKovriks[0].src.slice(0, selfKovriks[0].src.lastIndexOf('_'));
    selfKovriks.forEach((element) => {element.src = a + ((firstView.checked)? '_romby.png' : '_soty.png');});
    view.textContent = (firstView.checked)? 'Ромбы;' : 'Соты;'
}

function changeShape() {
    if(secondShape.checked && !document.getElementsByClassName('shaper')[0]) {
        selfKovriks.forEach((element) => {
            let element2 = document.createElement('img');
            element2.src = "imgs/3d_kovrik 1.png";
            element2.className = "shaper";
            element.parentNode.appendChild(element2);
        });
        shape.textContent = (firstShape.checked)? 'Стандарт;' : '3D;';
        if(document.getElementsByClassName('bigCircle')[0]) {
            document.getElementsByName('litaya_lapka')[indexOfElement].checked = false;
            document.getElementsByName('litaya_lapka')[indexOfElement].dispatchEvent(new Event('click'));
        }
        currentComplect.dispatchEvent(new Event('click'));
    } else if(firstShape.checked && document.getElementsByClassName('shaper')[0]) {
        selfKovriks.forEach((element) => {
            element.parentNode.removeChild(element.parentNode.getElementsByClassName('shaper')[0]);
        });
        currentComplect.dispatchEvent(new Event('click'));
    }
}

function changeComplects(e) {
    switch(e.currentTarget.id) {
        case 'firstComplect':
            if(flagCusov) {
                cusov.previousElementSibling.textContent = "";
                cusov.innerHTML = '';
                flagCusov = false;
            }
            compl.textContent = "Комплект ковриков на весь салон с перемычкой;";
            if(firstShape.checked) {
                if(selfComplect.src != "imgs/komplekt_na ves_salon_s_peremychkoy.png") {
                    price.textContent = parseInt(price.textContent) + parseInt(e.currentTarget.dataset.price1) - ((currentComplect.dataset.price2 && flag3D)? currentComplect.dataset.price2 : currentComplect.dataset.price1) + ' p.';
                }
                flag3D = false;
                selfComplect.src = "imgs/komplekt_na ves_salon_s_peremychkoy.png";
            } else {
                if(selfComplect.src != "imgs/komplekt_3d__na ves_salon_s_peremychkoy.png") {
                    price.textContent = parseInt(price.textContent) + parseInt(e.currentTarget.dataset.price2) - ((currentComplect.dataset.price2 && flag3D)? currentComplect.dataset.price2 : currentComplect.dataset.price1) + ' p.';
                }
                flag3D = true;
                selfComplect.src = "imgs/komplekt_3d__na ves_salon_s_peremychkoy.png";
            }
            break;
        case 'secondComplect':
            if(flagCusov) {
                cusov.previousElementSibling.textContent = "";
                cusov.innerHTML = '';
                flagCusov = false;
            }
            compl.textContent = "Коврик видительский;";
            if(firstShape.checked) {
                if(selfComplect.src != "imgs/kovrik_voditelskiy.png") {
                    price.textContent = parseInt(price.textContent) + parseInt(e.currentTarget.dataset.price1) - parseInt((currentComplect.dataset.price2 && flag3D)? currentComplect.dataset.price2 : currentComplect.dataset.price1) + ' p.';
                }
                flag3D = false;
                selfComplect.src = "imgs/kovrik_voditelskiy.png";
            } else {
                if(selfComplect.src != "imgs/kovrik_3d_voditelskiy.png") {
                    price.textContent = parseInt(price.textContent) + parseInt(e.currentTarget.dataset.price2) - parseInt((currentComplect.dataset.price2 && flag3D)? currentComplect.dataset.price2 : currentComplect.dataset.price1) + ' p.';
                }
                flag3D = true;
                selfComplect.src = "imgs/kovrik_3d_voditelskiy.png";
            }
            break;
        case 'thirdComplect':
            if(flagCusov) {
                cusov.previousElementSibling.textContent = "";
                cusov.innerHTML = '';
                flagCusov = false;
            }
            compl.textContent = "Коврик водительский и пассажирский;";
            if(firstShape.checked) {
                if(selfComplect.src != "imgs/komplekt_voditelskiy_i_passajirskiy.png") {
                    price.textContent = parseInt(price.textContent) + parseInt(e.currentTarget.dataset.price1) - parseInt((currentComplect.dataset.price2 && flag3D)? currentComplect.dataset.price2 : currentComplect.dataset.price1) + ' p.';
                }
                flag3D = false;
                selfComplect.src = "imgs/komplekt_voditelskiy_i_passajirskiy.png";
            } else {
                if(selfComplect.src != "imgs/komplekt_3d_voditelskiy_i_passajirskiy.png") {
                    price.textContent = parseInt(price.textContent) + parseInt(e.currentTarget.dataset.price2) - parseInt((currentComplect.dataset.price2 && flag3D)? currentComplect.dataset.price2 : currentComplect.dataset.price1) + ' p.';
                }
                flag3D = true;
                selfComplect.src = "imgs/komplekt_3d_voditelskiy_i_passajirskiy.png";     
            }
            break;
        case 'fourthComplect':
            if(!flagCusov) {
                cusov.previousElementSibling.textContent = "Кузов: ";
                cusov.innerHTML = 'Не выбран;' + dopStr;
            }   
            compl.textContent = "Коврик в багажник;";
            if(selfComplect.src != "imgs/kovrik_v_bagajnik.png") {
                price.textContent = parseInt(price.textContent) + parseInt(e.currentTarget.dataset.price1) - parseInt((currentComplect.dataset.price2 && flag3D)? currentComplect.dataset.price2 : currentComplect.dataset.price1) + ' p.';
            }
            if(firstShape.checked) {
                flag3D = false;
            } else {
                flag3D = true;
            }
            selfComplect.src = "imgs/kovrik_v_bagajnik.png";
            break;
        case 'fifthComplect':
            if(!flagCusov) {
                cusov.previousElementSibling.textContent = "Кузов: ";
                cusov.innerHTML = 'Не выбран' + dopStr;
            } 
            compl.textContent = "Комплект на весь салон с перемычкой + в багажник;";
            if(selfComplect.src != "imgs/komplekt_na ves_salon_s_peremychkoy_plus_bagajnik.png") {
                price.textContent = parseInt(price.textContent) + parseInt(e.currentTarget.dataset.price1) - parseInt((currentComplect.dataset.price2 && flag3D)? currentComplect.dataset.price2 : currentComplect.dataset.price1) + ' p.';
            }
            if(firstShape.checked) {
                flag3D = false;
            } else {
                flag3D = true;
            }
            selfComplect.src = "imgs/komplekt_na ves_salon_s_peremychkoy_plus_bagajnik.png";
    }
    currentComplect = e.currentTarget;
}

function changePop(e1) {
    if(e1.target.nextElementSibling.style.display == 'none') {
        if(!flagPop) {
            return;
        }
        flagPop = false;
        currentPop = e1.target;
        e1.target.nextElementSibling.style.display = 'block';
        document.addEventListener('click', function self(e) {
            if(e.target != currentPop && e.target != currentPop.nextElementSibling && e.target != currentPop.nextElementSibling.firstElementChild) {
                currentPop.nextElementSibling.style.display = 'none';
                flagPop = true;
                document.removeEventListener('click', self);
            }
        }, false);
    }
}

function changeSelect(e) {
    if(e.currentTarget.value != 'false') {
        e.currentTarget.parentNode.parentNode.firstElementChild.checked = true;
        e.currentTarget.parentNode.parentNode.firstElementChild.dispatchEvent(new Event('click'));
        cusov.previousElementSibling.textContent = "Кузов: ";
        cusov.innerHTML = e.currentTarget.options[e.currentTarget.selectedIndex].textContent + ';' + dopStr;
        flagCusov = true;
    } else if(flagCusov) {
        cusov.innerHTML = 'Не выбран;' + dopStr;
    }
}

function catchChange() {
    price = (window.innerWidth > 1024)? price1 : price2;
    selfComplect = (window.innerWidth > 400)? selfComplect1 : selfComplect2;
    view = (window.innerWidth > 1024)? view1 : view2;
    shape = (window.innerWidth > 1024)? shape1 : shape2;
    compl = (window.innerWidth > 1024)? compl1 : compl2;
    cusov = (window.innerWidth > 1024)? cusov1: cusov2;
    colorK = (window.innerWidth > 1024)? colorK1 : colorK2;
    colorO = (window.innerWidth > 1024)? colorO1 : colorO2;
    dopo = (window.innerWidth > 1024)? dopo1 : dopo2;
    dopStr = (window.innerWidth > 1024)? '' : '<br/>';
}

function initiate() {
    price = (window.innerWidth > 1024)? price1 : price2;
    selfComplect = (window.innerWidth > 400)? selfComplect1 : selfComplect2;
    view = (window.innerWidth > 1024)? view1 : view2;
    shape = (window.innerWidth > 1024)? shape1 : shape2;
    compl = (window.innerWidth > 1024)? compl1 : compl2;
    cusov = (window.innerWidth > 1024)? cusov1: cusov2;
    colorK = (window.innerWidth > 1024)? colorK1 : colorK2;
    colorO = (window.innerWidth > 1024)? colorO1 : colorO2;
    dopo = (window.innerWidth > 1024)? dopo1 : dopo2;
    dopStr = (window.innerWidth > 1024)? '' : '<br/>';
    if(Array.from) {
        selfKovriks = Array.from(document.getElementsByClassName('selfKovrik'));
        selfOkantovkas = Array.from(document.getElementsByClassName('selfOkantovka'));
    } else {
        selfKovriks = [], g = document.getElementsByClassName('selfKovrik');
        selfOkantovkas = [], h = document.getElementsByClassName('selfOkantovka');
        for(let i = 0; i < g.length; i++) {
            selfKovriks.push(g[i]);
        }
        for(let i = 0; i < h.length; i++) {
            selfOkantovkas.push(h[i]);
        }
    }
    if(flag) {
        if(Array.from) {
            colorsOfKovrik = Array.from(document.querySelectorAll('.kovrik li'))
            colorsOfOkantovki = Array.from(document.querySelectorAll('.okantovka li'));
            dopElements = Array.from(document.querySelectorAll('.first-line input'));
            complects = Array.from(document.querySelectorAll('.complect input'));
            pops = Array.from(document.getElementsByClassName('pop'));
            cusovs = Array.from(document.getElementsByName('cusov1'));
        } else {
            colorsOfKovrik = [], a = document.querySelectorAll('.kovrik li');
            colorsOfOkantovki = [], b = document.querySelectorAll('.okantovka li');
            dopElements = [], c = document.querySelectorAll('.first-line input');
            complects = [], d = document.querySelectorAll('.complect input');
            pops = [], e = document.getElementsByClassName('pop');
            cusovs = [], f = document.getElementsByName('cusov1');
            for(let i = 0; i < a.length; i++) {
                colorsOfKovrik.push(a[i]);
            }
            for(let i = 0; i < b.length; i++) {
                colorsOfKovrik.push(b[i]);
            }
            for(let i = 0; i < c.length; c++) {
                dopElements.push(c[i]);
            }
            for(let i = 0; i < d.length; c++) {
                complects.push(d[i]);
            }
            for(let i = 0; i < e.length; c++) {
                pops.push(e[i]);
            }
            for(let i = 0; i < f.length; i++) {
                cusovs.push(f[i]);
            }
        }
        currentColorOfKovrik = colorsOfKovrik[0];
        currentColorOfOkanatovka = colorsOfOkantovki[2];
        currentComplect = complects[0];
        firstView.addEventListener('click', changeView, false);
        secondView.addEventListener('click', changeView, false);
        firstShape.addEventListener('click', changeShape, false);
        secondShape.addEventListener('click', changeShape, false);
        fixedButton.addEventListener('click', function() {
            if(!buttonFlag ) {
                fixedFrame.classList.add('animate-open-frame');
                fixedFrame.classList.remove('animate-close-frame');
                buttonFlag = true;
            } else {
                fixedFrame.classList.add('animate-close-frame');
                fixedFrame.classList.remove('animate-open-frame');
                buttonFlag = false;
            }
        }, false);
        colorsOfKovrik.forEach((element, index, arr) => {
            element.addEventListener('click', changeColorOfKovrik, false);
        });
        colorsOfOkantovki.forEach((element, index, arr) => {
            element.addEventListener('click', changeColorOfOkantovki, false);
        });
        dopElements.forEach((element, index, arr) => {
            element.addEventListener('click', changeGeneralImage, false);
        });
        complects.forEach((element, index, arr) => {
            element.addEventListener('click', changeComplects, false);
        });
        pops.forEach((element, index, arr) => {
            element.nextElementSibling.style.display = 'none';
            element.addEventListener('click', changePop, false);
        });
        cusovs.forEach((element, index, arr) => {
            element.addEventListener('change', changeSelect, false);
        });
    } else {
        if(Array.from) {
            colorsOfKovrik = Array.from(document.querySelectorAll('.kovrik li'));
            colorsOfOkantovki = Array.from(document.querySelectorAll('.okantovka li'));
            dopElements = Array.from(document.querySelectorAll('.first-line input'));
            complects = Array.from(document.querySelectorAll('.complect input'));
            pops = Array.from(document.getElementsByClassName('pop'));
            cusovs = Array.from(document.getElementsByName('cusov1'));
        } else {
            colorsOfKovrik = [], a = document.querySelectorAll('.kovrik li');
            colorsOfOkantovki = [], b = document.querySelectorAll('.okantovka li');
            dopElements = [], c = document.querySelectorAll('.first-line input');
            complects = [], d = document.querySelectorAll('.complect input');
            pops = [], e = document.getElementsByClassName('pop');
            cusovs = [], f = document.getElementsByName('cusov1');
            for(let i = 0; i < a.length; i++) {
                colorsOfKovrik.push(a[i]);
            }
            for(let i = 0; i < b.length; i++) {
                colorsOfKovrik.push(b[i]);
            }
            for(let i = 0; i < c.length; c++) {
                dopElements.push(c[i]);
            }
            for(let i = 0; i < d.length; c++) {
                complects.push(d[i]);
            }
            for(let i = 0; i < e.length; c++) {
                pops.push(e[i]);
            }
            for(let i = 0; i < f.length; i++) {
                cusovs.push(f[i]);
            }
        }
        currentColorOfKovrik = colorsOfKovrik[0];
        currentColorOfOkanatovka = colorsOfOkantovki[2];
        currentComplect = complects[0];
        firstView.attachEvent('onclick', changeView);
        secondView.attachEvent('onclick', changeView);
        firstShape.attachEvent('onclick', changeShape);
        secondShape.attachEvent('onclick', changeShape);
        colorsOfKovrik.forEach((element, index, arr) => {
            element.attachEvent('onclick', changeColorOfKovrik);
        });
        colorsOfOkantovki.forEach((element, index, arr) => {
            element.attachEvent('onclick', changeColorOfOkantovki);
        });
        dopElements.forEach((element, index, arr) => {
            element.addEventListener('onclick', changeGeneralImage);
        });
        complects.forEach((element, index, arr) => {
            element.addEventListener('click', changeComplects, false);
        });
        pops.forEach((element, index, arr) => {
            element.nextElementSibling.style.display = 'none';
            element.attachEvent('onclick', changePop);
        });
        cusovs.forEach((element, index, arr) => {
            element.attachEvent('onchange', changeSelect);
        });
    }
}

var flagAl = false;
var flagPlast = false;
var flagRes = false;
var flag3D = false;
var flagPop = true;
var flagCusov = false;
var buttonFlag = false;
var indexOfElement = (window.innerWidth > 1024)? 0 : 1;
if(window.addEventListener) {
    var flag = true;
    document.addEventListener('DOMContentLoaded', initiate, false);
    window.addEventListener('resize', catchChange, false);
    window.addEventListener('orientationchange', catchChange, false);
} else {
    var flag = false;
    document.attachEvent('onDOMContentLoaded', initiate);
    window.attachEvent('onresize', catchChange);
    window.attachEvent('onorientationchange', catchChange);
}

window.onload = function() {
    if(Array.from) {
        Array.from(document.getElementsByTagName('input')).forEach((element) => {element.checked = element.defaultChecked});
        Array.from(document.getElementsByTagName('select')).forEach((element) => {element.selectedIndex = 0});
    } else {
        let a = [], b = document.getElementsByTagName('input');
        let c = [], d = document.getElementsByTagName('select');
        for(let i = 0; i < b.length; i++) {
            a[i] = b[i];
        }
        for(let i = 0; i < d.length; i++) {
            c[i] = d[i];
        }
        a.forEach((element) => {element.checked = element.defaultChecked});
        c.forEach((element) => {element.selectedIndex = 0});
    }
};