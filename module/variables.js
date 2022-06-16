// All the varaibles

export let GAME = {
    DC_CLASS : 'dc1',//value for dc avatar
    MV_CLASS : 'mv1', //value for mv1 avatar
    turn: undefined,
    winner: null,
    selectedProfile : document.querySelectorAll('.img .id'),
    blockElement : document.querySelectorAll('[data-cell]'),
    boardElement: document.getElementById('board'),
    startBtn : document.getElementById('startBtn'),
    startWindow : document.querySelector(".start-game"),
    winEl : document.querySelector(".winner-msg"),
    drawEl : document.querySelector(".draw-msg"),
    winnerimg : document.querySelector(".winner-msg .winner"),
    restartBtn: document.getElementById("restartBtn"),
    drawBtn: document.getElementById("drawBtn"),

}

