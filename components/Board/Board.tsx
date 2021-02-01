import React, {SyntheticEvent, useEffect, useState} from 'react'
import getNeighbours from '../../utils/getNeighbours'
import checkNeighbours from '../../utils/checkNeighbours'
import createNewBoard from '../../utils/createNewBoard'
import placeBombs from '../../utils/placeBombs'
import Square from '../Square'
import {BoardLayout, Container, Title, Wrapper, GameStatus} from './Styled'
import revealTiles from '../../utils/revealTiles'

type Props = {
  boardHeight: number
  boardWidth: number
}

const Board: React.FunctionComponent<Props> = ({
  boardHeight,
  boardWidth,
}: Props) => {
  const [board, setBoard] = useState([[]]) // Declara el estado del tablero con un array vacío
  const [gameStatus, setGameStatus] = useState({
    blockedBoard: false,
    defeat: false,
    victory: false,
  }) // Declara el estado inicial del juego
  useEffect(() => {
    const boardSize = boardWidth * boardHeight //  Calcula la cantidad total de cuadritos en el tablero
    const ammountOfMines = Math.round(boardSize / 6) //  Calcula la cantidad de minas que va a tener el tablero según su tamaño
    const newBoard = createNewBoard(boardWidth, boardHeight) //  Genera todas las posiciones del tablero
    const boardWithMines = placeBombs(
      newBoard,
      ammountOfMines,
      boardHeight,
      boardWidth,
    ) //  Agrega minas al tablero
    boardWithMines.map((column, y) => {
      //  Mapea cada uno de los cuadritos
      column.map((item, x) => {
        const neighbours = getNeighbours(boardWithMines, y, x) //  Obtiene las coordenadas de todos los vecinos
        const value = checkNeighbours(boardWithMines, neighbours) //  Obtiene el número de minas alrededor
        boardWithMines[y][x].neighbours = neighbours //  Agrega el array con las coordenadas de los vecinos al cuadrito
        boardWithMines[y][x].value = value //  Agrega el valor con la cantidad de minas alrededor al cuadrito
      })
    })
    setGameStatus({blockedBoard: false, defeat: false, victory: false}) //  Mepa que esto no tendría que ir acá. Hacer función para reiniciar
    setBoard([...boardWithMines]) //  Guarda toda la información agregada al tablero en el estado
  }, [boardWidth, boardHeight]) //  Todo esto sólo se ejecuta cuando cambia el alto o el ancho del tablero
  const handleGameStatus = (status: string): void => {
    //  Cambia el estado del juego a victoria o derrota, si no conoce el estado que se le pasa, tira un error
    if (status === 'victory') {
      setGameStatus({...gameStatus, victory: true, blockedBoard: true})
    } else if (status === 'defeat') {
      setGameStatus({...gameStatus, defeat: true, blockedBoard: true})
    } else {
      throw new Error('No se reconoce el estado.')
    }
  }
  const handleClick = (y: number, x: number): void => {
    //
    const updatedBoard = revealTiles(
      board,
      y,
      x,
      handleGameStatus,
      gameStatus.blockedBoard,
    )
    setBoard([...updatedBoard])
  }
  const handleRightClick = (e: SyntheticEvent, y: number, x: number): void => {
    e.preventDefault()
    const updatedBoard = board
    const currentTile = updatedBoard[y][x]
    if (!currentTile.clicked) {
      currentTile.flagged = !currentTile.flagged
      setBoard([...updatedBoard])
    } else {
      return
    }
    console.log('🚩' + y, x)
  }

  return (
    <Container>
      <Title>Buscaminas</Title>

      <Wrapper>
        <BoardLayout boardHeight={boardHeight} boardWidth={boardWidth}>
          {board.map((table, y) => {
            return table.map(
              (
                square: {
                  isBomb: boolean
                  clicked: boolean
                  id: string
                  value: number
                  flagged: boolean
                  neighbours: {y: number; x: number}[]
                },
                x: number,
              ) => {
                return (
                  <Square
                    clicked={square.clicked}
                    x={x}
                    y={y}
                    isBomb={square.isBomb}
                    handleClick={handleClick}
                    handleRightClick={handleRightClick}
                    value={square.value}
                    key={`${y},${x}`}
                    flagged={square.flagged}
                  />
                )
              },
            )
          })}
        </BoardLayout>
      </Wrapper>
      {gameStatus.defeat && (
        <GameStatus>No deseaste ganar lo suficiente, perdistesssss.</GameStatus>
      )}
      {gameStatus.victory && <GameStatus>Ok, ganaste.</GameStatus>}
    </Container>
  )
}

export default Board
