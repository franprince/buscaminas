import {tileObject} from './createNewBoard'

const revealTiles = (
  board: tileObject[][],
  y: number,
  x: number,
  handleGameStatus: (status: string) => void,
  isBlocked: boolean,
): tileObject[][] => {
  const newBoard = board
  const currentSquare = newBoard[y][x]
  if (currentSquare.clicked || isBlocked) {
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
        isBlocked,
      )
    })
  }
  return newBoard
}
export default revealTiles
