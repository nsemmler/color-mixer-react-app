import React, { Component } from 'react'

class ColorForm extends Component {
  render () {
    return (
      <form className="border rounded p-4">
        <div className="form-group">
          <label htmlFor="name">Color Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"/>
        </div>
        <div className="form-group">
          <label htmlFor="color">Color Value</label>
          <input
            type="color"
            className="form-control"
            name="color"
            id="color"/>
        </div>
        <button type="submit" className="btn btn-dark text-light">Submit</button>
      </form>
    )
  }
}

export default ColorForm
