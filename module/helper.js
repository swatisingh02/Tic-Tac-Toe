import {GAME} from "./variables.js";



// All the helper functions

// used to set selected avatar on start game screen:
//we want to add event listeners to each of these image
//we want to get the id of image selected and give it to the board
export function Profile(){
    GAME.selectedProfile.forEach(img =>{
        // console.log(img);
        img.addEventListener("click", e =>{
            let target = e.target.dataset.id;
            removeImgSelection(GAME.selectedProfile); //this will remove selected from all classes
            document.querySelector(`[data-id='${target}']`).classList.add("selected");
            // console.log(e.target.dataset.id);  //this returns the id of that img

            // swap values if user select 2nd proile(dc2, mv2)
            if(target == 'dc2' || target == 'mv2'){
                GAME.DC_CLASS = 'dc2';
                GAME.MV_CLASS = 'mv2';
            }

            // set turns: if the user selects mv avatar then the turn will print true on console
            GAME.turn = target == 'mv1' || target == 'mv2' ? true : false;
        })
    });
}


// function to make sure other avatar are not getting selected once we have selected one
// Remove selected class
function removeImgSelection(img){
    [].forEach.call(img, function(el){
        el.classList.remove("selected");
    })
}

//once we have selected an avatar, it will return its id...we send that id to the board. Ex: board dc1
//to get the hover effect of the selected avatar onto the gird:

// Function to use setHoverEffect to the cell
export function setHoverEffect(){
    // if we already have these classes on the board element then we have to remove it 
    GAME.boardElement.classList.remove(GAME.DC_CLASS);
    GAME.boardElement.classList.remove(GAME.MV_CLASS);

    if(GAME.turn){   //user has selected mv avatar
        // console.log("true");
        GAME.boardElement.classList.add(GAME.MV_CLASS);
    }else{          //user has selected dc avatar
        // console.log("false");
        GAME.boardElement.classList.add(GAME.DC_CLASS);
    }
}


// This function is used to add current user to the cell:
export function markCell(cell, currentClass){
    cell.classList.add(currentClass);
}


// Use this function to swap user turn:
export function swapTurns(turn){
    return turn = !turn;
}


// end game function 
export function endGame(draw, winEl, drawEl){
    if(!draw){
        winEl.classList.add("show");
    }else{
        drawEl.classList.add("show");
    }
}


// used to check the draw result:
export function isDraw(flag){
    if(flag.length)
        return
    //destructured the blockelement, adds every method this element
    //return boolean value if all the cells are filled or not
    return [...GAME.blockElement].every(cell =>{
        // console.log(cell); //gives current cell div tag

        //we are checking if all the cells are filled with avatars
        return cell.classList.contains(GAME.DC_CLASS) ||
        cell.classList.contains(GAME.MV_CLASS);
    }) 
    
}