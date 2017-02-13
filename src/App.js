import React, { Component } from 'react'
import Loading from './components/Loading'
import LoadError from './components/LoadError'
import RecipesContainer from './recipes/RecipesContainer'
import './App.sass'

class App extends Component {
  render() {
    return (
      <div>
        <Loading />
        <RecipesContainer />
        <LoadError />
      </div>
    )
  }
}

export default App
