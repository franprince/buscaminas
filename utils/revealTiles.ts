import {tileObject} from './createNewBoard'

const revealTiles = (
  board: tileObject[][],
  y: number,
  x: number,
): tileObject[][] => {
  const newBoard = board
  const currentSquare = newBoard[y][x]
  if (currentSquare.clicked) {
    return
  } else if (currentSquare.isBomb) {
    newBoard[y][x].clicked = true
    alert('Perdistesssss')
    return newBoard
  } else if (currentSquare.value !== 0) {
    newBoard[y][x].clicked = true
    return newBoard
  } else {
    newBoard[y][x].clicked = true
    currentSquare.neighbours.map(coordinates => {
      return revealTiles(newBoard, coordinates.y, coordinates.x)
    })
  }
  return newBoard
}
export default revealTiles
