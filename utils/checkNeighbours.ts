const checkNeighbours = (board: boolean[][], neighbours: string[]): number => {
  const bombsAround = neighbours.filter(item => {
    const [y, x] = item.split(',')
    return board[y][x].isBomb === true
  }).length // Filtra el array y cuenta cuantas bombas hay.
  if (bombsAround === 0) {
    return 0 // Devuleve 0 si no hay bombas alrededor
  }
  return bombsAround // Devuelve la cantidad de bombas alrededor
}

export default checkNeighbours
