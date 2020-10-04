/*

    Header logic

*/

//Shape highlight
let currentShapeElement = null;
function highlightOfShapeChoice(hightlightElement) {
    if(!currentShapeElement) {
        currentShapeElement = hightlightElement;
        currentShapeElement.style.backgroundColor = '#FFF3C2';
    } else {
        currentShapeElement.style.backgroundColor = '';
        detectInformation(currentShapeElement.firstElementChild, 'remove');
        currentShapeElement = hightlightElement;
        currentShapeElement.style.backgroundColor = '#FFF3C2';
        detectInformation(currentShapeElement.firstElementChild, 'add');
    }
}

//Footer/additional highlight
function highlightFooter(hightlightElement, command) {
    switch(command) {
        case 'highlight':
            hightlightElement.style.backgroundColor = '#FFF3C2'
            break;
        case 'unhighlight':
            hightlightElement.style.backgroundColor = ''
    }
}

/*

    Popups

*/
let openedPopup = null;
function openPopup(event) {
    event.stopPropagation();
    event.currentTarget.nextElementSibling.style.display = 'block';
    openedPopup = event.currentTarget.nextElementSibling;
    element = document.createElement('div');
    element.style.position = 'absolute';
    element.style.top = 0;
    element.style.left = 0;
    element.style.right = 0;
    element.style.bottom = 0;
    element.style.height = document.body.offsetHeight + 'px';
    element.style.zIndex = 999;
    document.body.appendChild(element);
    if(flag) {
        element.addEventListener('click', closePopup, false);
    } else {
        element.attachEvent('onclick', closePopup);
    }
}

function closePopup(event) {
    event.stopPropagation();
    openedPopup.style.display = 'none';
    openedPopup = null;
    document.body.removeChild(event.currentTarget);
}

/*

    Compute the geometry of color circles

*/
function computeGeometryOfColorCircles() {
    //Color circles
   let listOfColorCicrcles = document.querySelectorAll('.inner-left-side--main ul > li');
   let colorCicrcles = [];
   for(let i = 0; i < listOfColorCicrcles.length; i++) {
    listOfColorCicrcles[i].style.cssText = '';   
    colorCicrcles.push(listOfColorCicrcles[i]);
   }
   let containerOfCircles = document.querySelector('.inner-left-side--main ul');
   let widthOfContainer = parseInt(containerOfCircles.offsetWidth - 5);

   //Define the scale of the screen
   //Laptop
   if(window.innerWidth >= 1280) {
    let space = parseInt(widthOfContainer * 0.06);
    let scaleOfCircles = parseInt((widthOfContainer - space * 7) / 8);
    colorCicrcles.forEach((element, index) => {
        let styleOfElement = element.style;
        styleOfElement.width = scaleOfCircles + 'px';
        styleOfElement.height = scaleOfCircles + 'px';
        styleOfElement.backgroundColor = element.dataset.color;
        if(index != 7 && index != 22 && index != 30 && index != 14) {
            styleOfElement.marginRight = space + 'px';
        }
        if((index >= 8 && index <= 14) || (index >= 23)) {
            styleOfElement.marginTop = parseInt(scaleOfCircles * 0.5) + 'px'
        }
    });

    //Ipad
   } else if(window.innerWidth >= 768) {
    let space = parseInt(widthOfContainer * 0.04);
    let scaleOfCircles = parseInt((widthOfContainer - space * 8) / 9);
    colorCicrcles.forEach((element, index) => {
        let styleOfElement = element.style;
        styleOfElement.width = scaleOfCircles + 'px';
        styleOfElement.height = scaleOfCircles + 'px';
        styleOfElement.backgroundColor = element.dataset.color;
        if(index != 8 && index != 23) {
            styleOfElement.marginRight = space + 'px';
        }
        if((index >= 9 && index <= 14) || (index >= 24)) {
            styleOfElement.marginTop = parseInt(scaleOfCircles * 0.5) + 'px'
        }
    });

    //Mobile
   } else {
    let space = parseInt(widthOfContainer * 0.04);
    let scaleOfCircles = parseInt((widthOfContainer - space * 8) / 9);
    colorCicrcles.forEach((element, index) => {
        let styleOfElement = element.style;
        styleOfElement.width = scaleOfCircles + 'px';
        styleOfElement.height = scaleOfCircles + 'px';
        styleOfElement.backgroundColor = element.dataset.color;
        if(index != 8 && index != 23) {
            styleOfElement.marginRight = space + 'px';
        }
        if((index >= 9 && index <= 14) || (index >= 24)) {
            styleOfElement.marginTop = parseInt(scaleOfCircles * 0.7) + 'px'
        }
    });
   }
}

/*

    Change the title of name color that chosen

*/
function changeColorTitle(event) {
    let clickedColor = event.currentTarget;
    clickedColor.parentNode.previousElementSibling.lastElementChild.textContent = clickedColor.dataset.title;
}

/*

    Selection of the color circles

*/
let currentColorKovrikCircle = null;
let currentColorOkantovkaCircle = null;
function selectColorCircle(event) {
    switch(event.currentTarget.dataset.type) {
        case 'kovrik':
            currentColorKovrikCircle.firstElementChild.style.display = 'none';
            detectInformation(currentColorKovrikCircle, 'remove');
            currentColorKovrikCircle = event.currentTarget;
            currentColorKovrikCircle.firstElementChild.style.display = 'block';
            detectInformation(currentColorKovrikCircle, 'add');
            break;
        case 'okantovka':
            currentColorOkantovkaCircle.firstElementChild.style.display = 'none';
            detectInformation(currentColorOkantovkaCircle, 'remove');
            currentColorOkantovkaCircle = event.currentTarget;
            currentColorOkantovkaCircle.firstElementChild.style.display = 'block';
            detectInformation(currentColorOkantovkaCircle, 'add');
    }
}

/*

    Hightlight the complect options 

*/
let currentHighlightComplectOption = null;
function complectOptionHighlight(hightlightElement) {
    if(!currentHighlightComplectOption) {
        currentHighlightComplectOption = hightlightElement;
        currentHighlightComplectOption.style.backgroundColor = '#FFF3C2';
    } else {
        currentHighlightComplectOption.style.backgroundColor = '';
        currentHighlightComplectOption = hightlightElement;
        currentHighlightComplectOption.style.backgroundColor = '#FFF3C2';
    }
    currentHighlightComplectOption.firstElementChild.firstElementChild.checked = true;
}

