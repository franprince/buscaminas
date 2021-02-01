import createNewBoard from './createNewBoard'
import revealAllTiles from './revealAllTiles'

it('Verifica que se inserten las minas en el tablero', () => {
  const boardHeight = 5
  const boardWidth = 5
  const newBoard = createNewBoard(boardHeight, boardWidth)
  const revealedBoard = revealAllTiles(newBoard)

  const clickedTiles = revealedBoard.map(row => {
    return row.filter(item => {
      return item.clicked === true
    }).length
  })
  const allTiles = clickedTiles.reduce(
    (accumulator, current) => accumulator + current,
  )
  expect(allTiles).toEqual(boardHeight * boardWidth)
})
