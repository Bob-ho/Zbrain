/*MEMORY GAME*/

//This function will call from the Game Menu 
window.createLevel4 = function () {
    console.log(cardCollections);
    //Clear the sceen
    document.body.innerHTML = "";
     //Create the wrapper
     var wrapper = createDiv();
     //add a css class wrapper to wrap the entire game
     wrapper.classList.add("memoryGame");
}