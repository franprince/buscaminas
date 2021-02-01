//setupTests.js
import 'jest-canvas-mock'
import React from 'react'
import {render} from '@testing-library/react'
import Board from '../components/Board/Board'

it("Verifica que se creen todos los 'Cuadraditos'", () => {
  const x = 5
  const y = 5
  const {queryAllByTestId} = render(<Board boardHeight={x} boardWidth={y} />)

  expect(queryAllByTestId(/cuadrito/i)).toHaveLength(x * y)
})
