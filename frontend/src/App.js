import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CalculatorScreen from './screens/CalculatorScreen'
import RecipeScreen from './screens/RecipeScreen'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <Route path='/' component={HomeScreen} exact />
      <Route path='/receta' component={RecipeScreen} />
      <Route path='/calculadora' component={CalculatorScreen} />
      <Footer />
    </Router>
  )
}

export default App
