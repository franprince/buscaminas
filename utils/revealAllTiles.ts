import {tileObject} from './createNewBoard'

const revealAllTiles = (board: tileObject[][]): tileObject[][] => {
  const updatedBoard = board
  updatedBoard.map((column, y) => {
    column.map((item, x) => {
      board[y][x].clicked = true
    })
  })
  return updatedBoard
}
export default revealAllTiles
