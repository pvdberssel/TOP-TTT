
var gameboard = {
    board: [],
    init: function(){
        this.board=[['','',''],['','',''],['','','']];
    },
    addMark: function(row,column,mark){
        this.board[row][column] = mark;
    }
    
}
console.table(gameboard.board);
gameboard.init();
console.table(gameboard.board);
gameboard.addMark(1,1,'X')
console.table(gameboard.board);