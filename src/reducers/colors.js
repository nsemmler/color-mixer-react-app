// import ALL action types from Actions
import {
  TOGGLE_COLOR
} from '../actions/colors'

// STORE - this was previously the this.state array in functional App constructor
const initialColors = [
    { value: '#ff0000', name: 'Red', selected: false },
    { value: '#00ff00', name: 'Green', selected: false },
    { value: '#0000ff', name: 'Blue', selected: false }
]

// function colors handles all color actions that change state (CRUD)
function colors (state=initialColors, action) {
  switch (action.type) {
    case TOGGLE_COLOR:
      const color = state[action.payload] // state is whatever is passed in (i.e. initialColors)
      color.selected = !color.selected
      return [ ...state ]
    default:
      return state
  }
}


export default colors
