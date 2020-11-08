import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container id='footer'>
        <Row>
          <Col>
            Creado Por{' '}
            <a href='https://twitter.com/UGuareschi'>Ulises Guareschi</a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
