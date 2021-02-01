import createNewBoard from './createNewBoard'
import placeBombs from './placeBombs'

it('Verifica que se inserten las minas en el tablero', () => {
  const boardHeight = 3
  const boardWidth = 3
  const expectedMines = 4
  const newBoard = createNewBoard(boardHeight, boardWidth)
  const boardWithMines = placeBombs(
    newBoard,
    expectedMines,
    boardHeight,
    boardWidth,
  )
  const minesArray = boardWithMines.map(row => {
    return row.filter(item => {
      return item.isBomb === true
    }).length
  })
  const actualMines = minesArray.reduce(
    (accumulator, current) => accumulator + current,
  )
  expect(expectedMines).toEqual(actualMines)
})
