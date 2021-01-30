import placeBombs from './placeBombs'

it('Verifica que se inserten las minas en el tablero', () => {
  const board = [
    [
      {
        isBomb: false,
        clicked: false,
        id: '',
        flagged: false,
      },
      {
        isBomb: false,
        clicked: false,
        id: '',
        flagged: false,
      },
      {
        isBomb: false,
        clicked: false,
        id: '',
        flagged: false,
      },
    ],
    [
      {
        isBomb: false,
        clicked: false,
        id: '',
        flagged: false,
      },
      {
        isBomb: false,
        clicked: false,
        id: '',
        flagged: false,
      },
      {
        isBomb: false,
        clicked: false,
        id: '',
        flagged: false,
      },
    ],
    [
      {
        isBomb: false,
        clicked: false,
        id: '',
        flagged: false,
      },
      {
        isBomb: false,
        clicked: false,
        id: '',
        flagged: false,
      },
      {
        isBomb: false,
        clicked: false,
        id: '',
        flagged: false,
      },
    ],
  ]
  const boardHeight = 3
  const boardWidth = 3
  const expectedMines = 4
  const newBoard = placeBombs(board, expectedMines, boardWidth, boardHeight)
  const minesArray = newBoard.map(row => {
    return row.filter(item => {
      return item.isBomb === true
    }).length
  })
  const actualMines = minesArray.reduce(
    (accumulator, current) => accumulator + current,
  )
  expect(expectedMines).toEqual(actualMines)
})
