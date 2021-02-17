import React from 'react'
import {Button, ModalContainer} from './Board/Styled'

type Props = {
  status: string
  handleRestartGame: () => void
}

const Modal: React.FC<Props> = ({status, handleRestartGame}: Props) => {
  return (
    status !== null && (
      <ModalContainer>
        <>
          {status === 'defeat' && (
            <h2 style={{color: 'red'}}>
              F <br />
              Perdiste.
            </h2>
          )}
          {status === 'victory' && <h2 style={{color: 'green'}}>Ganaste!</h2>}

          <div style={{display: 'flex'}}>
            <Button onClick={() => handleRestartGame()} color={'green'}>
              Jugar de nuevo
            </Button>
            <Button onClick={() => handleRestartGame()} color={'red'}>
              Jugar de nuevo pero en rojo
            </Button>
          </div>
        </>
      </ModalContainer>
    )
  )
}
export default Modal
