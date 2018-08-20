import React, { Component } from 'react'
import ColorList from './components/ColorList'
import ColorForm from './components/ColorForm'
import ColorMixer from './components/ColorMixer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { connect } from 'react-redux' // Redux
import { bindActionCreators } from 'redux' // Redux
import { toggleColor } from './actions/colors' // Redux

const mapStateToProps = ({ colors }) => { return { colors } } // Redux
const mapDispatchToProps = (dispatch) => bindActionCreators({ toggleColor }, dispatch) // Redux

class App extends Component {
  /* Now that we are turning this into a React app it means we can completely delete
    the constructor function and, eventually, turn App into a functional component
    Moved this.state to Redux store (./src/store.js) */

  // method to add EL to update color.selected
  selectColor = (index) => {
    this.props.toggleColor(index)
  }

  // addColor takes an obect with a value and a name and adds it to the end of arr
  addColor = ({ value, name }) => {
    const newColor = { value, name, selected: false }
    this.setState({ colors: [ ...this.state.colors, newColor ] })
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
              <ColorList colors={ this.props.colors } selectColor={ this.selectColor } />
            </div>
            <div className="col">
              <h2 className="h4 text-center mb-4">Mix Result</h2>
              <ColorMixer colors={ this.props.colors } />
            </div>
            <div className="col-3">
              <h2 className="h4 text-center mb-4">Add a Color</h2>
              <ColorForm addColor={ this.addColor } />
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App) // Redux
