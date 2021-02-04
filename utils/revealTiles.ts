import {tileObject} from './createNewBoard'

const revealTiles = (
  board: tileObject[][],
  y: number,
  x: number,
  handleGameStatus: (status: string) => void,
  counter: {
    clickedTiles: number
    mines: number
    flags: number
    totalTiles: number
    flaggedTiles: number
  },
): tileObject[][] => {
  const newBoard = board
  const currentSquare = newBoard[y][x]
  if (currentSquare.clicked || currentSquare.flagged) {
    return
  } else if (currentSquare.isBomb) {
    newBoard[y][x].clicked = true
    handleGameStatus('defeat')
    return newBoard
  } else if (currentSquare.value !== 0) {
    newBoard[y][x].clicked = true
    return newBoard
  } else {
    newBoard[y][x].clicked = true
    currentSquare.neighbours.map(coordinates => {
      return revealTiles(
        newBoard,
        coordinates.y,
        coordinates.x,
        handleGameStatus,
        counter,
      )
    })
  }
  console.log(counter.totalTiles, counter.clickedTiles, counter.flaggedTiles)

  return newBoard
}
export default revealTiles
