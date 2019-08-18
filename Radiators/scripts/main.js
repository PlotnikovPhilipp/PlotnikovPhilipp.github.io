//Tabs
function firstTabs(e) {
    arrayOfFirstTabs.every(function(element, index) {
                                if(e.currentTarget == currentFirstElement) return false;
                                if(element == e.currentTarget) {
                                    element.style.cssText = (screen.width > 420)? "background-color: white;\
                                                                                   color: black;\
                                                                                   box-shadow: inset 0px 4px 4px rgb(182, 182, 182), inset 0px -2px 10px rgb(182, 182, 182);\
                                                                                   box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px -2px 10px rgba(0, 0, 0, 0.25)" : "background-color: white;\
                                                                                                                                                                                  color: black;\
                                                                                                                                                                                  box-shadow: inset 0px 2px 10px rgb(182, 182, 182), inset 0px -2px 10px rgb(182, 182, 182);\
                                                                                                                                                                                  box-shadow: inset 0px 2px 10px rgba(0, 0, 0, 0.25), inset 0px -2px 10px rgba(0, 0, 0, 0.25)";
                                        
                                    currentFirstElement.style.cssText = "";
                                    currentFirstElement = element;
                                    if(!index) {
                                        currentTextOfFirstCard.style.display = "none";
                                        mainPartOfFirstCard.firstElementChild.nextElementSibling.style.display = "block";
                                        currentTextOfFirstCard = mainPartOfFirstCard.firstElementChild.nextElementSibling;
                                        return false;
                                    } else if(index == 1) {
                                        currentTextOfFirstCard.style.display = "none";
                                        mainPartOfFirstCard.firstElementChild.nextElementSibling.nextElementSibling.style.display = "block";
                                        currentTextOfFirstCard = mainPartOfFirstCard.firstElementChild.nextElementSibling.nextElementSibling;
                                        return false;
                                    } else {
                                        currentTextOfFirstCard.style.display = "none";
                                        mainPartOfFirstCard.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "block";
                                        currentTextOfFirstCard = mainPartOfFirstCard.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling;
                                        return false;
                                    }
                                }
                                return true;
                             });
}

function secondTabs(e) {
    arrayOfSecondTabs.every(function(element, index) {
        if(e.currentTarget == currentSecondElement) return false;
        if(element == e.currentTarget) {
            element.style.cssText = (screen.width > 420)? "background-color: white;\
                                                           color: black;\
                                                           box-shadow: inset 0px 4px 4px rgb(182, 182, 182), inset 0px -2px 10px rgb(182, 182, 182);\
                                                           box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px -2px 10px rgba(0, 0, 0, 0.25)" : "background-color: white;\
                                                                                                                                                          color: black;\
                                                                                                                                                          box-shadow: inset 0px 2px 10px rgb(182, 182, 182), inset 0px -2px 10px rgb(182, 182, 182);\
                                                                                                                                                          box-shadow: inset 0px 2px 10px rgba(0, 0, 0, 0.25), inset 0px -2px 10px rgba(0, 0, 0, 0.25)";
            currentSecondElement.style.cssText = "";
            currentSecondElement = element;
            if(!index) {
                currentTextOfSecondCard.style.display = "none";
                mainPartOfSecondCard.firstElementChild.nextElementSibling.style.display = "block";
                currentTextOfSecondCard = mainPartOfSecondCard.firstElementChild.nextElementSibling;
                return false;
            } else if(index == 1) {
                currentTextOfSecondCard.style.display = "none";
                mainPartOfSecondCard.firstElementChild.nextElementSibling.nextElementSibling.style.display = "block";
                currentTextOfSecondCard = mainPartOfSecondCard.firstElementChild.nextElementSibling.nextElementSibling;
                return false;
            } else {
                currentTextOfSecondCard.style.display = "none";
                mainPartOfSecondCard.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "block";
                currentTextOfSecondCard = mainPartOfSecondCard.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling;
                return false;
            }
        }
        return true;
     });
}

