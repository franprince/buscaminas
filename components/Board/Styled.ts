import styled from '@emotion/styled'

type Props = {
  boardWidth: number
  boardHeight: number
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Wrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`
const Titulo = styled.h1`
  color: red;
  text-align: center;
`
const BoardLayout = styled.div<Props>`
  display: grid;
  grid-template:
    repeat(${props => props.boardHeight}, 3rem) /
    repeat(${props => props.boardWidth}, 3rem);
  border-right: 1px solid #dfdfdf;
  border-bottom: 1px solid #dfdfdf;
`

export {Container, BoardLayout, Titulo, Wrapper}
