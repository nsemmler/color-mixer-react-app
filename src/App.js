import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid bg-light text-dark border-bottom">
        <div className="container">
          <h1 className="display-4">Color Mixer React App</h1>
          <p className="lead">Install a JSX syntax highlighter package in your text editor to get started!</p>
        </div>
      </div>
    )
  }
}

export default App
