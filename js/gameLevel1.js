/*
Declare variable
*/
// var level1Infor = {
//     questionElement: null,
//     answerElement: null,
//     textboxElement: null,
//     currentQuestionItem: null,
//     upToQuestion = 0
// }
var questionElement;
var answerElement;
var textboxElement;
var currentQuestionItem;
var upToQuestion = 0;
/*
    Generate game level
*/
function generateLevel1Question() {
    //only get a question if there are remainning quesions.
    if (upToQuestion < gameLevel1.length) {
        console.log("generateLevel1Question");
        currentQuestionItem = gameLevel1[upToQuestion];
        var question = currentQuestionItem.question;
        var answer = currentQuestionItem.answer;
        questionElement.textContent = "Question: " + question;
    }
    else {
        questionElement.textContent = "There are no more questions";
    }
    //Clear answer question
    textboxElement.value = "";
    //Clear the anser box
    answerElement.textContent = "";
}
function checkAnswerForLevel1() {
    //only get a question if there are remainning quesions.
    if (upToQuestion < gameLevel1.length) {
        //console.log("Running... checkAnswerForLevel1");
        //get the text from the textbox
        var userInputText = textboxElement.value;
        console.log("user input " + userInputText);
        var realAnswer = currentQuestionItem.answer;
        console.log("actual answer" + realAnswer);
        //get the correct anser from the global variable
        if (userInputText == realAnswer) {
            answerElement.textContent = "Answer: Correct";

            console.log("Correct");
        }
        else {
            answerElement.textContent = "Answer: Incorrect! the correct anser is " + realAnswer;
            console.log("Incorrect");
        }
        upToQuestion++;
    }
}
/*
This function clears the screen, and creates (or recreates)
the entire level 1 canvas.
*/
window.createLevel1 = function() {
    console.log("hello");
    //clear the entire body
    document.body.innerHTML = "";
    //Create a question node
    questionElement = createParagraph("Question: ", "question");
    //console.log(para);
    //create an answer textbox (input)
    createParagraph("Put your answer here: ", "answerInputLabel");
    //Create textbox
    textboxElement = createTextInput();
    //create an answer button
    var answerButtonElement = createButton("Answer");
    //add a click event handler
    answerButtonElement.onclick = checkAnswerForLevel1;
    //create an answer text field / response text field
    answerElement = createParagraph("", "answer");
    //create next question
    var nextButtonElement = createButton("Next Question");
    nextButtonElement.onclick = generateLevel1Question;
    generateLevel1Question();
}
