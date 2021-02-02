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
  isBomb: boolean
}

const SquareContainer = styled.div<StyledProps>`
  font-family: 'Mukta', sans-serif;
  border-radius: 10px;
  display: flex;
  font-size: 12px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background: ${props =>
    props.clicked
      ? props.isBomb
        ? '#F05153'
        : '#2a5dab'
      : 'radial-gradient(rgb(156,218,240),rgb(127,234,254)50%)'};
  color: ${props =>
    props.value === 1
      ? '#ffffff'
      : props.value === 2
      ? '#64B8E5'
      : props.value === 3
      ? '#ADBAA8'
      : props.value === 4
      ? '#8F9183'
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
      isBomb={isBomb}
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
