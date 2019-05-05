//ensure the loadApp function loads when the window has loaded
window.onload = loadApp;
/*
    This function loads the app from the beginning.
    It is only ever called once.
*/
function loadApp() {
    //createLevel3();
    //createLevel4();
    // display the play Home Page
    var play = displayHomePage();
    //When the play button click, it displays menu page
    play.onclick = displayGameLevelPage;
}
function displayHomePage() {
    //Create the wrapper
    var wrapper = createDiv();
    //add a css class wrapper
    wrapper.classList.add("wrapper");

    //Create Heading logo
    var logoName = createHeading1("ZBrain");
    var logoDetail = createParagraph("Maximise Your Cognitive Potential");
    //create div element for logo
    var containerLogo = createDiv(logoName, logoDetail);
    // add a CSS class class logo
    containerLogo.classList.add("logo");

    //Create the light Bulb Logo
    var divElementLightBulb = createDiv();
     // add value to the lightBulb
    divElementLightBulb.innerHTML = "🧠";
    divElementLightBulb.innerHTML += "🏆";
    

    //Add css class to the element
    divElementLightBulb.classList.add("lightBulb");

    //Create Button element
    var play = createButton("Play");
    //create div element for button
    var containerButton = createDiv(play);
    // add a CSS class class logo
    containerButton.classList.add("Navigation");
    
    //Assing containerLog and containerButton to the wrapper
    wrapper.appendChild(containerLogo);
    wrapper.appendChild(divElementLightBulb);
    wrapper.appendChild(containerButton);

    return play;
}



