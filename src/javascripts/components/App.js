import React, { Component } from 'react'
import { connect } from 'react-redux'

import logo from '../../assets/logo.svg'
import '../../stylesheets/components/App.css'

// import { fetchUser } from '../actions/userActions'

connect((store) => {
  return {
    user: store.user,
  }
})

class App extends Component {
  render() {
    // const { user } = this.props

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
