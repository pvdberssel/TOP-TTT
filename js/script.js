
const gameboard = (function (){
   let board= [['','',''],['','',''],['','','']];

   function addMark(row,column,mark){
    let validMove = verifyMove(row,column)
        if(validMove){
            board[row][column] = mark;
            checkWinCondition();
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

    function checkWinCondition(){
        console.log("Check win conditions");
        for(let i =0; i < board.length; i++){


                if(board[i][0] !== '' && board[i][1] !== '' && board[i][2] !== ''){
                    if(((board[i][0] === board[i][1]) && (board[i][1] === board[i][2]))){
                        console.log("win row")
                        return true
                }}else if(board[0][i] !== '' && board[0][i] !== '' && board[0][i] !== ''){
                    if((board[0][i] === board[1][i]) && (board[1][i] === board[2][i])){
                        console.log("win column")
                    }
                }else if(board[0][0] !== '' && board[1][1] !== '' && board[2][2] !== ''){
                    if((board[0][0] === board[1][1]) && (board[1][1] === board[2][2])){
                        console.log("win diagnoal")
                    }
                }else if(board[2][0] !== '' && board[1][1] !== '' && board[0][2] !== ''){
                    if((board[2][0] === board[1][1]) && (board[1][1] === board[0][2])){
                        console.log("win diagnoal 2")
                    }
                }
            
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



