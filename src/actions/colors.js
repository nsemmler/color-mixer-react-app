// create constants out of Action types to help with error handling
export const TOGGLE_COLOR = 'TOGGLE_COLOR'

// Action creator - function that dispatches an Action to to the Reducer
// Generally the location of Axios requests
export const toggleColor = (index) => {
  return {
    type: TOGGLE_COLOR,
    payload: index
  }
}
