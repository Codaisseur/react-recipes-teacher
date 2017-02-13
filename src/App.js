import React, { Component } from 'react'
import LoadError from './components/LoadError'
import RecipesContainer from './recipes/RecipesContainer'
import './App.sass'

class App extends Component {
  render() {
    return (
      <div>
        <RecipesContainer />
        <LoadError />
      </div>
    )
  }
}

export default App
