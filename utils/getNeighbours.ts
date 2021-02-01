//No funciona bien cuando el tablero no es cuadrado

import {tileObject} from './createNewBoard'

const getNeighbours = (
  board: tileObject[][],
  y: number,
  x: number,
): {y: number; x: number}[] => {
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
          neighbours.push({y: yAxis + y, x: xAxis + x})
        }
      }
    }
  }

  return neighbours
}
export default getNeighbours
