import React, { Component } from 'react'
import RecipesContainer from './recipes/RecipesContainer'
import './App.sass'

class App extends Component {
  render() {
    return (
      <div>
        <RecipesContainer />
      </div>
    )
  }
}

export default App
