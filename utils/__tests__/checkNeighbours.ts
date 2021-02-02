import checkNeighbours from '../checkNeighbours'

it('Verifica que se asignen correctamente las posiciones', () => {
  expect(
    checkNeighbours(
      [
        [
          {
            isBomb: false,
            clicked: false,
            id: {y: 0, x: 0},
            flagged: false,
            value: 1,
            neighbours: [],
          },
          {
            isBomb: true,
            clicked: false,
            id: {y: 0, x: 0},
            flagged: false,
            value: 1,
            neighbours: [],
          },
          {
            isBomb: true,
            clicked: false,
            id: {y: 0, x: 0},
            flagged: false,
            value: 1,
            neighbours: [],
          },
        ],
        [
          {
            isBomb: true,
            clicked: false,
            id: {y: 0, x: 0},
            flagged: false,
            value: 1,
            neighbours: [],
          },
          {
            isBomb: true,
            clicked: false,
            id: {y: 0, x: 0},
            flagged: false,
            value: 1,
            neighbours: [],
          },
          {
            isBomb: false,
            clicked: false,
            id: {y: 0, x: 0},
            flagged: false,
            value: 1,
            neighbours: [],
          },
        ],
        [
          {
            isBomb: false,
            clicked: false,
            id: {y: 0, x: 0},
            flagged: false,
            value: 1,
            neighbours: [],
          },
          {
            isBomb: false,
            clicked: false,
            id: {y: 0, x: 0},
            flagged: false,
            value: 1,
            neighbours: [],
          },
          {
            isBomb: false,
            clicked: false,
            id: {y: 0, x: 0},
            flagged: false,
            value: 1,
            neighbours: [],
          },
        ],
      ],
      [
        {y: 0, x: 1},
        {y: 1, x: 0},
        {y: 1, x: 1},
      ],
    ),
  ).toBe(3)
})
