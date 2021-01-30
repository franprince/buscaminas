// Refactorizar para que vuelva a buscar coordenadas si "isBomb" ya es true

const placeBombs = (
  board: {isBomb: boolean}[][],
  bombs: number,
  boardWidth: number,
  boardHeight: number,
): {isBomb: boolean}[][] => {
  const getNumber = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min)) + min
  const getRandomCoords = () => ({
    y: getNumber(0, boardHeight), // Genera un número random entre cero y el alto del tablero
    x: getNumber(0, boardWidth), // Genera un número random entre cero y el ancho del tablero
  })

  for (let index = 0; index < bombs; index++) {
    // Itera hasta llegar al número de bombas predeterminado
    const coordinates = getRandomCoords() // Genera coordenadas aleatorias (x , y)

    board[coordinates.y][coordinates.x].isBomb = true // Busca en el tablero según las coordenadas del objeto coordinates y le asigna true a isBomb
  }

  return board // Devuelve el array del tablero con las bombas
}

export default placeBombs
