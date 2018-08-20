import React, { Component } from 'react'

// Forms are typically class components because they have their own state
class ColorForm extends Component {
  constructor (props) {
    super(props) // inherits from App
    this.state = { // state typically matches the e.target names
      name: '',
      color: ''
    }
  }

  onSubmit = (e) => { // event from the form submission
    e.preventDefault()

    const name = this.state.name
    const value = this.state.color
    this.props.addColor({ value, name })

    // reset form values
    this.setState({ name: '', color: ''})
  }

  // inputs in forms need an onChange method to update state
  // allows for dynamic form validation - anytime the form input changes...
  onChange = (e) => {
    this.setState({
      [ e.target.name ]: e.target.value
    })
  }

  // value={} ties in the state of the ColorForm with the value in the input
  // onChange - necessary for all input fields for dynamic validation and state change
  render () {
    return (
      <form onSubmit={ this.onSubmit } className="border rounded p-4">
        <div className="form-group">
          <label htmlFor="name">Color Name</label>
          <input
            onChange={ this.onChange }
            type="text"
            className="form-control"
            name="name"
            id="name"
            value={ this.state.name }/>
        </div>
        <div className="form-group">
          <label htmlFor="color">Color Value</label>
          <input
            onChange={ this.onChange }
            type="color"
            className="form-control"
            name="color"
            id="color"
            value={ this.state.color }/>
        </div>
        <button type="submit" className="btn btn-dark text-light">Submit</button>
      </form>
    )
  }
}

export default ColorForm
