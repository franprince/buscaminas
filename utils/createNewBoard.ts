const createNewBoard = (
  boardWidth: number,
  boardHeight: number,
): {
  isBomb: boolean
  clicked: boolean
  id: string
  flagged: boolean
}[][] => {
  const board = Array.from({length: boardHeight}, () => {
    return new Array(boardWidth).fill(0).map(() => ({
      isBomb: false,
      clicked: false,
      id: '1',
      flagged: false,
    }))
  })

  return board
  // Se mapea el primer array y se pushea un segundo array con un valor temporal
}

export default createNewBoard
