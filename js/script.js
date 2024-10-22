
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
    let boardGame = gameboard.getBoard();
    function printBoard(){
        console.log(boardGame)
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

    return {printBoard, activePlayer}
})();

console.log(gameboard.getBoard());
gameController.printBoard();

