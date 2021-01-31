export interface squareObject {
  isBomb: boolean
  clicked: boolean
  value: number
  id: {y: number; x: number}
  flagged: boolean
  neighbours: {y: number; x: number}[]
}
const createNewBoard = (
  boardHeight: number,
  boardWidth: number,
): squareObject[][] => {
  const board = Array.from({length: boardHeight}, () => {
    return new Array(boardWidth).fill(0).map(() => ({
      isBomb: false,
      clicked: false,
      value: 0,
      id: {y: 0, x: 0},
      flagged: false,
      neighbours: [
        {
          y: 0,
          x: 0,
        },
      ],
    }))
  })

  return board
  // Se mapea el primer array y se pushea un segundo array con un valor temporal
}

export default createNewBoard
