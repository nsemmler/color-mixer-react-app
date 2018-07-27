import React, { Component } from 'react'
import ColorList from './components/ColorList'
import ColorForm from './components/ColorForm'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      colors: [
        { value: '#ff0000', name: 'red' },
        { value: '#00ff00', name: 'green' },
        { value: '#0000ff', name: 'blue' }
      ]
    }
  }

  addNewColor = (color) => {
    this.setState({ colors: [ ...this.state.colors, color ] })
  }

  render() {
    return (
      <main>
        <div className="jumbotron jumbotron-fluid bg-light text-dark border-bottom">
          <div className="container">
            <h1 className="display-4">Color Mixer React App</h1>
            <p className="lead">Install a JSX syntax highlighter package in your text editor to get started!</p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <h2 className="h4 text-center mb-4">Colors</h2>
              <ColorList colors={ this.state.colors } />
            </div>
            <div className="col">
            </div>
            <div className="col-3">
              <h2 className="h4 text-center mb-4">Add a Color</h2>
              <ColorForm handleAddNewColor={ this.addNewColor } />
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default App
