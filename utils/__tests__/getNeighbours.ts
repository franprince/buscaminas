import getNeighbours from '../getNeighbours'

it('Verifica que se asignen correctamente las posiciones', () => {
  expect(
    getNeighbours(
      [
        [false, true, false, true],
        [true, true, false, true],
        [false, false, false, true],
        [false, false, false, true],
      ],
      2,
      1,
    ),
  ).toHaveLength(8)
})
