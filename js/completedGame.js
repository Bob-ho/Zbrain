
//CompletedGame page
window.endGame = function (stars, currentLevel, completed) {
    console.log(currentLevel);
    console.log("completed" + completed);
    //Loop through arrayStars to check if the user play previous game again.
    for (var i = 0; i < arrayStars.length; i++) {
        if (currentLevel == arrayStars[i].level) {
            arrayStars[i].stars = stars;
        }
    }
    //When the current level greater than unlockGame. User need to completed the game. Then add new game data with value.
    if (currentLevel >= unlockGame && completed == true) {
        //Add the current level that associate with curent stars. key-value
        arrayStars.push({ level: currentLevel, stars: stars });
    }

    //unlockGame variable is the global variable
    //Check if the currentLevel is greater than or equal unlockGame level and unlockGame must also be less the gameLevel.length. The game must completed to unlock  the next game
    if (currentLevel >= unlockGame && unlockGame < gameLevel.length && completed == true) {
        unlockGame = currentLevel + 1;
    }

    console.log("unlock Game" + unlockGame);
    //Clear the screen
    document.body.innerHTML = "";

    //create div element for 
    var container = createDiv();
    // add a CSS class class 
    container.classList.add("completedGame");

    //Create Heading 
    var levelName = createHeading1("level " + level);
    container.appendChild(levelName);

    var text = textHeading(stars, completed);


    var congraduationText = createHeading3(text);
    container.appendChild(congraduationText);
    //Create the stars
    var starElement = createDiv();
    //add a css class for starElement
    starElement.classList.add("star");
    if (completed) {
        //Show the number of stars with fill color
        for (var i = 0; i < stars; i++) {
            //Add to the star
            starElement.innerHTML += "&starf;";
        }
        //Fill with the unfill stars. Start from number of stars.
        for (var i = stars; i < numberStar; i++) {
            starElement.innerHTML += "&#9734";
        }
    } else {
        starElement.innerHTML += "&#9752 &#9752";
    }

    //Append child to the container
    container.appendChild(starElement);

    //Create the div for navigation
    var divNavigationElement = createDiv();
    //Assign the class
    divNavigationElement.classList.add("Navigation");
    //Add to wrapper
    container.appendChild(divNavigationElement);

    var homeButtonElement = createButton("Menu");
    homeButtonElement.onclick = function () {
        //Back to menu
        displayGameLevelPage();
    }
    //Append home button Element to container
    divNavigationElement.appendChild(homeButtonElement);
    var GameButtonElement;
    //If user completed the game. It will show the next game.
    if (completed) {
        //Show the next game button
        if (level < gameLevel.length) {
            GameButtonElement = createButton("Next Game");
            GameButtonElement.onclick = function () {
                //Back to menu
                playGame(level + 1);
            }
        }
        else {
            //completed all level
            container.appendChild(createHeading1("Congraduation, You have completed all levels. It is a big achievement"));
        }
    }
    //Otherwise, it will required user to play again.
    else {
        GameButtonElement = createButton("Play again");
        GameButtonElement.onclick = function () {
            //Back to menu
            playGame(level);
        }
    }
    //Append nextGameButton button Element to container
    divNavigationElement.appendChild(GameButtonElement);

}
//This function is to write the text in the heading
function textHeading(stars, completed) {
    //Create text variable and set to null
    var text = null;
    //Assing the text to the engage user to play
    if (completed) {
        var randomText;
        //User have play the great with max performance with full star
        if (stars == numberStar) {
            //Get the random Number base on the congraduation range
            randomText = randomNumber(congraduation.length);
            text = congraduation[randomText];
        }
        //Required to improve
        else {
            //Get the random Number base on the requireToImprove range
            randomText = randomNumber(requireToImprove.length);
            text = requireToImprove[randomText];
        }
    }
    //Uncompleted the game
    else {
        //Get the random Number base on the encourage range
        var randomText = randomNumber(encourage.length);
        text = encourage[randomText];
    }
    return text;
}