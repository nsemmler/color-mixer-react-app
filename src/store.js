// Export function that creates a new store w/ reducer(s)

import { createStore, combineReducers } from 'redux'
import colorsReducer from './reducers/colors' // tied reducer to store

const reducers = combineReducers({ colors: colorsReducer }) // for when we have multiple reducers

// export default () => createStore(() => {}) - anon fn() to test before have reducers
// export default () => createStore(colorsReducer) - for 1 reducer
export default () => createStore(reducers) // createStore(reducers, initialState, middleware)
