import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' expand='lg' collapseOnSelect variant='dark'>
        <Container className='header'>
          <LinkContainer to='/'>
            <Navbar.Brand>Pizza for dummies</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/receta'>
                <Nav.Link>
                  <i class='fas fa-pizza-slice'></i> Receta
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/calculadora'>
                <Nav.Link>
                  <i class='fas fa-calculator'></i> Calculadora de pizzas
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
