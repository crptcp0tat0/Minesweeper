export class Board {
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

}
