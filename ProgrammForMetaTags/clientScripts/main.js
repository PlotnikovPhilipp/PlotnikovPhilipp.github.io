//Change the meta tag, that specified in the form
function changeMetaTag(event) {
    event.preventDefault();
    let selfUrl = siteUrl.value; 
    let selfRequest = request.value;

    let headers = selfRequest.match(/\[\w*\]/g);
    let values = selfRequest.match(/\{\w*\}/g);

    //Delete the first and last symbol in headers
    headers.forEach(element => {
        return element.substr(1, element.length-1);
    });

    //Delete the first and last symbol in values
    values.forEach(element => {
        return element.substr(1, element.length-1);
    });

    //Request the server for site   
    fetch(siteUrl).then((element) => {
        return element.text();
    }).then((siteCode) => {

    //Find the meta tag and change it
    headers.forEach((element, index) => {
        let pattern = new RegExp('<meta name="' + element + '" >');
        let copyOfsiteCode = siteCode;
        console.log(copyOfsiteCode);
        /*copyOfsiteCode.replace(pattern, '<meta name="' + element + '" content="' + values[index] + '">');
        console.log(copyOfsiteCode);*/
    });
    });
}

//Gather info before draw content on screen
function initiate() {
    let button = document.getElementsByTagName('button')[0];
    siteUrl = document.getElementsByName('url')[0];
    request = document.getElementsByName('metaName')[0];

    //Install event handler for submit button
    if(flag) {
        button.addEventListener('click', changeMetaTag, false);
    } else {
        button.attachEvent('onclick', changeMetaTag);
    }
}

//Install event handler for loaded DOM
let flag = null;
let siteUrl = null;
let request = null;
if(document.addEventListener) {
    flag = true;
    document.addEventListener('DOMContentLoaded', initiate, false)
} else {
    flag = false;
    document.attachEvent('onDOMContentLoaded', initiate);
}