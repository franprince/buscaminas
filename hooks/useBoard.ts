import React, {useState, useEffect, SyntheticEvent} from 'react'
import revealTiles from '../utils/revealTiles'
import {countClicked} from '../utils/counters'
import useTimer from './useTimer'
import getNeighbours from '../utils/getNeighbours'
import checkNeighbours from '../utils/checkNeighbours'
import createNewBoard, {tileObject} from '../utils/createNewBoard'
import placeBombs from '../utils/placeBombs'
import checkVictory from '../utils/checkVictory'

type useBoardType = {
  board: tileObject[][]
  setCustomBoardSize: React.Dispatch<{
    boardHeight: number
    boardWidth: number
    mines: number
  }>
  gameStatus: {blockedBoard: boolean; defeat: boolean; victory: boolean}
  handleClick: (y: number, x: number) => void
  handleRightClick: (e: SyntheticEvent, y: number, x: number) => void
  initializeGame: () => void
  time: number
  counter: {
    clickedTiles: number
    mines: number
    flags: number
    totalTiles: number
    flaggedTiles: number
  }
}
const useBoard = (): useBoardType => {
  const [customBoardSize, setCustomBoardSize] = useState({
    boardHeight: 0,
    boardWidth: 0,
    mines: 0,
  })
  const [board, setBoard] = useState([[]]) // Declara el estado del tablero con un array vacío
  const [gameStatus, setGameStatus] = useState({
    blockedBoard: false,
    defeat: false,
    victory: false,
  }) // Declara el estado inicial del juego
  const {boardHeight, boardWidth, mines} = customBoardSize
  const {time, handleReset, isActive, handleStart, handleStop} = useTimer()
  useEffect(() => {
    initializeGame()
  }, [boardWidth, boardHeight]) //  Todo esto sólo se ejecuta cuando cambia el alto o el ancho del tablero

  const [counter, setCounter] = useState({
    clickedTiles: 0,
    mines: 0,
    flags: 0,
    totalTiles: 0,
    flaggedTiles: 0,
  })

  useEffect(() => {
    checkVictory(
      board,
      counter.totalTiles,
      counter.clickedTiles,
      counter.mines,
      handleGameStatus,
    )
  }, [counter.clickedTiles])
  const handleGameStatus = (status: string): void => {
    //  Cambia el estado del juego a victoria o derrota, si no conoce el estado que se le pasa, tira un error
    if (status === 'victory') {
      handleStop()
      setGameStatus({...gameStatus, victory: true, blockedBoard: true})
    } else if (status === 'defeat') {
      handleStop()
      setGameStatus({...gameStatus, defeat: true, blockedBoard: true})
    } else {
      throw new Error('No se reconoce el estado.')
    }
  }

  const handleClick = (y: number, x: number): void => {
    //
    if (!gameStatus.blockedBoard && !board[y][x].clicked) {
      const updatedBoard = revealTiles(board, y, x, handleGameStatus, counter)
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
        if (currentTile.flagged) {
          currentTile.flagged = false
          setCounter({...counter, flaggedTiles: counter.flaggedTiles - 1})
        } else {
          if (counter.flaggedTiles === counter.flags) {
            return
          }
          currentTile.flagged = true
          setCounter({...counter, flaggedTiles: counter.flaggedTiles + 1})
          checkVictory(
            board,
            counter.totalTiles,
            counter.clickedTiles,
            counter.mines,
            handleGameStatus,
          )
        }
        setBoard([...updatedBoard])
      }
    } else {
      return
    }
  }
  const initializeGame = () => {
    const boardSize = boardWidth * boardHeight //  Calcula la cantidad total de cuadritos en el tablero
    const ammountOfMines = mines //  Calcula la cantidad de minas que va a tener el tablero según su tamaño y la dificultad del juego
    const ammountOfFlags = ammountOfMines //  La cantidad de banderitas es siempre igual a la cantidad de bombas
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
    if (isActive) {
      handleStart()
    } else {
      handleReset()
      handleStart()
    }
    setCounter({
      ...counter,
      clickedTiles: 0,
      mines: ammountOfMines,
      flags: ammountOfFlags,
      totalTiles: boardSize,
      flaggedTiles: 0,
    })
    setGameStatus({blockedBoard: false, defeat: false, victory: false}) //  Mepa que esto no tendría que ir acá. Hacer función para reiniciar
    setBoard([...boardWithMines]) //  Guarda toda la información agregada al tablero en el estado
  }
  return {
    board,
    setCustomBoardSize,
    gameStatus,
    handleClick,
    handleRightClick,
    time,
    counter,
    initializeGame,
  }
}

export default useBoard
