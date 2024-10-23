
const gameboard = (function (){
   let board= [['','',''],['','',''],['','','']];

   function addMark(row,column,mark){
        board[row][column] = mark;
    }

    function getBoard(){
        return board;
    }

    return{getBoard,addMark}
})()




const gameController =  (function (){
    let boardGame = gameboard;

    function printBoard(){
        console.table(boardGame.getBoard())
    }

    let players = [
        {
            name: 'Player One',
            mark: 'x'
        },
        {
            name: 'Player two',
            mark: '0'
        }
    ]
    
    let activePlayer = players[0];
    
    function playerTurn(row,column){
        boardGame.addMark(row,column,activePlayer.mark);
        switchPlayer();
        printBoard();
    }

    function switchPlayer(){
        activePlayer = (activePlayer.name === players[0].name) ? players[1] : players[0];
    }

    
    return {printBoard,playerTurn,boardGame}
})();



