import React, {SyntheticEvent, useEffect, useState} from 'react'
import getNeighbours from '../../utils/getNeighbours'
import checkNeighbours from '../../utils/checkNeighbours'
import createNewBoard from '../../utils/createNewBoard'
import placeBombs from '../../utils/placeBombs'
import Square from '../Square'
import {
  BoardLayout,
  Container,
  Wrapper,
  GameStatus,
  InfoContainer,
  InfoSection,
  Modal,
  Button,
} from './Styled'
import revealTiles from '../../utils/revealTiles'
import countClicked from '../../utils/countClicked'

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
  const [counter, setCounter] = useState({
    clickedTiles: 0,
    mines: 0,
    totalTiles: 0,
  })

  useEffect(() => {
    if (counter.clickedTiles === counter.totalTiles - counter.mines) {
      handleGameStatus('victory')
    }
  }, [board])

  useEffect(() => {
    initializeGame()
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
    if (!gameStatus.blockedBoard) {
      const updatedBoard = revealTiles(board, y, x, handleGameStatus)
      const clicked = countClicked(updatedBoard)
      setCounter({...counter, clickedTiles: clicked})
      setBoard([...updatedBoard])
    } else {
      return
    }
  }

  const handleRightClick = (e: SyntheticEvent, y: number, x: number): void => {
    //
    e.preventDefault()
    const updatedBoard = board
    const currentTile = updatedBoard[y][x]
    if (!currentTile.clicked) {
      if (gameStatus.blockedBoard) {
        return
      } else {
        currentTile.flagged = !currentTile.flagged
        setBoard([...updatedBoard])
      }
    } else {
      return
    }
  }
  const initializeGame = () => {
    const boardSize = boardWidth * boardHeight //  Calcula la cantidad total de cuadritos en el tablero
    const ammountOfMines = Math.round(boardSize / 10) //  Calcula la cantidad de minas que va a tener el tablero según su tamaño y la dificultad del juego
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
    setCounter({
      ...counter,
      clickedTiles: 0,
      mines: ammountOfMines,
      totalTiles: boardSize,
    })
    setGameStatus({blockedBoard: false, defeat: false, victory: false}) //  Mepa que esto no tendría que ir acá. Hacer función para reiniciar
    setBoard([...boardWithMines]) //  Guarda toda la información agregada al tablero en el estado
  }
  return (
    <Container>
      {/* <Title>Nombre: Elbus Apellido: Caminas</Title> */}

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
        <InfoContainer>
          <InfoSection>
            <span>⏱</span> <p>00:00</p>
          </InfoSection>
          <InfoSection>
            <span>💣</span> <p>10</p>
          </InfoSection>
          <InfoSection>
            <span>🚩</span> <p>10</p>
          </InfoSection>
        </InfoContainer>
      </Wrapper>
      {(gameStatus.defeat || gameStatus.victory) && (
        <Modal>
          {gameStatus.defeat && (
            <GameStatus>
              F <br />
              Perdiste.{' '}
            </GameStatus>
          )}
          {gameStatus.victory && <GameStatus>Ganaste.</GameStatus>}
          <div style={{display: 'flex'}}>
            <Button onClick={() => initializeGame()} color={'green'}>
              Jugar de nuevo
            </Button>
            <Button onClick={() => initializeGame()} color={'red'}>
              Jugar de nuevo pero en rojo
            </Button>
          </div>
        </Modal>
      )}
    </Container>
  )
}

export default Board
