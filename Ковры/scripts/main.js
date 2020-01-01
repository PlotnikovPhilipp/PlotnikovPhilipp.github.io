function changeColorOfKovrik(e) {
    colorOfKovrika.textContent = e.currentTarget.dataset.color;
    colorK.textContent = e.currentTarget.dataset.color + ';';
    currentColorOfKovrik.firstElementChild.style.border = "0px";
    e.currentTarget.firstElementChild.style.border = "0.5px solid black";
    currentColorOfKovrik = e.currentTarget;
    if(firstView.checked) {
        selfKovrik.src = "imgs/" + e.currentTarget.className + "_romby" + ".png";
    } else {
        selfKovrik.src = "imgs/" + e.currentTarget.className + "_soty" + ".png";
    }
}

function changeGeneralImage(e) {
    let element;
    let middleResult = null;
    let sum = parseInt(price.textContent);
    if(e.currentTarget.checked) {
        switch(e.currentTarget.name) {
            case 'shildyk':
                element = document.createElement('img');
                element.src = "imgs/shildik.png";
                element.className = "shild";
                if(dopo.textContent == 'Нет' && !document.getElementsByClassName('shild')[0]) {
                    dopo.textContent = 'Шильдик'
                    price.textContent = parseInt(price.textContent) + parseInt(e.currentTarget.dataset.price) + ' р.';
                } else if(!document.getElementsByClassName('shild')[0]) {
                    dopo.textContent += ', Шильдик';
                    price.textContent = parseInt(price.textContent) + parseInt(e.currentTarget.dataset.price) + ' p.';
                }
                selfKovrik.parentNode.appendChild(element);
                break;
            case 'podpyannyk_aluminievyi':
                element = document.createElement('img');
                element.src = "imgs/aluminievyi_podpyatnik.png";
                element.className = "alum";
                flagAl = true;
                if(flagPlast) {
                    selfKovrik.parentNode.removeChild(document.getElementsByClassName('plast')[0]);
                    document.getElementsByName('podpyannyk_plastikovyi')[0].checked = false;
                    let firstPosition = (dopo.textContent.indexOf(', Пластиковый подпятник') != -1)? dopo.textContent.indexOf(', Пластиковый подпятник') : dopo.textContent.indexOf('Пластиковый подпятник');
                    let lastPosition = (dopo.textContent.indexOf(', Пластиковый подпятник') != -1)? firstPosition + 23 : firstPosition + 21;
                    middleResult  = (dopo.textContent.slice(0, lastPosition + 1) != 'Пластиковый подпятник')? dopo.textContent.slice(0, firstPosition) + dopo.textContent.slice(lastPosition + 2) : 'Нет';
                    sum = sum - 600 + ' р.';
                    flagPlast = false;
                } else if(flagRes) {
                    selfKovrik.parentNode.removeChild(document.getElementsByClassName('resin')[0]);
                    document.getElementsByName('podpyannyk_rezinovyi')[0].checked = false;
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
                selfKovrik.parentNode.appendChild(element);
                break;
            case 'podpyannyk_plastikovyi':
                element = document.createElement('img');
                element.src = "imgs/plastikovyi_podpyatnik.png";
                element.className = "plast";
                flagPlast = true;
                if(flagAl) {
                    selfKovrik.parentNode.removeChild(document.getElementsByClassName('alum')[0]);
                    document.getElementsByName('podpyannyk_aluminievyi')[0].checked = false;
                    let firstPosition = (dopo.textContent.indexOf(', Алюминиевый подпятник') != -1)? dopo.textContent.indexOf(', Алюминиевый подпятник') : dopo.textContent.indexOf('Алюминиевый подпятник');
                    let lastPosition = (dopo.textContent.indexOf(', Алюминиевый подпятник') != -1)? firstPosition + 23 : firstPosition + 21;
                    middleResult  = (dopo.textContent.slice(0, lastPosition + 1) != 'Алюминиевый подпятник')? dopo.textContent.slice(0, firstPosition) + dopo.textContent.slice(lastPosition + 2) : 'Нет';
                    sum = sum - 600 + ' р.';
                    flagAl = false;
                } else if(flagRes) {
                    selfKovrik.parentNode.removeChild(document.getElementsByClassName('resin')[0]);
                    document.getElementsByName('podpyannyk_rezinovyi')[0].checked = false;
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
                selfKovrik.parentNode.appendChild(element);
                break;
            case 'podpyannyk_rezinovyi':
                element = document.createElement('img');
                element.src = "imgs/rezinovyi_podpyatnik.png";
                element.className = "resin";
                flagRes = true;
                if(flagAl) {
                    selfKovrik.parentNode.removeChild(document.getElementsByClassName('alum')[0]);
                    document.getElementsByName('podpyannyk_aluminievyi')[0].checked = false;
                    let firstPosition = (dopo.textContent.indexOf(', Алюминиевый подпятник') != -1)? dopo.textContent.indexOf(', Алюминиевый подпятник') : dopo.textContent.indexOf('Алюминиевый подпятник');
                    let lastPosition = (dopo.textContent.indexOf(', Алюминиевый подпятник') != -1)? firstPosition + 23 : firstPosition + 21;
                    middleResult  = (dopo.textContent.slice(0, lastPosition + 1) != 'Алюминиевый подпятник')? dopo.textContent.slice(0, firstPosition) + dopo.textContent.slice(lastPosition + 2) : 'Нет';
                    sum = sum - 600 + ' р.';
                    flagAl = false;
                } else if(flagPlast) {
                    selfKovrik.parentNode.removeChild(document.getElementsByClassName('plast')[0]);
                    document.getElementsByName('podpyannyk_plastikovyi')[0].checked = false;
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
                selfKovrik.parentNode.appendChild(element);
                break;
            case 'litaya_lapka':
                if(firstShape.checked) {
                    element = document.createElement('img');
                    element.src = "imgs/litaya_lapka_krug.png";
                    element.className = "bigCircle";
                    if(dopo.textContent == 'Нет' && !document.getElementsByClassName('bigCircle')[0]) {
                        dopo.textContent = 'Литая лапка';
                        price.textContent = parseInt(price.textContent) + parseInt(e.currentTarget.dataset.price) + ' p.';
                    } else if(!document.getElementsByClassName('bigCircle')[0]) {
                        dopo.textContent += ', Литая лапка';
                        price.textContent = parseInt(price.textContent) + parseInt(e.currentTarget.dataset.price) + ' p.';
                    }
                    selfKovrik.parentNode.appendChild(element);
                } else {
                    e.currentTarget.checked = false;
                }
        }
            
    } else {
        switch(e.currentTarget.name) {
            case 'shildyk':
                if(document.getElementsByClassName('shild')[0]) {
                    selfKovrik.parentNode.removeChild(document.getElementsByClassName('shild')[0]);
                    let firstPosition = (dopo.textContent.indexOf(', Шильдик') != -1)? dopo.textContent.indexOf(', Шильдик') : dopo.textContent.indexOf('Шильдик');
                    let lastPosition = (dopo.textContent.indexOf(', Шильдик') != -1)? firstPosition + 9 : firstPosition + 7;
                    dopo.textContent = (dopo.textContent.slice(0, lastPosition + 1) != 'Шильдик')? dopo.textContent.slice(0, firstPosition) + dopo.textContent.slice(lastPosition + 2) : 'Нет';
                    price.textContent = parseInt(price.textContent) - parseInt(e.currentTarget.dataset.price) + ' p.';
                }
                break;
            case 'podpyannyk_aluminievyi':
                if(flagAl) {
                    selfKovrik.parentNode.removeChild(document.getElementsByClassName('alum')[0]);
                    let firstPosition = (dopo.textContent.indexOf(', Алюминиевый подпятник') != -1)? dopo.textContent.indexOf(', Алюминиевый подпятник') : dopo.textContent.indexOf('Алюминиевый подпятник');
                    let lastPosition = (dopo.textContent.indexOf(', Алюминиевый подпятник') != -1)? firstPosition + 23 : firstPosition + 21;
                    dopo.textContent = (dopo.textContent.slice(0, lastPosition + 1) != 'Алюминиевый подпятник')? dopo.textContent.slice(0, firstPosition) + dopo.textContent.slice(lastPosition + 2) : 'Нет';
                    flagAl = false;
                    price.textContent = parseInt(price.textContent) - parseInt(e.currentTarget.dataset.price) + ' p.';
                }
                break;
            case 'podpyannyk_plastikovyi':
                if(flagPlast) {
                    selfKovrik.parentNode.removeChild(document.getElementsByClassName('plast')[0]);
                    let firstPosition = (dopo.textContent.indexOf(', Пластиковый подпятник') != -1)? dopo.textContent.indexOf(', Пластиковый подпятник') : dopo.textContent.indexOf('Пластиковый подпятник');
                    let lastPosition = (dopo.textContent.indexOf(', Пластиковый подпятник') != -1)? firstPosition + 23 : firstPosition + 21;
                    dopo.textContent = (dopo.textContent.slice(0, lastPosition + 1) != 'Пластиковый подпятник')? dopo.textContent.slice(0, firstPosition) + dopo.textContent.slice(lastPosition + 2) : 'Нет';
                    flagPlast = false;
                    price.textContent = parseInt(price.textContent) - parseInt(e.currentTarget.dataset.price) + ' p.';
                }
                break;
            case 'podpyannyk_rezinovyi':
                if(flagRes) {
                    selfKovrik.parentNode.removeChild(document.getElementsByClassName('resin')[0]);
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
                    selfKovrik.parentNode.removeChild(document.getElementsByClassName('bigCircle')[0]);
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
    selfOkantovka.src = "imgs/" + e.currentTarget.className + ".png";
}

function changeView(e) {
    let a = selfKovrik.src.slice(0, selfKovrik.src.lastIndexOf('_'));
    selfKovrik.src = a + ((firstView.checked)? '_romby.png' : '_soty.png');
    view.textContent = (firstView.checked)? 'Ромбы;' : 'Соты;'
}

function changeShape() {
    if(secondShape.checked && !document.getElementsByClassName('shaper')[0]) {
        let element = document.createElement('img');
        element.src = "imgs/3d_kovrik 1.png";
        element.className = "shaper";
        selfKovrik.parentNode.appendChild(element);
        shape.textContent = (firstShape.checked)? 'Стандарт;' : '3D;';
        if(document.getElementsByClassName('bigCircle')[0]) {
            document.getElementsByName('litaya_lapka')[0].checked = false;
            document.getElementsByName('litaya_lapka')[0].dispatchEvent(new Event('click'));
        }
        currentComplect.dispatchEvent(new Event('click'));
    } else if(firstShape.checked && document.getElementsByClassName('shaper')[0]) {
        selfKovrik.parentNode.removeChild(document.getElementsByClassName('shaper')[0]);
        currentComplect.dispatchEvent(new Event('click'));
    }
}

function changeComplects(e) {
    switch(e.currentTarget.id) {
        case 'firstComplect':
            if(flagCusov) {
                cusov.previousElementSibling.textContent = "";
                cusov.textContent = '';
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
                cusov.textContent = '';
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
                cusov.textContent = '';
                flagCusov = false;
            }
            compl.textContent = "Коврик водительский с литой лапкой;";
            if(selfComplect.src != "imgs/kovrik_voditelskiy_litaya_lapka.png") {
                price.textContent = parseInt(price.textContent) + parseInt(e.currentTarget.dataset.price1) - parseInt((currentComplect.dataset.price2 && flag3D)? currentComplect.dataset.price2 : currentComplect.dataset.price1) + ' p.';
            }
            if(firstShape.checked) {
                flag3D = false;
            } else {
                flag3D = true;
            }
            selfComplect.src = "imgs/kovrik_voditelskiy_litaya_lapka.png";
            break;
        case 'fourthComplect':
            if(flagCusov) {
                cusov.previousElementSibling.textContent = "";
                cusov.textContent = '';
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
        case 'fifthComplect':
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
        case 'sixthComplect': 
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
        cusov.textContent = e.currentTarget.options[e.currentTarget.selectedIndex].textContent + ';';
        flagCusov = true;
    } else if(flagCusov) {
        cusov.textContent = 'Не выбран;';
    }
}

function initiate() {
    price = (window.innerWidth > 834)? price1 : price2;
    selfKovrik = (window.innerWidth > 400)? selfKovrik1 : selfKovrik2;
    selfOkantovka = (window.innerWidth > 400)? selfOkantovka1 : selfOkantovka2;
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
if(window.addEventListener) {
    var flag = true;
    document.addEventListener('DOMContentLoaded', initiate, false);
} else {
    var flag = false;
    document.attachEvent('onDOMContentLoaded', initiate);
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