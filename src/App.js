import React, { Component } from 'react'
import Loading from './components/Loading'
import LoadError from './components/LoadError'
import Navigation from './components/Navigation'
import './App.sass'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Loading />
        { this.props.children }
        <LoadError />
      </div>
    )
  }
}

export default App
