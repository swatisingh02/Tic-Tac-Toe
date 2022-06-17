// 1.Something which tell us whether 'X' or 'O' is going on
// 2.need of function which can change these variables
// 3.something to know that we hve won he game or not

let player = 'X';
let gameOver = false; //initally the person has not won it.

const changePlayer = () => {
    return player === 'X' ? 'O' : 'X';
}

const checkWon = () => {
    //1st we access the boxText 
    let boxTexts = document.getElementsByClassName('boxText');
    //all the winning possibilities:
    let winPos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    //if 0 == 1 and 1 == 2 ...that is all 3 have the same value and not empty 
    winPos.forEach(ele => {
        if(boxTexts[ele[0]].innerText === boxTexts[ele[1]].innerText &&     boxTexts[ele[0]].innerText === boxTexts[ele[2]].innerText && boxTexts[ele[0]].innerText !== ""){
            document.getElementById('result').innerText = boxTexts[ele[0]].innerText + "won";
            gameOver = true;
            document.querySelector('img').style.width = "100px";
        }

    })
}

let box = document.getElementsByClassName('box');
console.log(boxes) //its an object that looks like an array 
// Hence whenver we have an obj tht looks like an array we could maipulate it into an array:

// Array.from(boxes)  //* this will convert the objs into real array 
//* nowwe can iterate through the array and add an event listener to each of these

// 3 parameters always: 1. the element itself 2. index 3. entire array
// we are taking out one box at a time and also accessing what is written inside that tag
Array.from(boxes).forEach(box => {
    let boxText = box.querySelector('.boxText', innerHTML)
    // console.log(boxText) //it getts the entire span tags
    box.addEventListener('click', () => {
        // console.log(boxText.innerText) //*we get the values of the numbers in each box as we click on any box
        //! also a box once filled should not be able to get filled again 
        if(boxText.innerHTML=== "" && !gameOver){
            boxText.innerText = player;  //replace the number with an 'X' or 'O'
            player = changePlayer();  //change the player and store it
            checkWon();     //check after every move if someone has checkWon
            document.getElementsByClassName("player")[0].innerText = player; //it returns an array(its turn of 'x') ->becoz of getelements -> hence 0th index
            
        }
    });
});


// reset button functionality:

//we want to clear out the box once we click reset button -> so we access each box and try to clear out its text.
let reset = document.getElementsByClassName('reset');
reset.addEventListener('click', () =>{
    let boxTexts = document.querySelectorAll('.boxText'); //gets all the boxtexts in the form of an array...so we can grab one by one and clear it out.
    //! this does not return a collection which looks like an array ...hence we do not use array.from()
    boxTexts.forEach(boxText => {
        boxText.innerText = "";
    });
    player = 'X';    //player x should play first
    gameOver = false; //gameover us set  to false
});