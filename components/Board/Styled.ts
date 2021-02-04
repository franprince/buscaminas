import styled from '@emotion/styled'

type Props = {
  boardWidth: number
  boardHeight: number
}
type ButtonProps = {
  color: string
}
const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`
const Wrapper = styled.div`
  align-self: center;
  grid-column: 2;
  display: flex;
  align-content: center;
  justify-content: center;
  @media screen and (max-width: 640px) {
    display: flex;
    flex-direction: column;
  }
`
const Title = styled.h1`
  color: #ffffff;
  text-align: center;
`
const GameStatus = styled.h2`
  color: red;
  text-align: center;
`
const BoardLayout = styled.div<Props>`
  align-self: center;
  justify-self: center;
  display: grid;
  grid-gap: 0.2rem;
  grid-template:
    repeat(${props => props.boardHeight}, 2rem) /
    repeat(${props => props.boardWidth}, 2rem);
  background-color: #1b2755;
`
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0.8rem;
  @media screen and (max-width: 640px) {
    flex-direction: row;
    width: 100%;
    padding: 1rem 0;
  }
`
const InfoSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  justify-content: center;
  font-family: 'Mukta', sans-serif;
  font-weight: 600;
  color: white;
  background-color: #2a5dab;
  width: 8rem;
  height: 3rem;
  border-radius: 12px;
  margin: 0.2rem;
  span {
    grid-column: 1;
    margin: 0;
    padding: 0;
    justify-content: center;
    text-align: center;
  }
  p {
    grid-column: 2;
    margin: 0;
    padding: 0;
  }
  @media screen and (max-width: 640px) {
    width: 33%;
  }
`
const ModalContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 15rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #1b2755ea;
  backdrop-filter: blur(1px);
  padding: 1.5em;
  border-radius: 25px;
  box-shadow: 0 0 30px #0000002a;
`
const Button = styled.button<ButtonProps>`
  padding: 0.3rem;
  margin: 0.3rem;
  border-radius: 8px;
  font-weight: 500;
  color: white;
  border: 0;
  background-color: ${props => props.color};
`

export {
  Container,
  BoardLayout,
  Title,
  GameStatus,
  Wrapper,
  InfoContainer,
  InfoSection,
  ModalContainer,
  Button,
}
