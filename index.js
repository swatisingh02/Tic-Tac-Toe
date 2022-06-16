
import {GAME} from "./module/variables.js";
import {markCell, Profile, setHoverEffect, swapTurns, endGame, isDraw } from "./module/helper.js";
import {checkWin, WIN_COMBINATIONS} from "./module/win.js";

// Game Buttons
GAME.startBtn.addEventListener("click", startGame);
GAME.restartBtn.addEventListener("click", startGame);
GAME.drawBtn.addEventListener("click", startGame);


Profile();

// Start Game
function startGame(){
    // console.log("Game Started");
    setHoverEffect();

    // Iterate over cells and add a click event:

    GAME.blockElement.forEach(cell => {

        //clearing the cellsfrom the previous games
        cell.classList.remove(GAME.DC_CLASS);
        cell.classList.remove(GAME.MV_CLASS);
        cell.classList.remove("win");
        cell.removeEventListener("click", handleClick);

        
        // console.log(cell);  //will print all the div tags and we have to add on an onclick event to these
        cell.addEventListener('click', handleClick, {once:true}) //lets you click only once on a cell
    })
    GAME.startWindow.classList.add("hide");

    // hiding the winner window from previous game and removing winner img
    GAME.winEl.classList.remove("show");
    GAME.drawEl.classList.remove("show");
    GAME.winnerimg.children.length ? GAME.winnerimg.removeChild(GAME.winner) : null;
}


// Handler onclick function of the cell:
function handleClick(e){

    // console.log("click");  //will print click whenver you click in any cell
    const cell = e.target;
    // console.log(cell);      //if we click in any cell we will get that block in our console
    // console.log(GAME.turn)   //gives the information if the selected avatar is mv or dc
    const currentClass = GAME.turn ? GAME.MV_CLASS : GAME.DC_CLASS;
    //console.log(currentClass);  //on click in any cell it prints the avatar selected

    //we need to add this avatar to the selected block:
    markCell(cell, currentClass);

    // check winner: will return an array
    let flag = checkWin(currentClass, GAME.blockElement).filter((win, index)=>{
        //console.log(win);  //prints all the true/false values
        //console.log(index); //gives the index valueof the winning combination

        if(win){
            // console.log("Win");
            // console.log(index); 
            // GAME.winner = WIN_COMBINATIONS[index];
            // console.log(GAME.winner);  //will give the winning combination



            //add green background to the winner:
            //* map method : creates a new array from calling a function for every array element
            //*            :  calls a function once for each element in an array.

            //will get the winning combination (0,1,2) and map it using i
            // blockelement will access the div of the winning combination one by one
            WIN_COMBINATIONS[index].map(i =>{
                GAME.blockElement[i].classList.add('win')
            })




            //set the winner:
            GAME.winner = GAME.blockElement[WIN_COMBINATIONS[index][0]].cloneNode(true); // returns current div of the winner
            return win !== false;
        }
    });

    // check for win or draw:
    if(flag.length){
        endGame(false, GAME.winEl, GAME.drawEl);
        GAME.winnerimg.append(GAME.winner);  //adds img of winner div
    }else if(isDraw(flag)){
        // console.log("draw");
        // console.log(isDraw(flag));
        endGame(true, GAME.winEl, GAME.drawEl);
    }
    // console.log(flag);   //flag will either be empty(draw) or have true(win) value 
    GAME.turn = swapTurns(GAME.turn);
    setHoverEffect();

}