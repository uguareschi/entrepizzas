import React, { useState, useEffect } from 'react'
import {
  Container,
  InputGroup,
  FormControl,
  Row,
  Col,
  ListGroup,
} from 'react-bootstrap'

const App = () => {
  const [hidration, setHidration] = useState(65)
  const [pizzaWeight, setPizzaWeight] = useState(250)
  const [pizzaQty, setPizzaQty] = useState(1)
  const divisorValue = 1000 + (hidration / 100) * 1000 + 23
  const [flour, setFlour] = useState(
    (pizzaWeight * pizzaQty * 1000) / divisorValue
  )
  const [water, setWater] = useState(flour * (hidration / 100))
  const [salt, setSalt] = useState(flour * 0.02)
  const [yeast, setYeast] = useState(flour * 0.003)

  useEffect(() => {
    setFlour((pizzaWeight * pizzaQty * 1000) / divisorValue)
    setWater(flour * (hidration / 100))
    setSalt(flour * 0.02)
    setYeast(flour * 0.003)
  }, [flour, pizzaQty, pizzaWeight, hidration, divisorValue])

  return (
    <>
      <Container fluid='md'>
        <h1 className='text-center mt-3'>
          Calculadora para masa de pizza napolitana
        </h1>
        <Row className='justify-content-md-center'>
          <Col lg={4}>
            <InputGroup className='mb-2'>
              <InputGroup.Prepend>
                <InputGroup.Text>Numero de pizzas</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type='number'
                value={pizzaQty}
                onChange={(e) => setPizzaQty(e.target.value)}
              />
            </InputGroup>
          </Col>
          <Col lg={4}>
            <InputGroup className='mb-2'>
              <InputGroup.Prepend>
                <InputGroup.Text>(g) Peso por masa</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type='number'
                value={pizzaWeight}
                onChange={(e) => setPizzaWeight(e.target.value)}
              />
            </InputGroup>
          </Col>
          <Col lg={4}>
            <InputGroup className='mb-2'>
              <InputGroup.Prepend>
                <InputGroup.Text>(%) Porcentaje de hidratación</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type='number'
                value={hidration}
                onChange={(e) => setHidration(e.target.value)}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                Cantidad de harina: {Math.trunc(flour)}g
              </ListGroup.Item>
              <ListGroup.Item>
                Cantidad de agua: {Math.trunc(water)}ml
              </ListGroup.Item>
              <ListGroup.Item>
                Cantidad de sal: {salt.toFixed(2)}g
              </ListGroup.Item>
              <ListGroup.Item>
                Cantidad de levadura: {yeast.toFixed(2)}g
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
