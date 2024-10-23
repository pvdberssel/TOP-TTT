
const gameboard = (function (){
   let board= [['','',''],['','',''],['','','']];

   function addMark(row,column,mark){
        if(verifyMove(row,column)){
            board[row][column] = mark;
            return true
        }else{
            return false
        }
    }

    function getBoard(){
        return board;
    }

    function verifyMove(row,column){
        if(row<3 && column<3 &&((board[row][column] === ''))){
            return true
        }else{
            return false
        }
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
        validMove=boardGame.addMark(row,column,activePlayer.mark);
        switchPlayer(row,column,validMove);
        printBoard();
    }

    function switchPlayer(row,column,validMove){
        if(validMove){
        activePlayer = (activePlayer.name === players[0].name) ? players[1] : players[0];
        }
    }


    return {printBoard,playerTurn,boardGame}
})();



