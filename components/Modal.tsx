import React from 'react'
import {Button, ModalContainer} from './Board/Styled'

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
            <h2 style={{color: 'red'}}>
              F <br />
              Perdiste.
            </h2>
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
            <h2 style={{color: 'green'}}>Ganaste!</h2>
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
