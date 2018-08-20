// create constants out of Action types to help with error handling
export const TOGGLE_COLOR = 'TOGGLE_COLOR'

// Action creator - fn that returns an object
export const toggleColor = (index) => {
  return {
    type: TOGGLE_COLOR,
    payload: index
  }
}
