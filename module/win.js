// Winning combinations of them game

export const WIN_COMBINATIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// check for winner:

//* some method : checks if any array elements pass a test
//*             :  executes the callback function once for each array element.
//*             :  returns true (and stops) if the function returns true for one of the array elements.

//* every method : executes a function for each array element.
//*              : returns true if the function returns true for all elements.

export function checkWin(currentClass, blockElement){
    let winMatch = [];
    WIN_COMBINATIONS.some(combination =>{
        // console.log(combination);  //we will get all the winning combination
        winMatch.push(combination.every(index =>{
            //checking if the block element of the given index(winning combination) has the avatar filled in it
            return blockElement[index].classList.contains(currentClass);
        }))
    })
    return winMatch || null
}
