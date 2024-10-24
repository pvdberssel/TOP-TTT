
const gameboard = (function (){
   let board= [['','',''],['','',''],['','','']];
   let win = false;
   function addMark(row,column,mark){
    let validMove = verifyMove(row,column)
        if(validMove){
            board[row][column] = mark;
            win = checkWinCondition();
            console.log(win);
            return true
        }else{
            return false
        }
    }

    function getBoard(){
        return board;
    }

    function getWinState(){
        return win;
    }

    function verifyMove(row,column){
        if(row<3 && column<3 &&((board[row][column] === ''))){
            return true
        }else{
            return false
        }
    }

    function checkWinCondition(){
        for(let i =0; i < board.length; i++){

                if(((board[i][0] === board[i][1]) && (board[i][1] === board[i][2]))){
                        if(board[i][0] !== '' && board[i][1] !== '' && board[i][2] !== ''){
                        return true
                }}else if((board[0][i] === board[1][i]) && (board[1][i] === board[2][i])){
                        if(board[0][i] !== '' && board[0][i] !== '' && board[0][i] !== ''){
                        return true
                    }
                }else if((board[0][0] === board[1][1]) && (board[1][1] === board[2][2])){
                        if(board[0][0] !== '' && board[1][1] !== '' && board[2][2] !== ''){
                        
                        return true
                    }
                }else if((board[2][0] === board[1][1]) && (board[1][1] === board[0][2])){
                        if(board[2][0] !== '' && board[1][1] !== '' && board[0][2] !== ''){ 
                        return true
                    }}
    
    }
}

    return{getBoard, addMark, getWinState}
})()


const displayController = (function(){
    const mapBoardToDom = [['.tl','.tm','.tr'],['.ml','.mm','.mr'],['.bl','.bm','.br']];
    
    //Map to DOM
    function render(row,column,mark){
        console.log(mapBoardToDom[row][column])
        gridSelect = mapBoardToDom[row][column];
        document.querySelector(gridSelect).textContent = mark;
    }

    function reset(){

    }

    return {render, reset, mapBoardToDom}
})();


const gameController =  (function (){
    let boardGame = gameboard;
    let win = false;
    let renderController = displayController;

    let gridComponents = document.querySelectorAll(".gridcomponent");
    gridComponents.forEach((grid) => {
        grid.addEventListener('click', () => getGridPosition(grid.className));
    })

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
        if(!win){
        validMove=boardGame.addMark(row,column,activePlayer.mark);
        if(validMove){
            renderController.render(row,column,activePlayer.mark);
            switchPlayer(row,column);
            
        }
        printBoard();
        win = boardGame.getWinState();
        alertWin(win);
        }
    }

    function getGridPosition(gridClass){

        gridIndex = '.' + gridClass.split('gridcomponent ')[1];
        console.log(gridIndex)
        for(let i = 0; i<3; i++){
            for(let j = 0; j< 3; j++){
                if(gridIndex === renderController.mapBoardToDom[i][j]){
                    row = i;
                    column = j;
                }
            }
        }
        playerTurn(row,column)

    }
    function switchPlayer(row,column){
        activePlayer = (activePlayer.name === players[0].name) ? players[1] : players[0];
    }

    function alertWin(win){
        if(win){
          alert('Win')
            
        }
    }
    return {printBoard,playerTurn,boardGame}
})();



