import checkNeighbours from '../checkNeighbours'

it('Verifica que se asignen correctamente las posiciones', () => {
  expect(
    checkNeighbours(
      [
        [
          {
            isBomb: false,
            clicked: false,
            id: '',
            flagged: false,
          },
          {
            isBomb: true,
            clicked: false,
            id: '',
            flagged: false,
          },
          {
            isBomb: true,
            clicked: false,
            id: '',
            flagged: false,
          },
        ],
        [
          {
            isBomb: true,
            clicked: false,
            id: '',
            flagged: false,
          },
          {
            isBomb: true,
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
      ],
      [
        {y: 0, x: 1},
        {y: 1, x: 0},
        {y: 1, x: 1},
      ],
    ),
  ).toBe(3)
})
