/*
GAME LEVEL
*/
window.gameLevel = window.gameLevel || [];
gameLevel.push(
    {   
        level:1,
        typeGame: "Order Number",
        type: "ascending order",
        numberOfButtons: 4,
        maxNumber: 12,
        timer: 10
    },
    {
        level: 2,
        typeGame: "Order Number",
        type: "decending order",
        numberOfButtons: 4,
        maxNumber: 12,
        timer: 10
    },
    {
        level:3,
        typeGame: "Order Number",
        type: "ascending order",
        numberOfButtons: 6,
        maxNumber: 20,
        timer: 20
    },
    {
        level: 4,
        typeGame: "Order Number",
        type: "decending order",
        numberOfButtons: 6,
        maxNumber: 20,
        timer: 20
    }
);

/*Number of Star for the game*/
window.numberStar = 3;
/*Text to say congraduation  */
window.congraduation = window.congraduation || [];
congraduation.push("Congratulations", "Amazing", "Perfect", "Great","Fantastic", "Awesome","Wonderfull");
/*Text to say pass the game with required to improve  */
window.requireToImprove = window.requireToImprove || [];
requireToImprove.push("Let try it harder next time", "Not Bad", "That alright")
/*Text to encourage the user  */
window.encourage = window.encourage || [];
encourage.push("Deep breathing and relaxing", "That’s okay! You will get through it next time", "Get your mind off of things and let you recharge a little bit.");

// MEMORY GAME
window.cardCollections = window.cardCollections || [];
// now add the data for GAME LEVEL 4 (Memory Game)
cardCollections.push([
    {
        name: 'code',
        img: 'images/a.png',
    },
    {
        name: 'car',
        img: 'images/car.jpg',
    },
    {
        name: 'bmw',
        img: 'images/BMW.jpg',
    }
]);


/*
A game level consists of questions + answers 
Each array element, therefore contains, an object of:
{
    question:"",
    answer:""
}*/
window.gameLevel1 = [
    {
        question: "What is the captital of Australia ?",
        answer: "Camberra"
    },
    {
        question: "What is the captital of USA ?",
        answer: "Washinton"
    }
];