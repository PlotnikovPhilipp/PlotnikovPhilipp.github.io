/*

    Header logic

*/

//View highlight
let currentViewElement = null;
function highlightOfViewChoice(hightlightElement) {
    if(!currentViewElement) {
        currentViewElement = hightlightElement;
        currentViewElement.style.backgroundColor = '#FFF3C2';
    } else {
        currentViewElement.style.backgroundColor = '';
        detectInformation(currentViewElement.firstElementChild, 'remove');
        currentViewElement = hightlightElement;
        currentViewElement.style.backgroundColor = '#FFF3C2';
        detectInformation(currentViewElement.firstElementChild, 'add');
    }
}

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
    let space = parseInt(widthOfContainer * 0.05);
    let scaleOfCircles = parseInt((widthOfContainer - space * 7) / 8);
    colorCicrcles.forEach((element, index) => {
        let styleOfElement = element.style;
        styleOfElement.width = scaleOfCircles + 'px';
        styleOfElement.height = scaleOfCircles + 'px';
        styleOfElement.backgroundColor = element.dataset.color;
        if(index != 7 && index != 20) {
            styleOfElement.marginRight = space + 'px';
        }
        if((index >= 8 && index <= 12) || (index >= 21)) {
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
        if(index != 8 && index != 21) {
            styleOfElement.marginRight = space + 'px';
        }
        if((index >= 9 && index <= 12) || (index >= 22)) {
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
        if(index != 8 && index != 21) {
            styleOfElement.marginRight = space + 'px';
        }
        if((index >= 9 && index <= 12) || (index >= 22)) {
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
                currentKovrikColor = selectedItem.dataset.img
                break;
            case 'okantovka':
                currentOkantovkaColor = selectedItem.dataset.img
        }
    } 
    switch(selectedItem.dataset.type) {
        case 'kovrik':
            constructorBases.forEach((element) => {
                element.src = urlBase + currentKovrikColor + ((rombiImg.checked)? '_rombi' : '_soti') + '_kovrik.png';
            });
            break;
        case 'okantovka':
            constructorOkantovkas.forEach((element) => {
                element.src = urlBase + currentOkantovkaColor + '_okantovka.png';
            });
            break;

        //For header view buttons, as they have influence only for the base for constructor image
        default:
            constructorBases.forEach((element) => {
                element.src = urlBase + currentKovrikColor + ((rombiImg.checked)? '_rombi' : '_soti') + '_kovrik.png';
            });
    }
}

/*

    Append/remove the needing parts of constructor image

*/
function arConstructorImg(event) {
    let element = ((event)? event.currentTarget : event) || ((standartImg.checked)? standartImg : document.getElementById('3D'));
    if(standartImg != element && !(document.getElementsByClassName('dynamic-3d-kovrik')[0])) {
        constructorBases.forEach((base) => {
            let container = base.parentNode;
            if(container.getElementsByClassName('dynamic-litaya-lapka')[0]) {
                container.removeChild(container.getElementsByClassName('dynamic-litaya-lapka')[0]);
            }
            let element = document.querySelector('.range-of-item .checkbox-container input[data-class=\"dynamic-litaya-lapka\"]').parentNode.parentNode;
            element.checked = false;
            element.dispatchEvent(new Event('click'));
            let image = document.createElement('img');
            image.src = urlBase + '3d_kovrik 1.png';
            image.className = 'dynamic-3d-kovrik';
            base.insertAdjacentElement('afterEnd', image);
        });
    } else if(standartImg == element && document.getElementsByClassName('dynamic-3d-kovrik')[0]) {
        let litLapInput = document.querySelector('.range-of-item .checkbox-container input[data-class=\"dynamic-litaya-lapka\"]');
        constructorBases.forEach((base) => {
            base.parentNode.removeChild(base.parentNode.getElementsByClassName('dynamic-3d-kovrik')[0]);
            let element = document.createElement('img');
            element.className = 'dynamic-litaya-lapka';
            element.src = urlBase + litLapInput.dataset.img;
            base.parentNode.appendChild(element);
        });
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

function addAdditionalItemsOnImg(element) {
    constructorOkantovkas.forEach((item) => {
        let container = item.parentNode;
        if(!container.getElementsByClassName(element.dataset.class)[0]) {
            let needingElement = document.createElement('img');
            needingElement.src = urlBase + element.dataset.img;
            needingElement.className = element.dataset.class;
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
    let element = event.currentTarget.firstElementChild.firstElementChild; //Input
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
                element.parentNode.parentNode.lastElementChild.style.backgroundColor = '#FFF3C2';

                //Add the additional items on constructor images
                addAdditionalItemsOnImg(element);

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
                        additionalPodpatniks[i].parentNode.parentNode.lastElementChild.style.backgroundColor = '';
                        
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
                element.parentNode.parentNode.lastElementChild.style.backgroundColor = '#FFF3C2';

                //Gather infromation for describing good
                detectInformation(element, 'add');

                //Count price
                countPrice(price, 'plus');
                break;
            case 'lapka':
                if(!standartImg.checked) {
                    if(element.parentNode.parentNode.lastElementChild.style.backgroundColor != 'rgb(255, 243, 194)') {
                    
                        element.parentNode.parentNode.lastElementChild.style.backgroundColor = '#FFF3C2';

                        //Gather information for describing good
                        detectInformation(element, 'add');

                        //Count price
                        countPrice(price, 'plus');
                    } else {

                        //Remove the additional items on constructor images
                        removeAdditionalItemsOnImg(element);
                    }
                    break;
                } else {

                    //Add the additional items on constructor images
                    addAdditionalItemsOnImg(element);
                    element.parentNode.parentNode.lastElementChild.style.backgroundColor = '#FFF3C2';

                    //Gather infromation for describing good
                    detectInformation(element, 'add');

                    //Count price
                    countPrice(price, 'plus');
                }
        }
    } else {

        //On 3D mode don't change state
        if(element.dataset.type == 'lapka' && !standartImg.checked) {
            element.checked = true;
            return;
        }

        element.parentNode.parentNode.lastElementChild.style.backgroundColor = '';

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
let mobileWindow = null;
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

    Initiate the data about website

*/
function initiate() {
    /*
    
        Create the array of needing elements

    */

    //Header radio buttons
   let listOfHeaderRadioButtons = document.querySelectorAll('.header .hidden-radio-button');
   let headerRadioButtons = [];
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
   let colorCicrcles = [];
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
   let complectOptions = [];
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
   let listOfConstructorBases = document.querySelectorAll('.constructor-img-container img:nth-of-type(2)');
   for(let i = 0; i < listOfConstructorBases.length; i++) {
        constructorBases.push(listOfConstructorBases[i]);
   }
   constructorScheme = document.querySelector('.constructor-scheme-container img');

   //View of constructor image
   rombiImg = document.getElementById('rombView');

   //Shape of constructor image
   standartImg = document.getElementById('standart');

   //Define footer items
   let listOfFooterItems = document.querySelectorAll('.range-of-item > li');
   let footerItems = [];
   for(let i = 0; i < listOfFooterItems.length; i++) {
    footerItems.push(listOfFooterItems[i]);
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

   //Define mobile window && mobile button
   mobileWindow = document.getElementsByClassName('mobile-window')[0];
   let mobileButton = document.getElementsByClassName('mobile-window-switch')[0];

    /*
    
        Install event handlers

    */
   if(flag) {

        //Choose the event handler for highlight info
        headerRadioButtons.forEach((element, index) => {
            if(element.checked && element.dataset.type == 'view') {
                highlightOfViewChoice(element.parentNode);
                detectInformation(element, 'add');
            }
            if(element.checked && element.dataset.type == 'shape') {
                highlightOfShapeChoice(element.parentNode);
                detectInformation(element, 'add');
            }
            switch(element.dataset.type) {
                case 'view':
                    element.addEventListener('change', (event) => { highlightOfViewChoice(event.currentTarget.parentNode) }, false); //highlight the button
                    element.addEventListener('click', changeConstructorImg, false); //Install event handler for view buttons to change the constructor img
                    break;
                case 'shape':
                    element.addEventListener('change', (event) => { highlightOfShapeChoice(event.currentTarget.parentNode) }, false); //highlight the button
                    element.addEventListener('change', changeConstructorScheme, false); // change the constructor scheme
                    element.addEventListener('change', arConstructorImg, false); // append/remove needing parts of constructor images
            }
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

        //Install event handler for mobile button
        mobileButton.addEventListener('click', animateMobileWindow, false);

    //IE
   } else {
        headerRadioButtons.forEach((element, index) => {
            if(element.checked && element.dataset.type == 'view') {
                highlightOfViewChoice(element.parentNode);
            }
            if(element.checked && element.dataset.type == 'shape') {
                highlightOfShapeChoice(element.parentNode);
            }
            switch(element.dataset.type) {
                case 'view':
                    element.attachEvent('onchange', (event) => { highlightOfViewChoice(event.currentTarget.parentNode) }); //highlight the button
                    element.attachEvent('onclick', changeConstructorImg); //Install event handler for view buttons to change the constructor img
                    break;
                case 'shape':
                    element.attachEvent('onchange', (event) => { highlightOfShapeChoice(event.currentTarget.parentNode) }); //highlight the button
                    element.attachEvent('onclick', changeConstructorScheme); // change the constructor scheme
                    element.attachEvent('onchange', arConstructorImg); // append/remove needing parts of constructor images
            }
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

        //Install event handler for mobile button
        mobileButton.attachEvent('onclick', animateMobileWindow);
   }

   //For reloading page
   //Constructor img, only base of kovrik, as input has influence only for him
   constructorBases.forEach((element) => {
       element.src = urlBase + currentKovrikColor + ((rombiImg.checked)? '_rombi' : '_soti') + '_kovrik.png';
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
const urlBase = 'https://plotnikovphilipp.github.io/%D0%9A%D0%BE%D0%B2%D1%80%D1%8B/imgs/';
let rombiImg = null;
let standartImg = null;
let describingContainer = null;
let defaultTitleOfSubscribing = 'Ничего не выбрано';
if(document.addEventListener) {
    flag = true;
    document.addEventListener('DOMContentLoaded', initiate, false);
} else{
    flag = false;
    document.attachEvent('onDOMContentLoaded', initiate);
}