/*

    Open/close custom select

*/
function selectToggle(event) {
    if(event.currentTarget.dataset.state == 'close') {
        event.currentTarget.style.overflow = 'visible';
        event.currentTarget.dataset.state = 'open';
    } else {
        event.currentTarget.style.overflow = '';
        event.currentTarget.dataset.state = 'close';
    }
}

/*

    Change title in the custom select

*/
function changeCustomSelectTitle(event) {
    let selectedItem = event.currentTarget;
    let selection = event.currentTarget.parentNode.parentNode.previousElementSibling;
    let title = event.currentTarget.parentNode.parentNode.firstElementChild;
    selection.selectedIndex = parseInt(selectedItem.dataset.index);
    title.textContent = selectedItem.dataset.value;
}

/*

    Change the constructor image

*/
let constructorBases = [];
let constructorOkantovkas = [];
let currentKovrikColor = null;
let currentOkantovkaColor = null;
function changeConstructorImg(event) {
    let selectedItem = event.currentTarget;
    if(selectedItem.tagName != 'INPUT') {
        switch(selectedItem.dataset.type) {
            case 'kovrik':
                currentKovrikColor = selectedItem.dataset.img;
                break;
            case 'okantovka':
                currentOkantovkaColor = selectedItem.dataset.img;
        }
    }
    switch(selectedItem.dataset.type) {
        case 'kovrik':
            constructorBases.forEach((element) => {
                element.src = urlBase + currentKovrikColor + ((standartImg.checked)? '_rombi' : '_3D') + '_kovrik.png';
            });
            break;
        case 'okantovka':
            constructorOkantovkas.forEach((element) => {
                element.src = urlBase + currentOkantovkaColor + ((standartImg.checked)? "" : "_3D") + '_okantovka.png';
            });
    }
}

/*

    Append/remove the needing parts of constructor image

*/
function arConstructorImg() {    
    constructorBases.forEach((base) => {
        // Change the main image
        let container = base.parentNode;
        let kovrikBase = container.getElementsByTagName('img')[1];
        let kovrikOkantovka = container.getElementsByTagName('img')[0];
            
        kovrikBase.src = urlBase + currentKovrikColor + ((standartImg.checked)? '_rombi' : '_3D') + '_kovrik.png';
        kovrikOkantovka.src = urlBase + currentOkantovkaColor + ((standartImg.checked)? "" : "_3D") + '_okantovka.png';

        //Change the class of images for shildiks and podpatniks
        if(!standartImg.checked) {
            let shildik = container.getElementsByClassName('dynamic-shildik')[0];
            if(shildik) {
                shildik.classList.add('dynamic-3D-shildik');
                shildik.src = urlBase + shildik.dataset.threedimg;
            }

            let podpatnik = container.getElementsByClassName('dynamic-podpatnik')[0];
            if(podpatnik) {
                podpatnik.classList.add('dynamic-3D-podpatnik');
                podpatnik.src = urlBase + podpatnik.dataset.threedimg;
            }
        } else {
            let shildik = container.getElementsByClassName('dynamic-shildik')[0];
            if(shildik) {
                shildik.classList.remove('dynamic-3D-shildik');
                shildik.src = urlBase + shildik.dataset.img;
            }

            let podpatnik = container.getElementsByClassName('dynamic-podpatnik')[0];
            if(podpatnik) {
                podpatnik.classList.remove('dynamic-3D-podpatnik');
                podpatnik.src = urlBase + podpatnik.dataset.img;
            }
        }
    });

    // Change the number of schemes
    if(standartImg.checked) {
        complectOptions[complectOptions.length - 1].style.visibility = 'visible';
        complectOptions[complectOptions.length - 2].style.visibility = 'visible';
        complectOptions[complectOptions.length - 3].style.visibility = 'visible';

        complectOptions[complectOptions.length - 1].getElementsByTagName('input')[0].disabled = false;
        complectOptions[complectOptions.length - 2].getElementsByTagName('input')[0].disabled = false;
        complectOptions[complectOptions.length - 3].getElementsByTagName('input')[0].disabled = false;
    } else {
        complectOptions[complectOptions.length - 1].style.visibility = 'hidden';
        complectOptions[complectOptions.length - 2].style.visibility = 'hidden';
        complectOptions[complectOptions.length - 3].style.visibility = 'hidden';

        complectOptions[complectOptions.length - 1].getElementsByTagName('input')[0].checked = false;
        complectOptions[complectOptions.length - 2].getElementsByTagName('input')[0].checked = false;
        complectOptions[complectOptions.length - 3].getElementsByTagName('input')[0].checked = false;

        complectOptions[complectOptions.length - 1].getElementsByTagName('input')[0].disabled = true;
        complectOptions[complectOptions.length - 2].getElementsByTagName('input')[0].disabled = true;
        complectOptions[complectOptions.length - 3].getElementsByTagName('input')[0].disabled = true;

        complectOptions[complectOptions.length - 1].style.backgroundColor = '';
        complectOptions[complectOptions.length - 2].style.backgroundColor = '';
        complectOptions[complectOptions.length - 3].style.backgroundColor = '';
    }
}

/*

    Change the the constructor scheme

*/
let constructorScheme = null;
let currentSchemeImg = null;
let lastPrice = 0;
function changeConstructorScheme(event) {
    if(event.currentTarget.dataset.type != 'shape') {

        //Remove last scheme
        detectInformation(currentSchemeImg, 'remove');
        
        //Add current scheme
        currentSchemeImg = event.currentTarget.firstElementChild.firstElementChild;   
        detectInformation(currentSchemeImg, 'add');
    }

    //Count price
    countPrice(lastPrice, 'minus');

    let plusPrice = null;
    switch(standartImg.checked) {
        case true:

            //Count price
            plusPrice = parseInt(currentSchemeImg.dataset.price2d);
            countPrice(plusPrice, 'plus');
            constructorScheme.src = urlBase + currentSchemeImg.dataset.twodscheme;
            break;
        case false:

            //Count price
            plusPrice = parseInt(currentSchemeImg.dataset.price3d);
            countPrice(plusPrice, 'plus');
            constructorScheme.src = urlBase + currentSchemeImg.dataset.threedscheme;
    }
    lastPrice = plusPrice;
}

/*

    Add/remove the item on picture from sector of additional items

*/
let additionalPodpatniks = [];
let additionalShildiks = [];

function addAdditionalItemsOnImg(element) {
    constructorOkantovkas.forEach((item) => {
        let container = item.parentNode;
        if(!container.getElementsByClassName(element.dataset.class)[0]) {
            let needingElement = document.createElement('img');
            needingElement.oncontextmenu = () => false;
            needingElement.src = urlBase + ((standartImg.checked)? element.dataset.img : element.dataset.threedimg);
            needingElement.dataset.img = element.dataset.img;
            needingElement.dataset.threedimg = element.dataset.threedimg;
            needingElement.className = element.dataset.class;
            if(!standartImg.checked) {
                needingElement.classList.add('dynamic-3D-' + ((element.dataset.type == 'shildik')? 'shildik' : 'podpatnik'));
            }
            container.appendChild(needingElement);
        }
    });
}

