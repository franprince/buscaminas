import createNewBoard from './createNewBoard'

it('Verifica que se creen las filas', () => {
  expect(createNewBoard(5, 1)).toHaveLength(5)
})
it('Verifica que se creen las columnas, y se llenen con los valores correctos', () => {
  createNewBoard(5, 5).forEach(array => {
    expect(array).toEqual([
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
    ])
  })
})