function thirdTabs(e) {
    arrayOfThirdTabs.every(function(element, index) {
        if(e.currentTarget == currentThirdElement) return false;
        if(element == e.currentTarget) {
            element.style.cssText = (screen.width > 420)? "background-color: white;\
                                                           color: black;\
                                                           box-shadow: inset 0px 4px 4px rgb(182, 182, 182), inset 0px -2px 10px rgb(182, 182, 182);\
                                                           box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px -2px 10px rgba(0, 0, 0, 0.25)" : "background-color: white;\
                                                                                                                                                          color: black;\
                                                                                                                                                          box-shadow: inset 0px 2px 10px rgb(182, 182, 182), inset 0px -2px 10px rgb(182, 182, 182);\
                                                                                                                                                          box-shadow: inset 0px 2px 10px rgba(0, 0, 0, 0.25), inset 0px -2px 10px rgba(0, 0, 0, 0.25)";
            currentThirdElement.style.cssText = "";
            currentThirdElement = element;
            if(!index) {
                currentTextOfThirdCard.style.display = "none";
                mainPartOfThirdCard.firstElementChild.nextElementSibling.style.display = "block";
                currentTextOfThirdCard = mainPartOfThirdCard.firstElementChild.nextElementSibling;
                return false;
            } else if(index == 1) {
                currentTextOfThirdCard.style.display = "none";
                mainPartOfThirdCard.firstElementChild.nextElementSibling.nextElementSibling.style.display = "block";
                currentTextOfThirdCard = mainPartOfThirdCard.firstElementChild.nextElementSibling.nextElementSibling;
                return false;
            } else {
                currentTextOfThirdCard.style.display = "none";
                mainPartOfThirdCard.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "block";
                currentTextOfThirdCard = mainPartOfThirdCard.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling;
                return false;
            }
        }
        return true;
     });
}

function fourthTabs(e) {
    arrayOfFourthTabs.every(function(element, index) {
        if(e.currentTarget == currentFourthElement) return false;
        if(element == e.currentTarget) {
            element.style.cssText = (screen.width > 420)? "background-color: white;\
                                                           color: black;\
                                                           box-shadow: inset 0px 4px 4px rgb(182, 182, 182), inset 0px -2px 10px rgb(182, 182, 182);\
                                                           box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px -2px 10px rgba(0, 0, 0, 0.25)" : "background-color: white;\
                                                                                                                                                          color: black;\
                                                                                                                                                          box-shadow: inset 0px 2px 10px rgb(182, 182, 182), inset 0px -2px 10px rgb(182, 182, 182);\
                                                                                                                                                          box-shadow: inset 0px 2px 10px rgba(0, 0, 0, 0.25), inset 0px -2px 10px rgba(0, 0, 0, 0.25)";
            currentFourthElement.style.cssText = "";
            currentFourthElement = element;
            if(!index) {
                currentTextOfFourthCard.style.display = "none";
                mainPartOfFourthCard.firstElementChild.nextElementSibling.style.display = "block";
                currentTextOfFourthCard = mainPartOfFourthCard.firstElementChild.nextElementSibling;
                return false;
            } else if(index == 1) {
                currentTextOfFourthCard.style.display = "none";
                mainPartOfFourthCard.firstElementChild.nextElementSibling.nextElementSibling.style.display = "block";
                currentTextOfFourthCard = mainPartOfFourthCard.firstElementChild.nextElementSibling.nextElementSibling;
                return false;
            } else {
                currentTextOfFourthCard.style.display = "none";
                mainPartOfFourthCard.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "block";
                currentTextOfFourthCard = mainPartOfFourthCard.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling;
                return false;
            }
        }
        return true;
     });
}

//Arrow toggle
function arrowToggle(e) {
    if(e.currentTarget.className == "down-arrow") {
        e.currentTarget.parentNode.firstElementChild.nextElementSibling.style.position = "relative";
        e.currentTarget.parentNode.firstElementChild.nextElementSibling.nextElementSibling.style.position = "relative";
        e.currentTarget.className = "up-arrow";
    } else {
        e.currentTarget.parentNode.firstElementChild.nextElementSibling.style.position = "absolute";
        e.currentTarget.parentNode.firstElementChild.nextElementSibling.nextElementSibling.style.position = "absolute";
        e.currentTarget.className = "down-arrow";
    }
}

