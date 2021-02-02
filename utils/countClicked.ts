import {tileObject} from './createNewBoard'

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

export default countClicked
