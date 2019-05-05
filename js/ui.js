/*creating UI components */
/*
    Creates a soundEffect , with the given source 
*/
window.createSoundEffect = function (src) {
    var sound = document.createElement("audio");
    sound.src = src;
    sound.setAttribute("preload", "auto");
    sound.setAttribute("controls", "none");
    //sound.style.display = "none";
    //document.body.appendChild(sound);
    return sound;
}
/*
    Creates a paragraph , with the given text 
    text: any text to include on the paragraph
*/
window.createParagraph = function (text, className) {
    // console.log("Creating paragraph with text: " + text);
    // create a P tag, and refer to it locally as "paragraph" 
    var element = document.createElement("P");
    //append paragraph to document.body
    document.body.appendChild(element);
    // check if text is not undefined 
    if (typeof (className) !== 'undefined') {
        // the variable is defined
        element.classList.add(className);
    }
    var textNode = document.createTextNode(text);
    element.appendChild(textNode);
    return element;
}
/*
    Creates a heading 1 , with the given text 
*/
window.createHeading1 = function (text) {
    // console.log("Creating heading 1 with text: " + text);
    // create a heading 1 tag, and refer to it locally as "heading 1" 
    var element = document.createElement("H1");
    //append paragraph to document.body
    document.body.appendChild(element);
    // check if text is not undefined 
    if (typeof (text) !== 'undefined') {
        // the variable [text] does exist, so use it
        var textNode = document.createTextNode(text);
        element.appendChild(textNode);
    }
    // return the element so the caller can use it
    return element;
}
/*
    Creates a heading 2 , with the given text 
*/
window.createHeading2 = function (text) {
    // console.log("Creating heading 2 with text: " + text);
    // create a heading 2 tag, and refer to it locally as "heading 1" 
    var element = document.createElement("H2");
    //append paragraph to document.body
    document.body.appendChild(element);
    // check if text is not undefined 
    if (typeof (text) !== 'undefined') {
        // the variable [text] does exist, so use it
        var textNode = document.createTextNode(text);
        element.appendChild(textNode);
    }
    // return the element so the caller can use it
    return element;
}
/*
    Creates a heading 3 , with the given text 
*/
window.createHeading3 = function (text) {
    // console.log("Creating heading 3 with text: " + text);
    // create a heading 3 tag, and refer to it locally as "heading 3" 
    var element = document.createElement("H3");
    //append paragraph to document.body
    document.body.appendChild(element);
    // check if text is not undefined 
    if (typeof (text) !== 'undefined') {
        // the variable [text] does exist, so use it
        var textNode = document.createTextNode(text);
        element.appendChild(textNode);
    }
    // return the element so the caller can use it
    return element;
}
/*
    Creates a div.
    Any parameters (HTMLElements or Strings) are appended. 
*/
window.createDiv = function (...otherElements) {
    //console.log("Creating DIV with other elements:");
    //console.log(otherElements);
    var mainElement = document.createElement("DIV");
    //append paragraph to document.body
    document.body.appendChild(mainElement);
    // now iterate over otherElements (which is an array) 
    for (var subElement of otherElements) {
        // check what type of subElement we have
        if (subElement instanceof HTMLElement) // add any HTMLElement
            mainElement.appendChild(subElement);
        else if (Number.isInteger(subElement)) {
            // we have a String, so create a TextNode
            var textNode = document.createTextNode(subElement);
            mainElement.appendChild(textNode);
        }
        else if (isString(subElement)) {
            // we have a String, so create a TextNode
            var textNode = document.createTextNode(subElement);
            mainElement.appendChild(textNode);
        } else
            console.log("ERROR: createDiv() failed with subElement:  " + subElement);
    }
    // return the mainElement so the caller can use it
    return mainElement;
}
/*
    Creates a SPAN, with the given text 
*/
window.createSpan = function (text) {
    // console.log("Creating Span with text: " + text);
    // create a SPAN tag, 
    var element = document.createElement("SPAN");
    // check if text is not undefined 
    if (typeof (text) !== 'undefined') {
        // the variable [text] does exist, so use it
        var textNode = document.createTextNode(text);
        element.appendChild(textNode);
    }
    // return the element so the caller can use it
    return element;
}
/*
    Creates a Button, with the given text 
*/
window.createButton = function (text) {
    // console.log("Creating BUTTON with text: " + text);
    // create a SPAN tag, 
    var element = document.createElement("BUTTON");
    //append paragraph to document.body
    //document.body.appendChild(element);

    // check if text is not undefined 
    if (typeof (text) !== 'undefined') {
        // the variable [text] does exist, so use it
        element.innerHTML = "";
        var textNode = document.createTextNode(text);
        element.appendChild(textNode);
    }
    // return the element so the caller can use it
    return element;
}
/*
    Creates a Text Input, with the given text 
*/
window.createTextInput = function (text) {
    // console.log("Creating INPUT with text: " + text);
    // create a TextInput tag, 
    var element = document.createElement("INPUT");
    //append paragraph to document.body
    document.body.appendChild(element);

    element.setAttribute("type", "text");
    // check if text is not undefined 
    if (typeof (text) !== 'undefined') {
        // the variable [text] does exist, so use it
        element.setAttribute("value", text);
    }
    // return the element so the caller can use it
    return element;
}

/*
    Creates a Image, with the given source 
*/
window.createImage = function (imageSource) {
    // console.log("Creating Image with imageSource: " + imageSource);
    // create a SPAN tag, 
    var element = document.createElement("IMG");
    //append paragraph to document.body
    document.body.appendChild(element);
    element.setAttribute("type", "image");
    element.setAttribute("src", imageSource);
    // element.setAttribute("width", "50");
    // element.setAttribute("height", "50");
    // return the element so the caller can use it
    return element;
}
/*
    Creates a labelledTextField
*/
window.labelledTextField = function (labelText, textInput, TextButton, ) {
    var elementlabelText = document.createElement("LABEL");
    //append paragraph to document.body
    document.body.appendChild(element);
    var labelTextNode = document.createTextNode(labelText);
    elementlabelText.appendChild(labelTextNode);
    //Call the function createTextInput with textInput as a parameter
    var getTextInputElement = createTextInput(textInput);
    //Call the function createButton with textButton as a parameter
    var getTextButtonElement = createButton(TextButton);

    return {
        label: elementlabelText,
        input: getTextInputElement,
        button: getTextButtonElement
    }
}
