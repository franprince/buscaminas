import React, {useState} from 'react'
import styled from '@emotion/styled'

type SquareProps = {
  x: number
  y: number
  isBomb: boolean
  value: number
  neighbours: string[]
  id: string
}

type StyledProps = {
  clicked: boolean
  isBomb: boolean
}

const SquareContainer = styled.div<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #dfdfdf;
  border-left: 1px solid #dfdfdf;
  color: ${props => (props.isBomb ? 'red' : '')};
`

const Square: React.FunctionComponent<SquareProps> = ({
  isBomb,
  value,
}: SquareProps) => {
  const [clicked, setClicked] = useState(false)

  const handleClick = (isBomb: boolean) => {
    if (clicked) {
      return
    } else {
      setClicked(true)
      if (isBomb) {
        alert('KABOOOOM!')
      }
    }
  }
  return (
    <SquareContainer
      isBomb={isBomb}
      clicked={clicked}
      onClick={() => handleClick(isBomb)}
      data-testid="cuadrito"
    >
      {isBomb ? '💣' : value === 0 ? '' : value}
    </SquareContainer>
  )
}

export default Square
