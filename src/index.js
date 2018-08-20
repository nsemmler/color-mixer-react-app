import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import store from './store' // Redux
import { Provider } from 'react-redux' // Redux

// Redux - Providers added
ReactDOM.render(
  <Provider store={ store() }>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
