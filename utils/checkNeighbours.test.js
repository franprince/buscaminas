import checkNeighbours from './checkNeighbours'

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
      ['0,1', '1,0', '1,1'],
    ),
  ).toBe(3)
})
