import React, { FC, Children } from 'react'
import { Container, Row } from './styles'
import Block from './block'

const Grid: FC = () => {
  return (
    <Container ddata-cy="grid-container">
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-cy="grid-row-conteiner">
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <div data-cy="block">
                  <Block colIndex={colIndex} rowIndex={rowIndex} />
                </div>
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  )
}

export default Grid
