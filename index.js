// You may choose to add new functions and additional modules
const boardState = {
  // complete this enum with all the possible states of a noughts and crosses board (there's more than 3)
  UNFINISHED: "UNFINISHED",
  CROSSES_WIN: "CROSSES_WIN",
  NOUGHTS_WIN: "NOUGHTS_WIN",
  DRAW: "DRAW",
};

const winningIndexes = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];

const getIndexes = (board, character) => {
  let indexes = [];
  for (let i = 0; i < board.length; i++) {
    if (board[i] === character) {
      indexes.push(i);
    }
  }
  return indexes;
};

const checkWin = (indexes) => {
  let result = false;
  for (let i = 0; i < winningIndexes.length; i++) {
    result = winningIndexes[i].every((item) => indexes.includes(item));
    if (result) {
      return result;
    }
  }
  return result;
};

function getStateOfBoard(board) {
  // complete this method so that it returns the correct board state
  const crossIndexes = getIndexes(board, "X");
  const noughtsIndexes = getIndexes(board, "O");

  const crossesResult = checkWin(crossIndexes);
  const noughtsResult = checkWin(noughtsIndexes);

  if (crossesResult) {
    return boardState.CROSSES_WIN;
  }

  if (noughtsResult) {
    return boardState.NOUGHTS_WIN;
  }

  if (!crossesResult && !noughtsResult && crossIndexes.length === 5) {
    return boardState.DRAW;
  }

  // If there's no winner & game isn't a draw then it's unfinished
  return boardState.UNFINISHED;
}

// leave this part unchanged
const args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
  console.log(getStateOfBoard(args[i]));
}
