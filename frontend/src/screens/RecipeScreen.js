import React from 'react'
import { ListGroup, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const RecipeScreen = () => {
  return (
    <>
      <Container fluid='md' id='page-container content-wrap'>
        <Row className='mt-3'>
          <Col>
            <h3>Preparacion de la masa</h3>
            <p>
              <em>
                Usar <Link to='/calculadora'>calculadora de pizzas</Link> para
                modificar la cantidad en los ingredientes
              </em>
            </p>
          </Col>
        </Row>
        <ListGroup variant='flush' as='ol'>
          <ListGroup.Item as='li'>
            En un recipiente agregagamos el agua a temperatura ambiente,
            añadimos la sal y mezclamos hasta que se disuelva
          </ListGroup.Item>
          <ListGroup.Item as='li'>
            Es importante que la sal no contamine la levadura por lo tanto,
            ahora agregamos por lo menos el 10% de la cantidad total de harina
            que vamos a usar y mezclamos hasta que tengamos una consistencia
            simil a la de una mezcla de panqueques
          </ListGroup.Item>
          <ListGroup.Item as='li'>
            Agregamos la levadura fresca y disolvemos en la mezcla
          </ListGroup.Item>
          <ListGroup.Item as='li'>
            Ahora de a poco se va añadiendo la harina y vamos mezclando hasta
            que quede todo incorporado
          </ListGroup.Item>
          <ListGroup.Item as='li'>
            Una vez que vemos que tenemos una masa con todos los ingredientes
            incorporados es momento de sacar la masa del recipiente y empezar a
            amasar a mano en una superficie plana
          </ListGroup.Item>
          <ListGroup.Item as='li'>
            Amasamos hasta que tenemos una masa de una textura suave, pero
            resistente y lo hacemos una bola.
          </ListGroup.Item>
          <ListGroup.Item as='li'>
            Para testear que la masa esta lista tenemos diferentes metodos:
            <ul>
              <li>Apretar con el pulgar la masa y ver si vuelve.</li>
              <li>
                Colocar un termometro en el centro de la masa y ver si la
                temperatura esta entre 23 y 26 grados celcius.
              </li>
              <li>
                Otro metodo es el famoso windowpane o el test de la ventana, que
                consiste en tomar un pequeño pedazo de la masa y estirarlo hasta
                que se forme una membrana translúcida, si se rompe antes la masa
                significa que falta amasado
              </li>
            </ul>
          </ListGroup.Item>
          <ListGroup.Item as='li'>
            Cuando esta la masa lista la cubrimos con un paño humedo asi
            mantenemos la masa húmeda durante 2 horas
          </ListGroup.Item>
          <ListGroup.Item as='li'>
            Despues de dejarla reposar 2 horas, ahora llegamos al punto donde
            tenemos que dividir la masa en porciones de 250 gramos
          </ListGroup.Item>
          <ListGroup.Item>
            Una vez que tengamos nuestras porciones de masa divididas vamos a
            dejarlas fermentar en frío por lo menos 24 horas, para esto vamos a
            dejarla en la heladera. Es importante que esten tapadas para que la
            masa no se seque y siga húmeda
          </ListGroup.Item>
          <ListGroup.Item as='li'>
            Finalmente vamos a retirar las porciones de nuestra heladera y las
            vamos a dejar 2 a 4 horas a temperatura ambiente
          </ListGroup.Item>
          <ListGroup.Item>
            Y ahora ya tendriamos lista las porciones de masa listas para ser
            estiradas
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </>
  )
}

export default RecipeScreen
