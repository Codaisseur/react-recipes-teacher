import React, { Component } from 'react'
import Loading from './components/Loading'
import LoadError from './components/LoadError'
import './App.sass'

class App extends Component {
  render() {
    return (
      <div>
        <Loading />
        { this.props.children }
        <LoadError />
      </div>
    )
  }
}

export default App
