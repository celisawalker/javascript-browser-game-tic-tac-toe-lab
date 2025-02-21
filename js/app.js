/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
  ]

  const players = {
    "1": "X",
    "-1": "O",
    "null": ""
  }

/*---------------------------- Variables (state) ----------------------------*/
board = [
    "", "", "",
    "", "", "", 
    "", "", ""
];
turn = "1";
winner = false;
tie = false;


/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll(".sqr");
const messageEl = document.querySelector("#message");


/*-------------------------------- Functions --------------------------------*/
init();
function init(){
    board = [
        "", "", "",
        "", "", "", 
        "", "", ""
    ];
    turn = 1;
    winner = false;
    tie = false;
    render();
}

function handleClick(event) {
    if(winner) return;
    const squareIndex = event.target.id;
    if(board[squareIndex]) return;
    board[squareIndex] = turn;
    turn *= -1;   
    checkForWinner();
    render();
}

function updateBoard(){
    board.forEach((value, index) => {
        squareEls[index].textContent = players[value];
    })
}

function checkForWinner(){
    for (let i = 0; i < board.length; i++) {
        if(board[0] !== "" && board[0] === board[1] && board[0] === board[2] ||
            board[0]!== "" && board[0] === board[3] && board[0] === board[6] ||
            board[0] !== "" && board [0] === board[4] && board[0] === board[8] ||
            board[1] !== "" && board [1] === board[4] && board[1] === board[7] ||
            board[2] !== "" && board [2] === board[5] && board[2] === board[8] ||
            board[2] !== "" && board [2] === board[4] && board[2] === board[6] ||
            board[3] !== "" && board [3] === board[4] && board[3] === board[5] ||
            board[6] !== "" && board [6] === board[7] && board[6] === board[8]
        ){
            winner = true;
            messageEl.textContent = `Player ${players[-turn]} wins! 🎉`;
        }
    }
}
        

function checkForTie(){
    if(board.includes("")){
        tie === false;
    }else{
            tie === true;
            messageEl.textContent = "Tie game!";
            console.log("tie");
        }
}

function render (){
    if(!winner){
        messageEl.textContent = `${players[turn]}'s turn`
    }
    checkForTie();
    updateBoard();
}
/*----------------------------- Event Listeners -----------------------------*/
const reset = document.querySelector("#reset").addEventListener("click", init);
const gamePlay = document.querySelector(".board").addEventListener("click", handleClick);