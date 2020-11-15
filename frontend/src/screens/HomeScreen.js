import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
const HomeScreen = () => {
  return (
    <>
      <Container fluid='md' id='page-container content-wrap'>
        <Row className='text-center mt-3'>
          <Col>
            <h1>Pizza for Dummies</h1>
            <h3>La mejor pizza de la manera mas sencilla.</h3>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <LinkContainer to='/receta'>
              <Button variant='warning' size='lg' block>
                <Col className='mb-3'>
                  <i class='fas fa-pizza-slice fa-3x'></i>
                </Col>
                <Col>
                  <h5 style={{ color: 'white' }}>Receta paso a paso</h5>
                </Col>
              </Button>
            </LinkContainer>
          </Col>
          <Col md={12}>
            <LinkContainer to='/calculadora'>
              <Button variant='warning' size='lg' block>
                <Col className='mb-3'>
                  <i class='fas fa-calculator fa-3x'></i>
                </Col>
                <Col>
                  <h5 style={{ color: 'white' }}>
                    Calcula los ingredientes de la masa segun la cantidad de
                    pizzas
                  </h5>
                </Col>
              </Button>
            </LinkContainer>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HomeScreen
