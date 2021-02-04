import {tileObject} from './createNewBoard'

const countFlags = (board: tileObject[][]): number => {
  const flaggedTiles = board.map(row => {
    return row.filter(item => {
      return item.flagged === true
    }).length
  })
  const counterFlaggedTiles = flaggedTiles.reduce(
    (accumulator, current) => accumulator + current,
  )
  return counterFlaggedTiles
}

const countClicked = (board: tileObject[][]): number => {
  const clickedTiles = board.map(row => {
    return row.filter(item => {
      return item.clicked === true
    }).length
  })
  const countTiles = clickedTiles.reduce(
    (accumulator, current) => accumulator + current,
  )
  return countTiles
}

export {countFlags, countClicked}
