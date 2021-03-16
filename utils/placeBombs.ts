import {tileObject} from './createNewBoard'

const placeBombs = (
  board: tileObject[][],
  bombs: number,
  boardWidth: number,
  boardHeight: number,
  firstClickCoordinates: {y: number; x: number},
): tileObject[][] => {
  const getNumber = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min)) + min
  const getRandomCoords = () => ({
    y: getNumber(0, boardHeight), // Genera un número random entre cero y el alto del tablero
    x: getNumber(0, boardWidth), // Genera un número random entre cero y el ancho del tablero
  })

  for (let index = 0; index < bombs; index++) {
    // Itera hasta llegar al número de bombas predeterminado

    const getcoordinates = () => {
      let pos = getRandomCoords() // Genera coordenadas aleatorias (x , y)
      while (
        board[pos.y][pos.x].isBomb === true ||
        (pos.y === firstClickCoordinates.y && pos.x === firstClickCoordinates.x)
      ) {
        // Evita que se repitan las coordenadas
        pos = getRandomCoords()
      }
      return pos
    }
    const coordinates = getcoordinates()
    board[coordinates.y][coordinates.x].isBomb = true // Busca en el tablero según las coordenadas del objeto coordinates y le asigna true a isBomb
  }

  return board // Devuelve el array del tablero con las bombas
}

export default placeBombs