function removeAdditionalItemsOnImg(element) {
    constructorOkantovkas.forEach((item) => {
        let container = item.parentNode;
        if(container.getElementsByClassName(element.dataset.class)[0]) {
            container.removeChild(container.getElementsByClassName(element.dataset.class)[0]);
        }
    });
}

//For reloading
function checkAdditionalItemsOnReload() {
    let listOfFooterItems = document.querySelectorAll('.range-of-item > li');
    let footerItems = [];
    for(let i = 0; i < listOfFooterItems.length; i++) {
        footerItems.push(listOfFooterItems[i]);
    }
    footerItems.forEach((element) => {
        if(element.firstElementChild.firstElementChild.checked) {
            element.firstElementChild.firstElementChild.checked = false;
            element.dispatchEvent(new Event('click'));
        }
    });
}

function changeAdditionalItemsOnImg(event) {
    let element = event.currentTarget.firstElementChild.nextElementSibling.firstElementChild; //Input
    let price = parseInt(element.dataset.price);

    //Define type of event
    if(event.type == 'click') {
        element.checked = !element.checked;
    }

    //Define on/off
    if(element.checked) {
        //Define type of the image to define the needing logic
        switch(element.dataset.type) {
            case 'shildik':
                for(let i = 0; i < additionalShildiks.length; i++) {
                    if(additionalShildiks[i] != element && additionalShildiks[i].checked) {
                        let otherPrice = parseInt(additionalShildiks[i].dataset.price);
                        additionalShildiks[i].checked = false;
                        additionalShildiks[i].parentNode.parentNode.firstElementChild.style.backgroundColor = '';
                        
                        //Remove the additional items on constructor images
                        removeAdditionalItemsOnImg(additionalShildiks[i]);

                        //Gather infromation for describing good
                        detectInformation(additionalShildiks[i], 'remove');

                        //Count price
                        countPrice(otherPrice, 'minus');
                        break;
                    }
                }

                //Add the additional items on constructor images
                addAdditionalItemsOnImg(element);
                element.parentNode.parentNode.firstElementChild.style.backgroundColor = '#FFF3C2';

                //Gather infromation for describing good
                detectInformation(element, 'add');

                //Count price
                countPrice(price, 'plus');
                break;
            case 'podpatnik':
                for(let i = 0; i < additionalPodpatniks.length; i++) {
                    if(additionalPodpatniks[i] != element && additionalPodpatniks[i].checked) {
                        let otherPrice = parseInt(additionalPodpatniks[i].dataset.price);
                        additionalPodpatniks[i].checked = false;
                        additionalPodpatniks[i].parentNode.parentNode.firstElementChild.style.backgroundColor = '';
                        
                        //Remove the additional items on constructor images
                        removeAdditionalItemsOnImg(additionalPodpatniks[i]);

                        //Gather infromation for describing good
                        detectInformation(additionalPodpatniks[i], 'remove');

                        //Count price
                        countPrice(otherPrice, 'minus');
                        break;
                    }
                }

                //Add the additional items on constructor images
                addAdditionalItemsOnImg(element);
                element.parentNode.parentNode.firstElementChild.style.backgroundColor = '#FFF3C2';

                //Gather infromation for describing good
                detectInformation(element, 'add');

                //Count price
                countPrice(price, 'plus');
                break;
        }
    } else {

        element.parentNode.parentNode.firstElementChild.style.backgroundColor = '';

        //Remove the additional items on constructor images
        removeAdditionalItemsOnImg(element);

        //Gather infromation for describing good
        detectInformation(element, 'remove');

        //Count price
        countPrice(price, 'minus');
    }
}

/*

    Gather infromation for describing text

*/
function detectInformation(element, command) {
    let elementClass = element.dataset.describingclass;
    let describingPlace = describingContainer.getElementsByClassName(elementClass)[0];
    let text = describingPlace.innerHTML;

    //Define the command remove/add and create needing text
    switch(command) {
        case 'add':
            
            //Define empty or not
            if(text.indexOf(defaultTitleOfSubscribing) != -1) {
                let firstIndex = text.indexOf(' ' + defaultTitleOfSubscribing);
                let firstPart = text.substring(0, firstIndex);
                text = firstPart;
            }

            //Additional describing
            if(elementClass == 'additional-describing' && text.indexOf('</b>') + '</b>'.length == text.length) {
                text += ' ' + element.dataset.value.substring(0, element.dataset.value.length - 1); // without dot comma in the end
            } else if(elementClass == 'additional-describing' && text.indexOf('</b>') + '</b>'.length != text.length) {
                text += '; ' + element.dataset.value.substring(0, element.dataset.value.length - 1); // without dot comma in the end and with dot comma before
            } else {
                text += ' ' + element.dataset.value;
            }

            //Complect describing
            if(elementClass == 'complect-describing') {
                if(element.dataset.cusov == 'true') {
                    let cusovDescribing = document.getElementsByClassName('cusov-describing')[0];
                    cusovDescribing.classList.remove('close-cusov-describing');
                    cusovElement = element.parentNode.parentNode.getElementsByTagName('select')[0];
                    let valueOfCusov = cusovElement.value;
                    let cusovDescribingText = cusovDescribing.innerHTML;
                    cusovDescribingText += ' ' + valueOfCusov + ';';
                    cusovDescribing.innerHTML = cusovDescribingText;
                }
            }

            describingPlace.innerHTML = text;
            break;
        case 'remove':
            let needingText = ' ' + element.dataset.value;
            let firstIndex = (text.indexOf(needingText) != -1)? text.indexOf(needingText) : text.indexOf(needingText.substring(0, needingText.length - 1)); //Define with ; in the end or not
            let lastIndex = (text.indexOf(needingText) != -1)? text.indexOf(needingText) + needingText.length : text.indexOf(needingText.substring(0, needingText.length - 1)) + needingText.length - 1; //Define with ; in the end or not
            let firstPart = text.substring(0, firstIndex);
            let secondPart = text.substring(lastIndex);
            text = firstPart + secondPart;

            //Additional describing
            if(elementClass == 'additional-describing' && text.indexOf('</b>') + '</b>'.length == text.length) {
                let firstIndex = text.indexOf('</b>') + '</b>'.length;
                let firstPart = text.substring(0, firstIndex);
                text = firstPart + ' ' + defaultTitleOfSubscribing; //if empty
            }

            //Complect describing
            if(elementClass == 'complect-describing') {
                if(element.dataset.cusov == 'true') {
                    let cusovDescribing = document.getElementsByClassName('cusov-describing')[0];
                    cusovDescribing.classList.add('close-cusov-describing');
                    cusovElement = element.parentNode.parentNode.getElementsByTagName('select')[0];
                    let cusovDescribingText = cusovDescribing.innerHTML;
                    cusovDescribingText = cusovDescribingText.substring(0, cusovDescribingText.indexOf('</b>') + '</b>'.length);
                    cusovDescribing.innerHTML = cusovDescribingText;
                }
            }

            if(text.indexOf(';') == text.length - 1) {
                text = text.substring(0, text.length-1);
            }
            describingPlace.innerHTML = text;
    }
}

