import {tileObject} from './createNewBoard'

const checkVictory = (
  board: tileObject[][],
  totalTiles: number,
  clickedTiles: number,
  totalMines: number,
  handleGameStatus: (status: string) => void,
): void => {
  const countFlaggedMiles = board.map(row => {
    return row.filter(item => {
      return item.isBomb && item.flagged
    }).length
  })
  const flaggedMines = countFlaggedMiles.reduce(
    (accumulator, current) => accumulator + current,
  )

  if (flaggedMines === totalMines && clickedTiles === totalTiles - totalMines) {
    handleGameStatus('victory')
  }
}

export default checkVictory
