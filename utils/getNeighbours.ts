//No funciona bien cuando el tablero no es cuadrado
const checkNeighbours = (board: [][], x: number, y: number): string[] => {
  const neighbours = [] // Declara el array vacío donde se van a pushear las coordenadas de los vecinos
  for (let yAxis = -1; yAxis <= 1; yAxis++) {
    if (board[y + yAxis] !== undefined) {
      for (let xAxis = -1; xAxis <= 1; xAxis++) {
        if (
          board[y + yAxis][x + xAxis] !== undefined &&
          `${y + yAxis},
            ${x + xAxis}` !==
            `${y},
            ${x}`
        ) {
          neighbours.push(`${yAxis + y},${xAxis + x}`)
        }
      }
    }
  }
  return neighbours
}
export default checkNeighbours
