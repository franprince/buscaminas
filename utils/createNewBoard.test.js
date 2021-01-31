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
        id: {y: 0, x: 0},
        flagged: false,
        value: 0,
        neighbours: [
          {
            y: 0,
            x: 0,
          },
        ],
      },
      {
        isBomb: false,
        clicked: false,
        id: {y: 0, x: 0},
        flagged: false,
        value: 0,
        neighbours: [
          {
            y: 0,
            x: 0,
          },
        ],
      },
      {
        isBomb: false,
        clicked: false,
        id: {y: 0, x: 0},
        flagged: false,
        value: 0,
        neighbours: [
          {
            y: 0,
            x: 0,
          },
        ],
      },
      {
        isBomb: false,
        clicked: false,
        id: {y: 0, x: 0},
        flagged: false,
        value: 0,
        neighbours: [
          {
            y: 0,
            x: 0,
          },
        ],
      },
      {
        isBomb: false,
        clicked: false,
        id: {y: 0, x: 0},
        flagged: false,
        value: 0,
        neighbours: [
          {
            y: 0,
            x: 0,
          },
        ],
      },
    ])
  })
})