/*

    Animate mobile window

*/
function animateMobileWindow(event) {
    let listOfClasses = mobileWindow.classList;
    if(listOfClasses.contains('mobile-window--open')) {
        listOfClasses.remove('mobile-window--open');
        listOfClasses.add('mobile-window--close');
    } else if(listOfClasses.contains('mobile-window--close')) {
        listOfClasses.remove('mobile-window--close');
        listOfClasses.add('mobile-window--open');
    } else {
        listOfClasses.add('mobile-window--open');
    }
}

/*

    Count result price

*/
let pricePlace = null;
function countPrice(price, command) {
    switch(command) {
        case 'plus':
            pricePlace.textContent = price + parseInt(pricePlace.textContent) + ' p.';
            break;
        case 'minus':
            pricePlace.textContent = parseInt(pricePlace.textContent) - price + ' p.';
    }
}

/*
    Show mobile window with switch
*/
let mobileWindow = null;
let mobileButton = null;
function fadeOutMobileWindow() {
    mobileWindow.style.display = 'block';
    mobileButton.style.display = 'block';
}

/*

    Hide mobile window with switch

*/
function fadeInMobileWindow() {
    mobileWindow.style.display = 'none';
    mobileButton.style.display = 'none';
}

/*
   
    Сheck the size of window for mobile switch
   
*/
let headerRadioButtons = []; //heeader radio buttons
let colorCicrcles = []; //color circles
let complectOptions = []; //complect options
let footerItems = []; // footer items

function checkSizeForMobileWindow() {
    if(flag) {
        if(window.innerWidth <= 1024) {

            //Add event handler

            //Header buttons
            headerRadioButtons.forEach( element => {
                element.addEventListener('change', fadeOutMobileWindow, false);
            });

            //Colors
            colorCicrcles.forEach( element => {
                element.addEventListener('click', fadeOutMobileWindow, false);
            });

            //Complect options
            complectOptions.forEach( element => {
                element.addEventListener('click', fadeOutMobileWindow, false);
            });

            //Footer buttons
            footerItems.forEach( element => {
                element.addEventListener('click', fadeOutMobileWindow, false);
            });

        } else {

            //Remove event handler

            //Header buttons
            headerRadioButtons.forEach( element => {
                element.removeEventListener('change', fadeOutMobileWindow, false);
            });

            //Colors
            colorCicrcles.forEach( element => {
                element.removeEventListener('click', fadeOutMobileWindow, false);
            });

            //Complect options
            complectOptions.forEach( element => {
                element.removeEventListener('click', fadeOutMobileWindow, false);
            });

            //Footer buttons
            footerItems.forEach( element => {
                element.removeEventListener('click', fadeOutMobileWindow, false);
            });

            fadeInMobileWindow();
        }

    // IE
    } else {
        if(window.innerWidth <= 1024) {

            //Add event handler

            //Header buttons
            headerRadioButtons.forEach( element => {
                element.attachEvent('onchange', fadeOutMobileWindow);
            });

            //Colors
            colorCicrcles.forEach( element => {
                element.attachEvent('onclick', fadeOutMobileWindow);
            });

            //Complect options
            complectOptions.forEach( element => {
                element.attachEvent('onclick', fadeOutMobileWindow);
            });

            //Footer buttons
            footerItems.forEach( element => {
                element.attachEvent('onclick', fadeOutMobileWindow);
            });

        } else {

            //Remove event handler

            //Header buttons
            headerRadioButtons.forEach( element => {
                element.detachEvent('onchange', fadeOutMobileWindow);
            });

            //Colors
            colorCicrcles.forEach( element => {
                element.detachEvent('onclick', fadeOutMobileWindow)
            });

            //Complect options
            complectOptions.forEach( element => {
                element.detachEvent('onclick', fadeOutMobileWindow);
            });

            //Footer buttons
            footerItems.forEach( element => {
                element.detachEvent('onclick', fadeOutMobileWindow);
            });
        }
    }   
}

