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
    setBoard(boardWithMines)
  }, [boardWidth, boardHeight])

  return (
    <Container>
      <Titulo>Buscaminas</Titulo>
      <Wrapper>
        <BoardLayout boardHeight={boardHeight} boardWidth={boardWidth}>
          {board.map((table, y) => {
            return table.map(
              (
                square: {isBomb: boolean; clicked: boolean; id: string},
                x: number,
              ) => {
                const neighbours = getNeighbours(board, x, y)

                return (
                  <Square
                    x={x}
                    y={y}
                    id={`${x},${y}`}
                    isBomb={square.isBomb}
                    neighbours={neighbours}
                    value={checkNeighbours(board, neighbours)}
                    key={`${x},${y}`}
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