//Email
function openForm() {form.style.display = "table"}

function closeForm() {form.style.display = "none"}

//Left arrow
function goLeft() {
    if(leftCounter == 2) return;
    resultOfMotion += 100;
    slider.style.cssText = "-webkit-transform: translateX("+resultOfMotion+"%);\
                            -moz-transform: translateX("+resultOfMotion+"%);\
                            -ms-transform: translateX("+resultOfMotion+"%);\
                            -o-transform: translateX("+resultOfMotion+"%);\
                            transform: translateX("+resultOfMotion+"%)";
    if(resultOfMotion) {
        arrayOfCircles[2].checked = false;
        arrayOfCircles[1].checked = true;
        currentCircle = arrayOfCircles[1];
    } else {
        arrayOfCircles[1].checked = false;
        arrayOfCircles[0].checked = true;
        currentCircle = arrayOfCircles[0];
    }
    leftCounter++;
    rightCounter--;
}

//Right arrow
function goRight() {
    if(rightCounter == 2) return;
    resultOfMotion -= 100;
    slider.style.cssText = "-webkit-transform: translateX("+resultOfMotion+"%);\
                            -moz-transform: translateX("+resultOfMotion+"%);\
                            -ms-transform: translateX("+resultOfMotion+"%);\
                            -o-transform: translateX("+resultOfMotion+"%);\
                            transform: translateX("+resultOfMotion+"%)";
    if(resultOfMotion == -100) {
        arrayOfCircles[0].checked = false;
        arrayOfCircles[1].checked = true;
        currentCircle = arrayOfCircles[1];
    } else {
        arrayOfCircles[1].checked = false;
        arrayOfCircles[2].checked = true;
        currentCircle = arrayOfCircles[2];
    }
    rightCounter++;
    leftCounter--;
}

//Circles
function circleMotion(e) {
    arrayOfCircles.every(function(element, index) {
                            if(e.currentTarget == currentCircle) return false;
                            if(element == e.currentTarget) {
                                switch(index) {
                                    case 0:
                                        slider.style.cssText = "-webkit-transform: translateX(0);\
                                                                -moz-transform: translateX(0);\
                                                                -ms-transform: translateX(0);\
                                                                -o-transform: translateX(0);\
                                                                transform: translateX(0)";
                                        resultOfMotion = 0;
                                        leftCounter = 2;
                                        rightCounter = 0;
                                        currentCircle = e.currentTarget;
                                        break;
                                    case 1:
                                        slider.style.cssText = "-webkit-transform: translateX(-100%);\
                                                                -moz-transform: translateX(-100%);\
                                                                -ms-transform: translateX(-100%);\
                                                                -o-transform: translateX(-100%);\
                                                                transform: translateX(-100%)";
                                        resultOfMotion = -100;
                                        leftCounter = 1;
                                        rightCounter = 1;
                                        currentCircle = e.currentTarget;
                                        break;
                                    case 2:
                                        slider.style.cssText = "-webkit-transform: translateX(-200%);\
                                                                -moz-transform: translateX(-200%);\
                                                                -ms-transform: translateX(-200%);\
                                                                -o-transform: translateX(-200%);\
                                                                transform: translateX(-200%)";
                                        resultOfMotion = -200;
                                        leftCounter = 0;
                                        rightCounter = 2;
                                        currentCircle = e.currentTarget;
                                }   
                                return false;
                            }
                            return true;
                         });
}