function addToBin() {
    document.getElementsByClassName('t706')[0].style.display = 'none';
    
    //Define the items and their options to add to the bin
    let options = describingContainer.textContent.split(';');
    
    //Delete not needing words and spaces
    for(let i = 0; i < options.length; i++) {
        options[i] = options[i].split(': ').splice(1).map((element) => element.trim()).join(' ');
    }

    // Define two items in accessory or not
    if(options[options.length - 1] == '') {
        options[options.length - 2] = options[options.length - 2] + '; ' + describingContainer.textContent.split(';')[options.length - 1].trim();
        delete options[options.length - 1];
    }
    
    // Create the store of result options
    let goodOptions = {};
    goodOptions.shape = options[0];
    goodOptions.complect = options[1];
    if(goodOptions.complect == 'В багажник' || goodOptions.complect == 'Комплект на весь салон с перемычкой + в багажник' || goodOptions.complect == 'Комплект на весь салон в три ряда + в багажник') goodOptions.bagage = options[2];
    goodOptions.kovrikColor = (goodOptions.complect == 'В багажник' || goodOptions.complect == 'Комплект на весь салон с перемычкой + в багажник' ||  goodOptions.complect == 'Комплект на весь салон в три ряда + в багажник')? options[3] : options[2];
    goodOptions.okantovkaColor = (goodOptions.complect == 'В багажник' || goodOptions.complect == 'Комплект на весь салон с перемычкой + в багажник' ||  goodOptions.complect == 'Комплект на весь салон в три ряда + в багажник')? options[4] : options[3];
    goodOptions.accessory = (goodOptions.complect == 'В багажник' || goodOptions.complect == 'Комплект на весь салон с перемычкой + в багажник' ||  goodOptions.complect == 'Комплект на весь салон в три ряда + в багажник')? options[5] : options[4];

    // Add complects with choden options
    let openWindow = null;
    let complectCard = null;
    switch(goodOptions.complect) {
        case 'Водительский':
            complectCard = document.getElementsByClassName('js-store-prod-btn t-store__card__btn t-btn t-btn_sm')[DRIVER];
            complectCard.dispatchEvent(new Event('click'));
            document.body.style.overflow = 'scroll';
            openWindow = document.getElementsByClassName('t-popup')[0];
            openWindow.style.visibility = 'hidden';
            setTimeout(initComplectOptions, 500, goodOptions, openWindow);
            break;
        case 'Водительский и пассажирский':
            complectCard = document.getElementsByClassName('js-store-prod-btn t-store__card__btn t-btn t-btn_sm')[DRIVER_AND_PASSENGER];
            complectCard.dispatchEvent(new Event('click'));
            document.body.style.overflow = 'scroll';
            openWindow = document.getElementsByClassName('t-popup')[0];
            openWindow.style.visibility = 'hidden';
            setTimeout(initComplectOptions, 500, goodOptions, openWindow);
            break;
        case 'Комплект на весь салон':
            complectCard = document.getElementsByClassName('js-store-prod-btn t-store__card__btn t-btn t-btn_sm')[ALL_SALON];
            complectCard.dispatchEvent(new Event("click", {bubbles: true}));
            document.body.style.overflow = 'scroll';
            openWindow = document.getElementsByClassName('t-popup')[0];
            openWindow.style.visibility = 'hidden';
            setTimeout(initComplectOptions, 500, goodOptions, openWindow);
            break;
        case 'Комплект на весь салон с перемычкой + в багажник':
            complectCard = document.getElementsByClassName('js-store-prod-btn t-store__card__btn t-btn t-btn_sm')[ALL_SALON_PLUS_BAGAGE];
            complectCard.dispatchEvent(new Event("click", {bubbles: true}));
            document.body.style.overflow = 'scroll';
            openWindow = document.getElementsByClassName('t-popup')[0];
            openWindow.style.visibility = 'hidden';
            setTimeout(initComplectOptions, 500, goodOptions, openWindow);
            break;
        case 'Комплект на весь салон в три ряда':
            complectCard = document.getElementsByClassName('js-store-prod-btn t-store__card__btn t-btn t-btn_sm')[ALL_SALON_THREE_RANGE];
            complectCard.dispatchEvent(new Event("click", {bubbles: true}));
            document.body.style.overflow = 'scroll';
            openWindow = document.getElementsByClassName('t-popup')[0];
            openWindow.style.visibility = 'hidden';
            setTimeout(initComplectOptions, 500, goodOptions, openWindow);
            break;
        case 'Комплект на весь салон в три ряда + в багажник':
            complectCard = document.getElementsByClassName('js-store-prod-btn t-store__card__btn t-btn t-btn_sm')[ALL_SALON_THREE_RANGE_PLUS_BAGAGE];
            complectCard.dispatchEvent(new Event('click'));
            document.body.style.overflow = 'scroll';
            openWindow = document.getElementsByClassName('t-popup')[0];
            openWindow.style.visibility = 'hidden';
            setTimeout(initComplectOptions, 500, goodOptions, openWindow);
            break;
        case 'В багажник':
            complectCard = document.getElementsByClassName('js-store-prod-btn t-store__card__btn t-btn t-btn_sm')[BAGAGE];
            complectCard.dispatchEvent(new Event('click'));
            document.body.style.overflow = 'scroll';
            openWindow = document.getElementsByClassName('t-popup')[0];
            openWindow.style.visibility = 'hidden';
            setTimeout(initComplectOptions, 500, goodOptions, openWindow);
    }
}

