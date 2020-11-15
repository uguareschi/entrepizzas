import React, { useState, useEffect } from 'react'
import {
  Container,
  InputGroup,
  FormControl,
  Row,
  Col,
  ListGroup,
  Modal,
  Button,
  Collapse,
} from 'react-bootstrap'

const CalculatorScreen = () => {
  // Change mode
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState('simple')

  // Modal
  const [show, setShow] = useState(false)
  const [modalType, setModalType] = useState('')
  // SetIngredients
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

    if (open === true) {
      setMode('avanzado')
    } else {
      setMode('simple')
    }
  }, [flour, pizzaQty, pizzaWeight, hidration, divisorValue, open])

  return (
    <>
      <Container fluid='md' id='page-container content-wrap'>
        <h1 className='text-center mt-3'>
          Calculadora para masa de pizza napolitana
        </h1>
        <Row>
          <Col>
            <Button
              variant={open === true ? 'dark' : 'light'}
              onClick={() => setOpen(!open)}
              aria-controls='collapse-ingredients'
              aria-expanded={open}
              className='mb-3 change-mode'
              block
            >
              <span className='bigger'>{mode}</span>
            </Button>
          </Col>
        </Row>
        <Row className='calc-ing'>
          <Col lg={12}>
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

          <Collapse in={open} id='collapse-ingredients'>
            <div className='collapse-div'>
              <Col lg={12}>
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
              <Col lg={12}>
                <InputGroup className='mb-2'>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      (%) Porcentaje de hidratación
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    type='number'
                    value={hidration}
                    onChange={(e) => setHidration(e.target.value)}
                  />
                </InputGroup>
              </Col>
            </div>
          </Collapse>
        </Row>
        <Row className='ingredients'>
          <Col>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                Cantidad de harina: {Math.trunc(flour)}g
                <i
                  className='fas fa-question-circle icon-right'
                  onClick={() => {
                    setShow(true)
                    setModalType('flour')
                  }}
                ></i>
              </ListGroup.Item>
              <ListGroup.Item>
                Cantidad de agua: {Math.trunc(water)}ml
                <i
                  className='fas fa-question-circle icon-right'
                  onClick={() => {
                    setShow(true)
                    setModalType('water')
                  }}
                ></i>
              </ListGroup.Item>
              <ListGroup.Item>
                Cantidad de sal: {salt.toFixed(2)}g
                <i
                  className='fas fa-question-circle icon-right'
                  onClick={() => {
                    setShow(true)
                    setModalType('salt')
                  }}
                ></i>
              </ListGroup.Item>
              <ListGroup.Item>
                Cantidad de levadura: {yeast.toFixed(2)}g
                <i
                  className='fas fa-question-circle icon-right'
                  onClick={() => {
                    setShow(true)
                    setModalType('yeast')
                  }}
                ></i>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            Cantidad de{' '}
            {modalType === 'flour'
              ? 'harina'
              : modalType === 'water'
              ? 'agua'
              : modalType === 'salt'
              ? 'sal'
              : modalType === 'yeast'
              ? 'levadura'
              : ''}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalType === 'flour' ? (
            <p>Contenido sobre harina</p>
          ) : modalType === 'water' ? (
            <p>Contenido sobre el agua</p>
          ) : modalType === 'salt' ? (
            <p>Contenido sobre la sal</p>
          ) : modalType === 'yeast' ? (
            <p>Contenido sobre la levadura</p>
          ) : (
            ''
          )}
        </Modal.Body>
      </Modal>
    </>
  )
}

export default CalculatorScreen