//Compute the sum
function checkboxActivity(e) {

    //When turn on delivery
    if(hardMode) {

        //When checkbox is checked
        if(e.currentTarget.checked) {
            if(lessPrice) {
                if(parseInt(resultPrice.textContent) + parseInt(e.currentTarget.getAttribute("data-price")) >= 10000) resultPrice.innerHTML = (parseInt(e.currentTarget.getAttribute("data-price")) + parseInt(resultPrice.textContent)) + " &#8381";
                else {
                    resultPrice.innerHTML = (parseInt(e.currentTarget.getAttribute("data-price")) + parseInt(resultPrice.textContent) + 500) + " &#8381";
                    lessPrice = false;
                }
            } else {
                if(parseInt(resultPrice.textContent) + parseInt(e.currentTarget.getAttribute("data-price")) >= 10000) {
                    resultPrice.innerHTML = (parseInt(e.currentTarget.getAttribute("data-price")) + parseInt(resultPrice.textContent) - 500) + " &#8381";
                    lessPrice = true;
                } else resultPrice.innerHTML = (parseInt(e.currentTarget.getAttribute("data-price")) + parseInt(resultPrice.textContent)) + " &#8381";
            }

        //When checkbox is not checked
        } else {
            if(lessPrice) {
                if(parseInt(resultPrice.textContent) - parseInt(e.currentTarget.getAttribute("data-price")) < 10000) {
                    resultPrice.innerHTML = (parseInt(resultPrice.textContent) - parseInt(e.currentTarget.getAttribute("data-price")) + 500) + " &#8381";
                    lessPrice = false;
                } else resultPrice.innerHTML = (parseInt(resultPrice.textContent) - parseInt(e.currentTarget.getAttribute("data-price"))) + " &#8381";
            } else resultPrice.innerHTML = (parseInt(resultPrice.textContent) - parseInt(e.currentTarget.getAttribute("data-price"))) + " &#8381";
        }
    } else {
        if(e.currentTarget.checked) resultPrice.innerHTML = (parseInt(e.currentTarget.getAttribute("data-price")) + parseInt(resultPrice.textContent)) + " &#8381";
        else resultPrice.innerHTML = (parseInt(resultPrice.textContent) - parseInt(e.currentTarget.getAttribute("data-price"))) + " &#8381";
    }
}

function radioActivity(e) {
    if(!agreement.checked) {
        if(!lessPrice) {
            resultPrice.innerHTML = parseInt(resultPrice.textContent) - 500 + " &#8381";
            lessPrice = true;
        }
        hardMode = false;
    } else {
        lessPrice = false;
        resultPrice.innerHTML = parseInt(resultPrice.textContent) + 500 + " &#8381";
        hardMode = true;
    }
}

//Compute the sum of the main form
function secondCheckboxActivity(e) {

    //When turn on delivery
    if(secondHardMode) {

        //When checkbox is checked
        if(e.currentTarget.checked) {
            if(secondLessPrice) {
                if(parseInt(secondResultPrice.textContent) + parseInt(e.currentTarget.getAttribute("data-price")) >= 10000) secondResultPrice.innerHTML = (parseInt(e.currentTarget.getAttribute("data-price")) + parseInt(secondResultPrice.textContent)) + " &#8381";
                else {
                    secondResultPrice.innerHTML = (parseInt(e.currentTarget.getAttribute("data-price")) + parseInt(secondResultPrice.textContent) + 500) + " &#8381";
                    secondLessPrice = false;
                }
            } else {
                if(parseInt(secondResultPrice.textContent) + parseInt(e.currentTarget.getAttribute("data-price")) >= 10000) {
                    secondResultPrice.innerHTML = (parseInt(e.currentTarget.getAttribute("data-price")) + parseInt(secondResultPrice.textContent) - 500) + " &#8381";
                    secondLessPrice = true;
                } else secondResultPrice.innerHTML = (parseInt(e.currentTarget.getAttribute("data-price")) + parseInt(secondResultPrice.textContent)) + " &#8381";
            }

        //When checkbox is not checked
        } else {
            if(secondLessPrice) {
                if(parseInt(secondResultPrice.textContent) - parseInt(e.currentTarget.getAttribute("data-price")) < 10000) {
                    secondResultPrice.innerHTML = (parseInt(secondResultPrice.textContent) - parseInt(e.currentTarget.getAttribute("data-price")) + 500) + " &#8381";
                    lessPrice = false;
                } else secondResultPrice.innerHTML = (parseInt(secondResultPrice.textContent) - parseInt(e.currentTarget.getAttribute("data-price"))) + " &#8381";
            } else secondResultPrice.innerHTML = (parseInt(secondResultPrice.textContent) - parseInt(e.currentTarget.getAttribute("data-price"))) + " &#8381";
        }
    } else {
        if(e.currentTarget.checked) secondResultPrice.innerHTML = (parseInt(e.currentTarget.getAttribute("data-price")) + parseInt(secondResultPrice.textContent)) + " &#8381";
        else secondResultPrice.innerHTML = (parseInt(secondResultPrice.textContent) - parseInt(e.currentTarget.getAttribute("data-price"))) + " &#8381";
    }
}