// Install the chosen options in the bin
function initComplectOptions(options, openWindow) {
    document.body.style.overflow = 'auto';
    
    // Choose the chosen option
    if(options.complect != 'В багажник' && options.complect != 'Комплект на весь салон в три ряда + в багажник' && options.complect != 'Комплект на весь салон в три ряда' && options.complect != 'Комплект на весь салон с перемычкой + в багажник' && options.complect != 'Комплект на весь салон в три ряда + в багажник') {
        openWindow.getElementsByTagName('select')[SHAPE].value = options.shape;
        openWindow.getElementsByTagName('select')[KOVRIK_COLOR].value = options.kovrikColor;
        openWindow.getElementsByTagName('select')[OKANTOVKA_COLOR].value = options.okantovkaColor;
    } else if(options.complect == 'В багажник' || options.complect == 'Комплект на весь салон в три ряда + в багажник') {
        openWindow.getElementsByTagName('select')[BAGAGE_TYPE].value = options.bagage;
        openWindow.getElementsByTagName('select')[KOVRIK_COLOR].value = options.kovrikColor;
        openWindow.getElementsByTagName('select')[OKANTOVKA_COLOR].value = options.okantovkaColor;
    } else if(options.complect == 'Комплект на весь салон в три ряда' || options.complect == 'Комплект на весь салон в три ряда + в багажник') {
        openWindow.getElementsByTagName('select')[KOVRIK_COLOR - 1].value = options.kovrikColor;
        openWindow.getElementsByTagName('select')[OKANTOVKA_COLOR - 1].value = options.okantovkaColor;
    } else {
        openWindow.getElementsByTagName('select')[SHAPE].value = options.shape;
        openWindow.getElementsByTagName('select')[BAGAGE_TYPE + 1].value = options.bagage;
        openWindow.getElementsByTagName('select')[KOVRIK_COLOR + 1].value = options.kovrikColor;
        openWindow.getElementsByTagName('select')[OKANTOVKA_COLOR + 1].value = options.okantovkaColor;
    }
    
    // Choose the image
    switch(options.complect) {
        case 'Водительский':
            if(options.shape == '3D') {
                openWindow.getElementsByClassName('js-product-price js-store-prod-price-val t-store__prod-popup__price-value')[0].textContent = document.querySelectorAll('.inner-right-side--main .hidden-radio-button')[0].dataset.price3d;
                openWindow.getElementsByClassName('js-store-product js-product')[0].dataset.productImg = 'https://static.tildacdn.com/tild3937-3561-4231-b735-326333393338/3d_voditelskiy.png';
            }
            break;
        case 'Водительский и пассажирский':
            if(options.shape == '3D') {
                openWindow.getElementsByClassName('js-product-price js-store-prod-price-val t-store__prod-popup__price-value')[0].textContent = document.querySelectorAll('.inner-right-side--main .hidden-radio-button')[1].dataset.price3d;
                openWindow.getElementsByClassName('js-store-product js-product')[0].dataset.productImg = 'https://static.tildacdn.com/tild3763-6663-4639-a665-346461323939/3d_komplekt_perednie.png';
            }
            break;
        case 'Комплект на весь салон':
            if(options.shape == '3D') {
                openWindow.getElementsByClassName('js-product-price js-store-prod-price-val t-store__prod-popup__price-value')[0].textContent = document.querySelectorAll('.inner-right-side--main .hidden-radio-button')[2].dataset.price3d;
                openWindow.getElementsByClassName('js-store-product js-product')[0].dataset.productImg = 'https://static.tildacdn.com/tild6133-3866-4063-b736-346661636138/3d_komplekt.png';
            }
            break;
        case 'Комплект на весь салон с перемычкой + в багажник':
            if(options.shape == '3D') {
                openWindow.getElementsByClassName('js-product-price js-store-prod-price-val t-store__prod-popup__price-value')[0].textContent = document.querySelectorAll('.inner-right-side--main .hidden-radio-button')[3].dataset.price3d;
                openWindow.getElementsByClassName('js-store-product js-product')[0].dataset.productImg = 'https://static.tildacdn.com/tild6565-6634-4135-b461-653233626137/komplekt_3d_v_bagajn.png';
            }

    }
    openWindow.getElementsByClassName('t-store__prod-popup__btn t-btn t-btn_sm')[0].dispatchEvent(new Event("click", {bubbles: true}));
    openWindow.classList.remove('t-popup_show');
    openWindow.style.display = 'none'; 
    setTimeout(() => {
        openWindow.style.visibility = '';
        
        // Add the accessories if they are
        let openPodpatnikWindow = null;
        let openShildikWindow = null;

        if(options.accessory !== 'Ничего не выбрано') {
            let items = options.accessory.split('; ');
            
            let [key, value] = items[0].split(' ');
            if(key == 'Подпятник') {
                complectCard = document.getElementsByClassName('js-store-prod-btn t-store__card__btn t-btn t-btn_sm')[PODPATNIK];
                complectCard.dispatchEvent(new Event('click'));
                document.body.style.overflow = 'scroll';
                openPodpatnikWindow = document.getElementsByClassName('t-popup')[0];
                openPodpatnikWindow.style.visibility = 'hidden';
                switch(value) {
                    case 'чёрный':
                        document.getElementsByClassName('js-store-product js-product')[0].dataset.productImg = 'https://static.tildacdn.com/tild6464-6531-4561-a435-343832303834/podpyatnik_cherniy1_.jpg';
                        break;
                    case 'бежевый':
                        document.getElementsByClassName('js-store-product js-product')[0].dataset.productImg = 'https://static.tildacdn.com/tild3037-3664-4766-b331-323039393137/podpyatnik_bejevyi_e.jpg';
                }
                setTimeout(initAccessory, 500, value, openPodpatnikWindow, items);
            } else {
                complectCard = document.getElementsByClassName('js-store-prod-btn t-store__card__btn t-btn t-btn_sm')[SHILDIK];
                complectCard.dispatchEvent(new Event('click'));
                document.body.style.overflow = 'scroll';
                openShildikWindow = document.getElementsByClassName('t-popup')[0];
                openShildikWindow.getElementsByClassName('js-product-price js-store-prod-price-val t-store__prod-popup__price-value')[0].textContent = SHILDIK_PRICE[value[0].toUpperCase() + value.slice(1)]; // Define the price
                openShildikWindow.style.visibility = 'hidden';
                switch(value) {
                    case 'средний':
                        document.getElementsByClassName('js-store-product js-product')[0].dataset.productImg = 'https://static.tildacdn.com/tild3966-3330-4762-b239-663539386534/logotip_sredniy.jpg';
                        break;
                    case 'большой':
                        document.getElementsByClassName('js-store-product js-product')[0].dataset.productImg = 'https://static.tildacdn.com/tild3164-3461-4439-b433-386536366261/logotip_1.jpeg';
                }
                setTimeout(initAccessory, 500, value, openShildikWindow, items);
            }
        } else {
                document.getElementsByClassName('t706')[0].style.display = '';
        }
    }, 500);
}

// Install the chosen options in the bin
function initAccessory(value, openWindow, options) {
    document.body.style.overflow = 'auto';
    openWindow.getElementsByTagName('select')[0].value = value[0].toUpperCase() + value.slice(1);
    openWindow.getElementsByClassName('t-store__prod-popup__btn t-btn t-btn_sm')[0].dispatchEvent(new Event("click", {bubbles: true}));
    openWindow.classList.remove('t-popup_show');
    openWindow.style.display = 'none'; 
    setTimeout(() => {
        openWindow.style.visibility = '';

        // Add the accessories if they are
        let openPodpatnikWindow = null;
        let openShildikWindow = null;
        if(options.length != 1) {
            let [key, value] = options[1].split(' ');

            if(key == 'Подпятник') {
                complectCard = document.getElementsByClassName('js-store-prod-btn t-store__card__btn t-btn t-btn_sm')[PODPATNIK];
                complectCard.dispatchEvent(new Event("click", {bubbles: true}));
                document.body.style.overflow = 'scroll';
                openPodpatnikWindow = document.getElementsByClassName('t-popup')[0];
                openPodpatnikWindow.style.visibility = 'hidden';
                switch(value) {
                    case 'чёрный':
                        document.getElementsByClassName('js-store-product js-product')[0].dataset.productImg = 'https://static.tildacdn.com/tild6464-6531-4561-a435-343832303834/podpyatnik_cherniy1_.jpg';
                        break;
                    case 'бежевый':
                        document.getElementsByClassName('js-store-product js-product')[0].dataset.productImg = 'https://static.tildacdn.com/tild3037-3664-4766-b331-323039393137/podpyatnik_bejevyi_e.jpg';
                }
                setTimeout(initAccessory, 500, value, openPodpatnikWindow, ['end']);
            } else {
                complectCard = document.getElementsByClassName('js-store-prod-btn t-store__card__btn t-btn t-btn_sm')[SHILDIK];
                complectCard.dispatchEvent(new Event('click'));
                document.body.style.overflow = 'scroll';
                openShildikWindow = document.getElementsByClassName('t-popup')[0];
                openShildikWindow.getElementsByClassName('js-product-price js-store-prod-price-val t-store__prod-popup__price-value')[0].textContent = SHILDIK_PRICE[value[0].toUpperCase() + value.slice(1)]; // Define the price
                openShildikWindow.style.visibility = 'hidden';
                switch(value) {
                    case 'средний':
                        document.getElementsByClassName('js-store-product js-product')[0].dataset.productImg = 'https://static.tildacdn.com/tild3966-3330-4762-b239-663539386534/logotip_sredniy.jpg';
                        break;
                    case 'большой':
                        document.getElementsByClassName('js-store-product js-product')[0].dataset.productImg = 'https://static.tildacdn.com/tild3164-3461-4439-b433-386536366261/logotip_1.jpeg';
                }
                setTimeout(initAccessory, 500, value, openShildikWindow, ['end']);
            }
        } else {
            document.getElementsByClassName('t706')[0].style.display = '';
        }
    }, 500);
}

