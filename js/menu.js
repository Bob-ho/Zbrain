//Set current Game Level as the global variable. Assign it to 1 when user start the game
window.unlockGame = 1;
window.arrayStars = [];




console.log(arrayStars);
window.displayGameLevelPage = function () {
    console.log("unlock Game menu" + unlockGame);
    document.body.innerHTML = "";
    //Create the wrapper
    var wrapper = createDiv();
    //add a css class wrapper
    wrapper.classList.add("wrapper");

    //Create Heading logo, assign the text menu, assign to wrapper
    var heading = createHeading1("Select Level");
    heading.classList.add("heading");
    wrapper.appendChild(heading);

    //Create the div for game level
    var menuDiv = createDiv();
    //add a css class wrapper
    menuDiv.classList.add("menu");
    //Appending menuDiv to wrapper
    wrapper.appendChild(menuDiv);
    //Create the div for navigation
    var divNavigationElement = createDiv();
    //Assign the class
    divNavigationElement.classList.add("Navigation");
    //Add to wrapper
    wrapper.appendChild(divNavigationElement);

    var exitButtonElement = createButton("Exit");
    divNavigationElement.appendChild(exitButtonElement);
    exitButtonElement.onclick = function () {
        //Back to menu
        //window.close();
    }
    


    //Loop through the colourList
    for (var i = 0; i < unlockGame; i++) {

        //Create the of button and assign the name
        var levelButtonElement = createButton(gameLevel[i].level);
        //Display the star on the menu
        //check if user already play the game, and it has star on it
        if (i < arrayStars.length) {
            // console.log("Level" + arrayStars[i].level + " stars " + arrayStars[i].stars);
            //console.log(typeof(arrayStars[i].stars));
            //Display them
            var starsDivElement = createSpan();
            levelButtonElement.appendChild(starsDivElement);
            for(var index = 0; index < arrayStars[i].stars; index++)
            {
               
                starsDivElement.innerHTML += "&starf;";
               
            }
        }

        //Create the current Level
        levelButtonElement.disabled = false;
        //Add colorButtonElement to the wrapper
        menuDiv.appendChild(levelButtonElement);
        //Creat the anonymous function gameLevelClick that 
        //passing the game level and the button element
        gameLevelClick(gameLevel[i].level, levelButtonElement);

    }
    //Loop through the colourList
    for (var i = unlockGame; i < gameLevel.length; i++) {

        //Create the of button and assign the name
        //var levelButtonElement = createButton(gameLevel[i].level + "&#128274;");
        var levelButtonElement = createButton();
        levelButtonElement.innerHTML = gameLevel[i].level + "&#128274;";
        //Create the current Level
        levelButtonElement.disabled = true;
        //Add colorButtonElement to the wrapper
        menuDiv.appendChild(levelButtonElement);

        //Creat the anonymous function gameLevelClick that 
        //passing the game level and the button element
        gameLevelClick(gameLevel[i].level, levelButtonElement);
    }
}
//When the user select the particular game level.
function gameLevelClick(levelNumber, levelButtonElement) {
    //when the button is clicked, call this function
    levelButtonElement.onclick = function () {

        console.log(levelNumber);
        playGame(levelNumber);
        // if (levelNumber == 1) {
        //     //Call the check game function to identify the game level.
        //     playGame(levelNumber);
        // }
        // else if (levelNumber == 2) {
        //     //Call the check game function to identify the game level.
        //     playGame(levelNumber);
        // }
        // else if (levelNumber == 3) {
        //     //Call the check game function to identify the game level.
        //     playGame(levelNumber);
        // }
        // else {
        //     //Call the check game function to identify the game level.
        //     playGame(levelNumber);
        // }


    }
}
//This function will work when the data is change by the non developer
//It will detect the type of game
window.playGame = function(levelNumber) 
{
    //Ge the game level variable
    var gameData = gameLevel[levelNumber - 1];
    //Check the type of game
    if (gameData.typeGame == "Order Number") {
        orderNumber(gameData);
    }
}

