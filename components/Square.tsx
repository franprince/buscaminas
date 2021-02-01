import React, {SyntheticEvent} from 'react'
import styled from '@emotion/styled'
import Explotion from '../hooks/useLottie'

type SquareProps = {
  isBomb: boolean
  value: number
  clicked: boolean
  flagged: boolean
  x: number
  y: number
  handleClick: (y: number, x: number) => void
  handleRightClick: (e: SyntheticEvent, y: number, x: number) => void
}

type StyledProps = {
  clicked: boolean
  value: number
}

const SquareContainer = styled.div<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #dfdfdf;
  border-left: 1px solid #dfdfdf;
  font-weight: bold;
  background-color: ${props => (props.clicked ? 'transparent' : 'grey')};
  color: ${props =>
    props.value === 1
      ? 'blue'
      : props.value === 2
      ? 'green'
      : props.value === 3
      ? 'red'
      : props.value === 4
      ? 'darkblue'
      : 'darkred'};
`

const Square: React.FunctionComponent<SquareProps> = ({
  isBomb,
  clicked,
  handleClick,
  handleRightClick,
  y,
  x,
  value,
  flagged,
}: SquareProps) => {
  return (
    <SquareContainer
      value={value}
      clicked={clicked}
      onClick={() => handleClick(y, x)}
      onContextMenu={e => handleRightClick(e, y, x)}
    >
      <div data-testid="cuadrito">
        {clicked ? isBomb ? <Explotion /> : value === 0 ? '' : value : ''}
        {flagged ? '🚩' : ''}
      </div>
    </SquareContainer>
  )
}

export default Square