/*

    Initiate the data about website

*/
function initiate() {
    /*
    
        Create the array of needing elements

    */

    //Header radio buttons
   let listOfHeaderRadioButtons = document.querySelectorAll('.header .hidden-radio-button');
   for(let i = 0; i < listOfHeaderRadioButtons.length; i++) {
    headerRadioButtons.push(listOfHeaderRadioButtons[i]);
   }

   //Pop-icons
   let listOfPopIcons = document.getElementsByClassName('pop-icon');
   let popIcons = [];
   for(let i = 0; i < listOfPopIcons.length; i++) {
    popIcons.push(listOfPopIcons[i]);
   }

   //Color circles
   let listOfColorCicrcles = document.querySelectorAll('.inner-left-side--main ul > li');
   for(let i = 0; i < listOfColorCicrcles.length; i++) {
    colorCicrcles.push(listOfColorCicrcles[i]);
   }

   //Select the color circles
   currentColorKovrikCircle = colorCicrcles[0]; //kovrik black
   currentColorKovrikCircle.firstElementChild.style.display = 'block';
   currentColorOkantovkaCircle = colorCicrcles[15]; //okantovka black
   currentColorOkantovkaCircle.firstElementChild.style.display = 'block';

   //Complect options
   let listOfComplectOptions = document.querySelectorAll('.inner-right-side--main > ul > li');
   for(let i = 0; i < listOfComplectOptions.length; i++) {
    complectOptions.push(listOfComplectOptions[i]);
   }

   //Custom select
   let listOfCustomSelections = document.getElementsByClassName('custom-select-container');
   let customSelections = [];
   for(let i = 0; i < listOfCustomSelections.length; i++) {
    customSelections.push(listOfCustomSelections[i]);
   }

   //Custom option
   let listOfCustomOptions = document.querySelectorAll('.custom-select-list li');
   let customOptions = [];
   for(let i = 0; i < listOfCustomOptions.length; i++) {
    customOptions.push(listOfCustomOptions[i]);
   }

   //Initial colors of image parts
   currentKovrikColor = 'black';
   currentOkantovkaColor = 'black';

   //Constructor image parts
   let listOfConstructorOkantovkas = document.querySelectorAll('.constructor-img-container img:first-of-type');
   for(let i = 0; i < listOfConstructorOkantovkas.length; i++) {
        constructorOkantovkas.push(listOfConstructorOkantovkas[i]);
   }
   let listOfConstructorBases = document.querySelectorAll('.constructor-img-container > img:nth-of-type(2)');
   for(let i = 0; i < listOfConstructorBases.length; i++) {
        constructorBases.push(listOfConstructorBases[i]);
   }
   constructorScheme = document.querySelector('.constructor-scheme-container img');

   //Shape of constructor image
   standartImg = document.getElementById('standart');

   //Define footer items
   let listOfFooterItems = document.querySelectorAll('.range-of-item  li');
   for(let i = 0; i < listOfFooterItems.length; i++) {
    footerItems.push(listOfFooterItems[i]);
   }

   //Define additional shildik
   let listOfAdditionalShildiks = document.querySelectorAll('.range-of-item .checkbox-container input[data-type=\"shildik\"]')    ;
   for(let i = 0; i < listOfAdditionalShildiks.length; i++) {
    additionalShildiks.push(listOfAdditionalShildiks[i]);
   }

   //Define additional podpatniks
   let listOfAdditionalPodpatniks = document.querySelectorAll('.range-of-item .checkbox-container input[data-type=\"podpatnik\"]');
   for(let i = 0; i < listOfAdditionalPodpatniks.length; i++) {
    additionalPodpatniks.push(listOfAdditionalPodpatniks[i]);
   }

   //Define describing container
   describingContainer = document.getElementsByClassName('describing-of-good')[0];

   //Define price place
   pricePlace = document.getElementsByClassName('self-price')[0];

   //Define submit button
   submitButton = document.querySelector('footer span[data-name="Eva"]').parentNode;

   //Define mobile window && mobile button
   mobileWindow = document.getElementsByClassName('mobile-window')[0];
   mobileButton = document.getElementsByClassName('mobile-window-switch')[0];

    /*
    
        Install event handlers

    */
   if(flag) {

        //Choose the event handler for highlight info
        headerRadioButtons.forEach((element, index) => {
            if(element.checked) {
                highlightOfShapeChoice(element.parentNode);
                detectInformation(element, 'add');
            }
            element.addEventListener('click', changeConstructorScheme, false); // change the constructor scheme
            element.addEventListener('change', (event) => { highlightOfShapeChoice(event.currentTarget.parentNode) }, false); //highlight the button
            element.addEventListener('change', arConstructorImg, false); // append/remove needing parts of constructor images
            
        });

        //Choose the event handler for pop-icons
        popIcons.forEach((element) => {  
            element.addEventListener('click', openPopup, false);
        });

        //Color circles when clicked
        colorCicrcles.forEach((element) => {
            element.addEventListener('click', changeColorTitle, false);
        });

        //Color circles when clicked
        colorCicrcles.forEach((element) => {
            element.addEventListener('click', selectColorCircle, false);
        });

        //Color circles when change the size of window
        window.addEventListener('resize', computeGeometryOfColorCircles, false);
        computeGeometryOfColorCircles();

        //Check the size of window when resize for mobile window
        window.addEventListener('resize', checkSizeForMobileWindow, false);

        //Install the event handler for complect options
        complectOptions.forEach((element, index) => {
            if(element.firstElementChild.firstElementChild.checked) {
                complectOptionHighlight(element);
                currentSchemeImg = element.firstElementChild.firstElementChild; //define the choice for reloading page
                element.addEventListener('click', (event) => { complectOptionHighlight(event.currentTarget) }, false); //highlight complect options
                element.addEventListener('click', changeConstructorScheme, false); //change scheme
                detectInformation(currentSchemeImg, 'add');
                element.dispatchEvent(new Event('click'));
                return;
            }
            element.addEventListener('click', (event) => { complectOptionHighlight(event.currentTarget) }, false); //highlight complect options
            element.addEventListener('click', changeConstructorScheme, false); //change scheme
        });

        //Install event handler for open/close custom select
        customSelections.forEach((element) => {
            element.addEventListener('click', selectToggle, false);
        });

        //Install event handler for custom options
        customOptions.forEach((element) => {
            element.addEventListener('click', changeCustomSelectTitle, false);
        });
        
        //Install event handler for color circles to change the constructor img
        colorCicrcles.forEach((element) => {
            element.addEventListener('click', changeConstructorImg, false);
        });

        //Install event handler for footer items
        footerItems.forEach((element) => {
            element.addEventListener('click', changeAdditionalItemsOnImg, false);
        });

        //Install event handker for submit button
        submitButton.addEventListener('click', addToBin, false);

        /*
   
            Сheck the size of window for mobile switch
   
        */
        if(window.innerWidth <= 1024) {

            //Add event handler

            //Header buttons
            headerRadioButtons.forEach( element => {
                element.addEventListener('change', fadeOutMobileWindow, false);
            });

            //Colors
            colorCicrcles.forEach( element => {
                element.addEventListener('click', fadeOutMobileWindow, false);
            });

            //Complect options
            complectOptions.forEach( element => {
                element.addEventListener('click', fadeOutMobileWindow, false);
            });

            //Footer buttons
            footerItems.forEach( element => {
                element.addEventListener('click', fadeOutMobileWindow, false);
            });

            //Install event handler for mobile button
            mobileButton.addEventListener('click', animateMobileWindow, false);

        }

    //IE
   } else {
        headerRadioButtons.forEach((element, index) => {
            if(element.checked) {
                highlightOfShapeChoice(element.parentNode);
            }
            element.attachEvent('onchange', (event) => { highlightOfShapeChoice(event.currentTarget.parentNode) }); //highlight the button
            element.attachEvent('onclick', changeConstructorScheme); // change the constructor scheme
            element.attachEvent('onchange', arConstructorImg); // append/remove needing parts of constructor images
            
        });

        //Choose the event handler for pop-icons
        popIcons.forEach((element) => {  
            element.attachEvent('onclick', openPopup);
        });

        //Color circles when clicked
        colorCicrcles.forEach((element) => {
            element.attachEvent('onclick', changeColorTitle);
        });

        //Color circles when clicked
        colorCicrcles.forEach((element) => {
            element.attachEvent('onclick', selectColorCircle);
        });

        //Color circles when change the size of window
        window.attachEvent('onresize', computeGeometryOfColorCircles);
        computeGeometryOfColorCircles();

        //Check the size of window when resize for mobile window
        window.attachEvent('onresize', checkSizeForMobileWindow);

        //Install the event handler for complect options
        complectOptions.forEach((element) => {
            if(element.firstElementChild.firstElementChild.checked) { 
                complectOptionHighlight(element);
                currentSchemeImg = element.firstElementChild.firstElementChild; //define the choice for reloading page
                element.attachEvent('onclick', (event) => { complectOptionHighlight(event.currentTarget) }); //highlight complect options
                element.attachEvent('onclick', changeConstructorScheme); //change scheme
                detectInformation(currentSchemeImg, 'add');
                element.dispatchEvent(new Event('click'));
                return;
            }
            element.attachEvent('onclick', (event) => { complectOptionHighlight(event.currentTarget) }); //highlight complect options
            element.attachEvent('onclick', changeConstructorScheme); //change scheme
        });

        //Install event handler for open/close custom select
        customSelections.forEach((element) => {
            element.attachEvent('onclick', selectToggle);
        });

        //Install event handler for custom options
        customOptions.forEach((element) => {
            element.attachEvent('onclick', changeCustomSelectTitle);
        });
        
        //Install event handler for color circles to change the constructor img
        colorCicrcles.forEach((element) => {
            element.attachEvent('onclick', changeConstructorImg);
        });

        //Install event handler for footer items
        footerItems.forEach((element) => {
            element.attachEvent('onclick', changeAdditionalItemsOnImg);
        });

        //Install event handker for submit button
        submitButton.attachEvent('onclick', addToBin);

        /*
   
            Сheck the size of window for mobile switch
   
        */
        if(window.innerWidth <= 1024) {

            //Add event handler

            //Header buttons
            headerRadioButtons.forEach( element => {
                element.attachEvent('onchange', fadeOutMobileWindow);
            });

            //Colors
            colorCicrcles.forEach( element => {
                element.attachEvent('onclick', fadeOutMobileWindow);
            });

            //Complect options
            complectOptions.forEach( element => {
                element.attachEvent('onclick', fadeOutMobileWindow);
            });

            //Footer buttons
            footerItems.forEach( element => {
                element.attachEvent('onclick', fadeOutMobileWindow);
            });

            //Install event handler for mobile button
            mobileButton.attachEvent('onclick', animateMobileWindow);
        }
   }

   //For reloading page
   //Constructor img, only base of kovrik, as input has influence only for him
   constructorBases.forEach((element) => {
       element.src = urlBase + currentKovrikColor + ((standartImg.checked)? '_rombi' : '_3D') + '_kovrik.png';
   });

    //Add/remove needing part of constructor images
    arConstructorImg();

    //Check additional items on img
    checkAdditionalItemsOnReload();
}


