

//Variable Section
//Number of button in the game
var numberOfButtons = null;
//The maxNumber is the maximum number that random generate that range from 0 to that max number
var maxNumber = null;
//There are two type of game: descending and ascending.
var gameType = null;
var level = null;
var origionalNumberLists = [];
var softNumberLists = [];
var currentClick = 0;
var tried = 0;
//Timer variable
var timerID;
var widthBar = 0;
var timer = null;
//This function will call from the Game Menu that have parameter gameData
window.orderNumber = function (gameData) {
    console.log(gameData);

    //Set all the variable to empty. Because this function is global function.
    //Therefore, it remember all the variable value. 
    //So when the user click to the previous game. .
    origionalNumberLists = [];
    softNumberLists = [];
    currentClick = 0;
    tried = 0;
    widthBar = 0;
    timer = null;

    //Assign the game data to the variable
    numberOfButtons = gameData.numberOfButtons;
    maxNumber = gameData.maxNumber;
    gameType = gameData.type;
    level = gameData.level;
    timer = gameData.timer;
    console.log("gameData ++ "+ gameData.timer);
    console.log("timer ++ "+ timer);

    //Clear the sceen
    document.body.innerHTML = "";


    //Create div timer
    var topHeader = createDiv();
    //Add the class
    topHeader.classList.add("topHeader");



    //Create the empty for number of tried
    var triedElement = createDiv("Tried: 0");
    triedElement.setAttribute("id", "tried");

    //Create the empty paragraph
    var timerElement = createDiv();
    //Set the timer id
    timerElement.setAttribute("id", "progressBar");
    //Create the empty paragraph
    var timeGoneElement = createDiv();
    timeGoneElement.setAttribute("id", "timeGoneBar");
    timerElement.appendChild(timeGoneElement);
    topHeader.appendChild(timerElement);
    topHeader.appendChild(triedElement);

    //Create the timer
    timerID = setInterval(runTimer, 500);

    //Create the game type for span
    var span = createSpan(gameType);
    //Set color to blue
    span.style.color = "blue";
    //Create Heading logo, assign the text menu, assign to wrapper
    var heading = createHeading3("Click to number in ");
    //Append child to heading
    heading.appendChild(span);
    heading.classList.add("heading");

    //Create the wrapper
    var wrapper = createDiv();
    //add a css class wrapper
    wrapper.classList.add("gameOrderNumber");

    //Loop through the numberOfButtons
    for (var i = 0; i < numberOfButtons; i++) {
        //get random number
        var number = randomNumber(maxNumber);
        //check duplicate number, if it is duplicate, create a new one
        //Call the checkExistValue to check it is dupplicated
        while (checkExistValue(number)) {
            number = randomNumber(maxNumber);
        }
        //store to the array
        origionalNumberLists.push(number);

        //Create the of button and assign the name
        var numberButton = createButton(number);
        //Add colorButtonElement to the wrapper
        wrapper.appendChild(numberButton);


        //Creat the anonymous function when the button click
        //passing the number and the button element
        anonymousOrder(number, numberButton);
    }
    //Copy the current array number to the soft Array number
    //The slice() method returns the selected elements in an array, as a new array object.
    softNumberLists = origionalNumberLists.slice();

    //Soft the array according to ascending order.
    if (gameType == "ascending order") {
        softNumberLists.sort(function (a, b) { return a - b });
    }
    //decending game
    else {
        softNumberLists.sort(function (a, b) { return b - a });
    }
    console.log(origionalNumberLists);
    console.log(softNumberLists);
}
//This function will run by interval
function runTimer() {
    // console.log("Widthbar " + widthBar);
    // console.log("timer " + timer);
    //get the timerBarElement Element 
    var timerBarElement = document.getElementById("timeGoneBar");
    //If the widthBar is 100, it will terminate the game
    if (widthBar >= 100) {
        //Clear the interval when the timer is reach
        clearInterval(timerID);
        //Call the completed game
        //Call End game
        endGame(0, level, false);
      } else {
        //Increase the widthbar by 100 (percent of the width) that increase each time.
        widthBar += 100/timer;
        timerBarElement.style.width = widthBar + '%';
      }

}
//check if the new value exist in the  origional array
function checkExistValue(newNumber) {
    // console.log("randoml" +newNumber);
    // console.log(origionalNumberLists);
    for (var i = 0; i < origionalNumberLists.length; i++) {
        if (origionalNumberLists[i] == newNumber) {
            //new value already exist
            return true;
        }
    }
    return false;
}
//Create the anonymous function when the button click
function anonymousOrder(number, numberButton) {

    //when the button is clicked, call this function
    numberButton.onclick = function () {
        previousClick = numberButton;
        //Check if the user click is correct as acending order
        if (softNumberLists[currentClick] == number) {
            //when the user already clicked the button, this button is disable
            numberButton.disabled = true;
            //change style of the button
            numberButton.style.backgroundColor = 'blue';
            numberButton.style.color = 'white';
            numberButton.innerHTML += "&#x2714";
            numberButton.style.border = "thick solid white"
            //console.log("correct " + number);
            //Increase to the next item
            currentClick++;
            //Create the sound effect and pass the correct sound as the parameter
            var correctSound = createSoundEffect("sound/correctAnswer.mp3");
            //Play the sound
            correctSound.play();
            //Finish the game
            if (currentClick == softNumberLists.length) {
                //Create the sound effect and pass the congraduation sound as the parameter
                var correctSound = createSoundEffect("sound/congraduationSound.mp3");
                //Play the sound
                correctSound.play();
                //console.log("end game");
                //Clear the timer
                clearInterval(timerID);
                //show the star
                //Short if condition ? exprT : exprF https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
                //if clicked over the number of stars. It is set to 0
                var stars = (numberStar - tried) < 0 ? 0 : numberStar - tried;
                //Call End game
                endGame(stars, level, true);

            }
        }
        else {
            //Incorrect order
            tried++;
            //Set to the tried to tried id
            document.getElementById("tried").innerHTML = "Tried: " + tried;

            //Present the next button to click by get the postion of the origional button.
            var buttonPosition = correctNextButton(currentClick);
            //Get the button element
            var getButtonElement = document.getElementsByTagName("button");
            //set the background color
            getButtonElement[buttonPosition].style.backgroundColor = "yellow";
            // getButtonElement[buttonPosition].style.animationPlayState = "running";

            //Create the sound effect and pass the in correct sound as the parameter
            var wrongAnser = createSoundEffect("sound/wrongAnswer.mp3");
            //Play the sound
            wrongAnser.play();

        }
    }
}
//Get the next botton click
function correctNextButton(thisClick) {
    //console.log("origional list" + origionalNumberLists);
    //loop through the origional list and compare with the current click.
    for (var postion = 0; postion < origionalNumberLists.length; postion++) {
        if (origionalNumberLists[postion] == softNumberLists[thisClick]) {
            //Return position of the origional button
            return postion;
        }
    }

}


