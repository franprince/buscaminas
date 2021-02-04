import React from 'react'
import {Button, GameStatus, ModalContainer} from './Board/Styled'

type Props = {
  status: string
  initializeGame: () => void
}

const Modal: React.FC<Props> = ({status, initializeGame}: Props) => {
  return (
    status !== null && (
      <ModalContainer>
        {status === 'defeat' && (
          <>
            <GameStatus>
              F <br />
              Perdiste.
            </GameStatus>
            <div style={{display: 'flex'}}>
              <Button onClick={() => initializeGame()} color={'green'}>
                Jugar de nuevo
              </Button>
              <Button onClick={() => initializeGame()} color={'red'}>
                Jugar de nuevo pero en rojo
              </Button>
            </div>
          </>
        )}
        {status === 'victory' && (
          <>
            <GameStatus>Ganaste!</GameStatus>
            <div style={{display: 'flex'}}>
              <Button onClick={() => initializeGame()} color={'green'}>
                Jugar de nuevo
              </Button>
              <Button onClick={() => initializeGame()} color={'red'}>
                Jugar de nuevo pero en rojo
              </Button>
            </div>
          </>
        )}
      </ModalContainer>
    )
  )
}
export default Modal