/*

    Install the event handler of initiate

*/
let flag;
const urlBase = 'https://plotnikovphilipp.github.io/ClientKovrik/imgs/';
let standartImg = null;
let describingContainer = null;
const defaultTitleOfSubscribing = 'Ничего не выбрано';
let submitButton = null;
const nameOfSubmitButton = 'Eva коврик';

// Items of kovriks
const DRIVER = 0;
const DRIVER_AND_PASSENGER = 1;
const BAGAGE = 2;
const ALL_SALON = 3;
const ALL_SALON_PLUS_BAGAGE = 4;
const ALL_SALON_THREE_RANGE = 5;
const ALL_SALON_THREE_RANGE_PLUS_BAGAGE = 6;

const PODPATNIK = 7;
const SHILDIK = 8;

// Options
const SHAPE = 0;
const BAGAGE_TYPE = 0;
const KOVRIK_COLOR = 1;
const OKANTOVKA_COLOR = 2;

// Prices
const SHILDIK_PRICE = {
    'Большой': 250,
    'Средний': 200,
    'Малый': 150
};

if(document.addEventListener) {
    flag = true;
    document.addEventListener('DOMContentLoaded', initiate, false);
} else{
    flag = false;
    document.attachEvent('onDOMContentLoaded', initiate);
}
