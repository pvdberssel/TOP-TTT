
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
        console.log(activePlayer.mark)
        boardGame.addMark(row,column,activePlayer.mark);
        printBoard();
    }
    return {printBoard,playerTurn,boardGame}
})();



