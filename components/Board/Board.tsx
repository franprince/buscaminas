import React, {useEffect, useState} from 'react'
import getNeighbours from '../../utils/getNeighbours'
import checkNeighbours from '../../utils/checkNeighbours'
import createNewBoard from '../../utils/createNewBoard'
import placeBombs from '../../utils/placeBombs'
import Square from '../Square'
import {BoardLayout, Container, Titulo, Wrapper} from './Styled'

type Props = {
  boardWidth: number
  boardHeight: number
}

const Board: React.FunctionComponent<Props> = ({
  boardHeight,
  boardWidth,
}: Props) => {
  const [board, setBoard] = useState([])
  useEffect(() => {
    const boardSize = boardWidth * boardHeight
    const ammountOfMines = Math.round(boardSize / 6)
    const newBoard = createNewBoard(boardWidth, boardHeight)
    const boardWithMines = placeBombs(
      newBoard,
      ammountOfMines,
      boardHeight,
      boardWidth,
    )

    boardWithMines.map((column, y) => {
      column.map((item, x) => {
        const neighbours = getNeighbours(boardWithMines, y, x)
        const value = checkNeighbours(boardWithMines, neighbours)
        boardWithMines[x][y].neighbours = neighbours
        boardWithMines[x][y].value = value
      })
    })
    setBoard(boardWithMines)
  }, [boardWidth, boardHeight])
  const handleClick = (
    isBomb: boolean,
    clicked: boolean,
    y: number,
    x: number,
    value: number,
    neighbours: {y: number; x: number}[],
  ) => {
    const updatedBoard = board
    if (clicked) {
      return
    } else if (isBomb) {
      alert('Perdistesssss')
      updatedBoard[y][x].clicked = true
      setBoard([...updatedBoard])
    } else if (value === 0) {
      updatedBoard[y][x].clicked = true
      neighbours.map(coordinates => {
        const {y, x} = coordinates
        updatedBoard[y][x].clicked = true
      })
      setBoard([...updatedBoard])
    } else {
      board[y][x].clicked = true
      setBoard([...updatedBoard])
    }
  }
  return (
    <Container>
      <Titulo>Buscaminas</Titulo>
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
                    neighbours={square.neighbours}
                    handleClick={handleClick}
                    value={square.value}
                    key={`${y},${x}`}
                  />
                )
              },
            )
          })}
        </BoardLayout>
      </Wrapper>
    </Container>
  )
}

export default Board
