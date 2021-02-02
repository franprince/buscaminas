import getNeighbours from '../getNeighbours'

it('Verifica que se asignen correctamente las posiciones', () => {
  expect(
    getNeighbours(
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
          {
            isBomb: true,
            clicked: false,
            id: {y: 0, x: 0},
            flagged: false,
            value: 1,
            neighbours: [],
          },
        ],
      ],
      2,
      1,
    ),
  ).toHaveLength(8)
})