function secondRadioActivity(e) {
    if(!secondAgreement.checked) {
        if(!secondLessPrice) {
            secondResultPrice.innerHTML = parseInt(secondResultPrice.textContent) - 500 + " &#8381";
            secondLessPrice = true;
        }
        secondHardMode = false;
    } else {
        secondLessPrice = false;
        secondResultPrice.innerHTML = parseInt(secondResultPrice.textContent) + 500 + " &#8381";
        secondHardMode = true;
    }
}

//Gather info
function initiate() {

    /*
        Tabs of cards
    */

    //First card
    mainPartOfFirstCard = document.getElementsByTagName('section')[0];
    currentTextOfFirstCard = mainPartOfFirstCard.firstElementChild.nextElementSibling;
    if(Array.from) arrayOfFirstTabs = Array.from(document.querySelectorAll('main .first nav div'));
    else {
        var listOfFirstTabs = document.querySelectorAll('main .first nav div');
        arrayOfFirstTabs = [];
        for(var i = 0; i < listOfFirstTabs.length; i++) arrayOfFirstTabs[i] = listOfFirstTabs[i]; 
    }
    currentFirstElement = arrayOfFirstTabs[0];
    currentFirstElement.style.cssText = (screen.width > 420)? "background-color: white;\
                                                               color: black;\
                                                               box-shadow: inset 0px 4px 4px rgb(182, 182, 182), inset 0px -2px 10px rgb(182, 182, 182);\
                                                               box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px -2px 10px rgba(0, 0, 0, 0.25)" : "background-color: white;\
                                                                                                                                                              color: black;\
                                                                                                                                                              box-shadow: inset 0px 2px 10px rgb(182, 182, 182), inset 0px -2px 10px rgb(182, 182, 182);\
                                                                                                                                                              box-shadow: inset 0px 2px 10px rgba(0, 0, 0, 0.25), inset 0px -2px 10px rgba(0, 0, 0, 0.25)";
    
    //Second card
    mainPartOfSecondCard = document.getElementsByTagName('section')[1];
    currentTextOfSecondCard = mainPartOfSecondCard.firstElementChild.nextElementSibling;
    if(Array.from) arrayOfSecondTabs = Array.from(document.querySelectorAll('main .second nav div'));
    else {
        var listOfSecondTabs = document.querySelectorAll('main .second nav div');
        arrayOfSecondTabs = [];
        for(var i = 0; i < listOfSecondTabs.length; i++) arrayOfSecondTabs[i] = listOfSecondTabs[i]; 
    }
    currentSecondElement = arrayOfSecondTabs[0];
    currentSecondElement.style.cssText = (screen.width > 420)? "background-color: white;\
                                                                color: black;\
                                                                box-shadow: inset 0px 4px 4px rgb(182, 182, 182), inset 0px -2px 10px rgb(182, 182, 182);\
                                                                box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px -2px 10px rgba(0, 0, 0, 0.25)" : "background-color: white;\
                                                                                                                                                               color: black;\
                                                                                                                                                               box-shadow: inset 0px 2px 10px rgb(182, 182, 182), inset 0px -2px 10px rgb(182, 182, 182);\
                                                                                                                                                               box-shadow: inset 0px 2px 10px rgba(0, 0, 0, 0.25), inset 0px -2px 10px rgba(0, 0, 0, 0.25)";

    //Third card
    mainPartOfThirdCard = document.getElementsByTagName('section')[2];
    currentTextOfThirdCard = mainPartOfThirdCard.firstElementChild.nextElementSibling;
    if(Array.from) arrayOfThirdTabs = Array.from(document.querySelectorAll('main .third nav div'));
    else {
        var listOfThirdTabs = document.querySelectorAll('main .third nav div');
        arrayOfThirdTabs = [];
        for(var i = 0; i < listOfThirdTabs.length; i++) arrayOfThirdTabs[i] = listOfThirdTabs[i]; 
    }
    currentThirdElement = arrayOfThirdTabs[0];
    currentThirdElement.style.cssText = (screen.width > 420)? "background-color: white;\
                                                               color: black;\
                                                               box-shadow: inset 0px 4px 4px rgb(182, 182, 182), inset 0px -2px 10px rgb(182, 182, 182);\
                                                               box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px -2px 10px rgba(0, 0, 0, 0.25)" : "background-color: white;\
                                                                                                                                                              color: black;\
                                                                                                                                                              box-shadow: inset 0px 2px 10px rgb(182, 182, 182), inset 0px -2px 10px rgb(182, 182, 182);\
                                                                                                                                                              box-shadow: inset 0px 2px 10px rgba(0, 0, 0, 0.25), inset 0px -2px 10px rgba(0, 0, 0, 0.25)";

    //Fourth card
    mainPartOfFourthCard = document.getElementsByTagName('section')[3];
    currentTextOfFourthCard = mainPartOfFourthCard.firstElementChild.nextElementSibling;
    if(Array.from) arrayOfFourthTabs = Array.from(document.querySelectorAll('main .fourth nav div'));
    else {
        var listOfFourthTabs = document.querySelectorAll('main .fourth nav div');
        arrayOfFourthTabs = [];
        for(var i = 0; i < listOfFourthTabs.length; i++) arrayOfFourthTabs[i] = listOfFourthTabs[i]; 
    }
    currentFourthElement = arrayOfFourthTabs[0];
    currentFourthElement.style.cssText = (screen.width > 420)? "background-color: white;\
                                                                color: black;\
                                                                box-shadow: inset 0px 4px 4px rgb(182, 182, 182), inset 0px -2px 10px rgb(182, 182, 182);\
                                                                box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px -2px 10px rgba(0, 0, 0, 0.25)" : "background-color: white;\
                                                                                                                                                               color: black;\
                                                                                                                                                               box-shadow: inset 0px 2px 10px rgb(182, 182, 182), inset 0px -2px 10px rgb(182, 182, 182);\
                                                                                                                                                               box-shadow: inset 0px 2px 10px rgba(0, 0, 0, 0.25), inset 0px -2px 10px rgba(0, 0, 0, 0.25)";

    /*
        Arrows
    */
    if(Array.from) arrayOfArrows = Array.from(document.querySelectorAll('.down-arrow'));
    else {
        var listOfArrows = document.querySelectorAll('.down-arrow');
        arrayOfArrows = [];
        for(var i = 0; i < listOfArrows.length; i++) arrayOfArrows[i] = listOfArrows[i];
    }

    /*
        Email
    */
    if(Array.form) arrayOfButtons = Array.from(document.querySelectorAll('main article button'));
    else {
        var listOfButtons = document.querySelectorAll('main article button');
        arrayOfButtons = [];
        for(var i = 0; i < listOfButtons.length; i++) arrayOfButtons[i] = listOfButtons[i];
    }
    form = document.querySelector('.table');

    /*
        Form
    */
    slider = document.querySelector('.slider');

    //Arrows
    leftArrow = document.querySelector('.left-arrow');
    leftCounter = 2;
    rightArrow = document.querySelector('.right-arrow');
    rightCounter = 0;
    resultOfMotion = 0;

    //Circles
    if(Array.from) arrayOfCircles = Array.from(document.querySelectorAll('.navigation input'));
    else {
        listOfCircles = document.querySelectorAll('.navigation input');
        arrayOfCircles = [];
        for(var i = 0; i < listOfCircles.length; i++) arrayOfCircles[i] = listOfCircles[i];
    }
    currentCircle = arrayOfCircles[0];

    /*
        Checkboxes
    */
    if(Array.from) {
        arrayOfCheckboxes = Array.from(document.querySelectorAll('.slider li[role="form"] form input[type="checkbox"]'));
        secondArrayOfCheckboxes = Array.from(document.querySelectorAll('main .main-form-container form input[type="checkbox"]'));
    } else {
        listOfCheckboxes = document.querySelectorAll('.slider li[role="form"] form input[type="checkbox"]');
        secondListOfCheckboxes = document.querySelectorAll('main .main-form-container form input[type="checkbox"]');
        arrayOfCheckboxes = [];
        secondArrayOfCheckboxes = []
        for(var i = 0; i < listOfCheckboxes.length; i++) {
            arrayOfCheckboxes[i] = listOfCheckboxes[i];
            secondArrayOfCheckboxes[i] = secondListOfCheckboxes[i];
        }
    }
    lessPrice = false;
    secondLessPrice = false;
    hardMode = true;
    secondHardMode = true;

   //Bind events with functions
    if(flag) {
        arrayOfFirstTabs.forEach(function(element) {element.addEventListener('click', firstTabs, false)}); //first tabs
        arrayOfSecondTabs.forEach(function(element) {element.addEventListener('click', secondTabs, false)}); //second tabs
        arrayOfThirdTabs.forEach(function(element) {element.addEventListener('click', thirdTabs, false)}); //third tabs
        arrayOfFourthTabs.forEach(function(element) {element.addEventListener('click', fourthTabs, false)}); //fourth tabs
        arrayOfArrows.forEach(function(element) {element.addEventListener('click', arrowToggle, false)}); //arrows
        arrayOfButtons.forEach(function(element) {element.addEventListener('click', openForm, false)}); //buttons
        document.querySelector('.cross').addEventListener('click', closeForm, false); //cross
        leftArrow.addEventListener('click', goLeft, false); //left arrow
        rightArrow.addEventListener('click', goRight, false); //right arrow
        arrayOfCircles.forEach(function(element) {element.addEventListener('click', circleMotion, false)}); //navigation circles
        arrayOfCheckboxes.forEach(function(element) {element.addEventListener('change', checkboxActivity, false)}); //checkboxes
        secondArrayOfCheckboxes.forEach(function(element) {element.addEventListener('change', secondCheckboxActivity, false)}); //second checkboxes
        agreement.addEventListener('change', radioActivity, false); //radio of agreement
        secondAgreement.addEventListener('change', secondRadioActivity, false); //second radio of agreement
        refusal.addEventListener('change', radioActivity, false); //radio of refusal
        secondRefusal.addEventListener('change', secondRadioActivity, false); //second radio of refusal
    } else {
        arrayOfFirstTabs.forEach(function(element) {element.attachEvent('onclick', firstTabs)}); //first tabs
        arrayOfSecondTabs.forEach(function(element) {element.attachEvent('onclick', secondTabs)}); //second tabs
        arrayOfThirdTabs.forEach(function(element) {element.attachEvent('onclick', thirdTabs)}); //third tabs
        arrayOfFourthTabs.forEach(function(element) {element.attachEvent('onclick', fourthTabs)}); //fourth tabs
        arrayOfArrows.forEach(function(element) {element.attachEvent('onclick', arrowToggle)}); //arrows
        arrayOfButtons.forEach(function(element) {element.attachEvent('onclick', openForm)}); //buttons
        document.querySelector('.cross').attachEvent('onclick', closeForm); //cross
        leftArrow.attachEvent('onclick', goLeft); // left arrow
        rightArrow.attachEvent('onclick', goRight); //right arrow
        arrayOfCircles.forEach(function(element) {element.attachEvent('click', circleMotion)}); //navigation circles
        arrayOfCheckboxes.forEach(function(element) {element.attachEvent('onchange', checkboxActivity)}); //checkboxes
        secondArrayOfCheckboxes.forEach(function(element) {element.attachEvent('onchange', secondCheckboxActivity)}); //second checkboxes
        agreement.attachEvent('onchange', radioActivity); //radio of agreement
        secondAgreement.attachEvent('onchange', secondRadioActivity); //second radio of agreement
        refusal.attachEvent('onchange', radioActivity); //radio of refusal
        secondRefusal.attachEvent('onchange', secondRadioActivity); //second radio of refusal
    }
}

if(window.addEventListener) {
    window.addEventListener('load', initiate, false);
    var flag = true;
} else {
    window.attachEvent('onload', initiate);
    var flag = false;
}