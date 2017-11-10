/*let board = [];
board = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']];

const printBoard = board => {
  console.log('Current Board: ');
  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '))
  console.log(board[2].join(' | '))
}
printBoard(board);
board[0][1] = '1';
board[2][2] = 'B';
printBoard(board);*/

/*class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }

  playMove(rowIndex, columnIndex) {
    this._board.flipTile(rowIndex, columnIndex);
    if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
      console.log('Game Over! Final Board');
      this._board.print(this._playerBoard);
    } else if (!this._board.hasSafeTiles) {
      console.log('You WON!');
    } else {
      console.log('Current Board: ');
      this._board.print();
    };
  }
}*/

/*class Board {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns;
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
  }

  get playerBoard() {
    return this._playerBoard;
  }

  flipTile (rowIndex, columnIndex) {
    if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
      console.log('Tile has been flipped!');
      return;
    } else if (this._bombBoard[rowIndex][columnIndex]) {
      this._playerBoard[rowIndex][columnIndex] = 'B'
    } else {
      this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
    };
    this._numberOfTiles--;
  }
  //doubtful about numberOfBombs variable
  getNumberOfNeighborBombs (rowIndex, columnIndex) {
    const neighborOffsets = [[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1]]
    const numberOfRows = this._bombBoard.length;
    const numberOfColumns = this._bombBoard[0].length;
    let numberOfBombs = 0;
    neighborOffsets.forEach(offset => {
      const neighborRowIndex = rowIndex + offset[0]
      const neighborColumnIndex = columnIndex + offset[1]
      if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns){
        if (this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B'){
          numberOfBombs++;
        };
      };
    });
    return numberOfBombs;
  }

  hasSafeTiles() {
    return (this._numberOfTiles !== this._numberOfBombs);
  }

  //Doubtful about this part
  print() {
    console.log(this._playerBoard.map(row => row.join(' | ')).join('\n'));
  }

  static generatePlayerBoard (numberOfRows, numberOfColumns) {
    let board = []
    for (let i = 0; i < numberOfRows; i++){
      board.push([]);
      for (let j = 0; j < numberOfColumns; j++) {
        board[i].push(' ');
      };
    };
    return board;
  }

  static generateBombBoard (numberOfRows, numberOfColumns, numberOfBombs) {
    let board = []
    for (let i = 0; i < numberOfRows; i++){
      board.push([]);
      for (let j = 0; j < numberOfColumns; j++) {
        board[i].push(null);
      };
    };
    let numberOfBombsPlaces = 0;
    let randomRow = 0;
    let randomColumn = 0;

    while (numberOfBombsPlaces < numberOfBombs){
      randomRow = Math.floor(Math.random()*numberOfRows);
      randomColumn = Math.floor(Math.random()*numberOfColumns);
      if (board[randomRow][randomColumn] == null) {
        board[randomRow][randomColumn] = 'B';
        numberOfBombsPlaces++;
      };
    };
    return board;
  }

};*/

/*const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = []
  for (let i = 0; i < numberOfRows; i++){
    board.push([]);
    for (let j = 0; j < numberOfColumns; j++) {
      board[i].push(' ');
    };
  };
  return board;
};*/

/*const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = []
  for (let i = 0; i < numberOfRows; i++){
    board.push([]);
    for (let j = 0; j < numberOfColumns; j++) {
      board[i].push(null);
    };
  };
  let numberOfBombsPlaces = 0;
  let randomRow = 0;
  let randomColumn = 0;

  while (numberOfBombsPlaces < numberOfBombs){
    randomRow = Math.floor(Math.random()*numberOfRows);
    randomColumn = Math.floor(Math.random()*numberOfColumns);
    if (board[randomRow][randomColumn] == null) {
      board[randomRow][randomColumn] = 'B';
      numberOfBombsPlaces++;
    };
  };
  return board;
};*/

/*const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
  const neighborOffsets = [[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1]]
  const numberOfRows = bombBoard.length;
  const numberOfColumns = bombBoard[0].length;
  let numberOfBombs = 0;
  neighborOffsets.forEach(offset => {
    const neighborRowIndex = rowIndex + offset[0]
    const neighborColumnIndex = columnIndex + offset[1]
    if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns){
      if (bombBoard[neighborRowIndex][neighborColumnIndex] === 'B'){
        numberOfBombs++;
      };
    };
  });
  return numberOfBombs;
};*/

/*const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
  if (playerBoard[rowIndex][columnIndex] !== ' ') {
    console.log('Tile has been flipped!');
    return;
  } else if (bombBoard[rowIndex][columnIndex]) {
    playerBoard[rowIndex][columnIndex] = 'B'
  } else {
    playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
  };
};*/

/*print(board) {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};*/

/*
let playerBoard = generatePlayerBoard(3,3);
let bombBoard = generateBombBoard(3,3,3);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);

flipTile(playerBoard, bombBoard, 0, 0);
console.log('Updated Player Board:');

printBoard(playerBoard);*/

//const g = new Game(3, 3, 3);
//g.playMove(1, 1);
