import React, {useEffect} from 'react'
import Square from '../Square'
import {
  BoardLayout,
  Container,
  Wrapper,
  InfoContainer,
  InfoSection,
} from './Styled'

import Modal from '../Modal'
import useBoard from '../../hooks/useBoard'
import Timer from '../Timer'

type Props = {
  boardHeight: number
  boardWidth: number
  mines: number
}

const Board: React.FunctionComponent<Props> = ({
  boardHeight,
  boardWidth,
  mines,
}: Props) => {
  const {
    board,
    setCustomBoardSize,
    gameStatus,
    handleClick,
    handleRightClick,
    time,
    initializeGame,
    counter,
  } = useBoard()
  useEffect(() => {
    setCustomBoardSize({boardHeight, boardWidth, mines})
  }, [])

  return (
    <Container>
      <Wrapper>
        <BoardLayout boardHeight={boardHeight} boardWidth={boardWidth}>
          {board.map((table, y) => {
            return table.map(
              (
                square: {
                  isBomb: boolean
                  clicked: boolean
                  id: {y: number; x: number}
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
            <span>⏱</span> <Timer count={time} />
          </InfoSection>
          <InfoSection>
            <span>💣</span> <p>{counter.mines}</p>
          </InfoSection>
          <InfoSection>
            <span>🚩</span> <p>{counter.flags - counter.flaggedTiles}</p>
          </InfoSection>
        </InfoContainer>
      </Wrapper>
      <Modal
        status={
          gameStatus.defeat ? 'defeat' : gameStatus.victory ? 'victory' : null
        }
        initializeGame={initializeGame}
      />
    </Container>
  )
}

export default Board
