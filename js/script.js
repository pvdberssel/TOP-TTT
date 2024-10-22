
var gameboard = {
    board: [],
    init: function(){
        this.board=[['','',''],['','',''],['','','']];
    },
    addMark: function(row,column,mark){
        this.board[row][column] = mark;
    },
    getBoard: function(){
        return this.board;
    },
    
}

const gameController =  (function (){
    let boardGame = gameboard;
    function printBoard(){
        console.log(gameboard.getBoard())
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

gameController.printBoard();
console.log(gameController.activePlayer)


