import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ConfigIcon from './components/ConfigIcon'
// Redux
import store from './store'
import { Provider } from 'react-redux'
// react-router
import { HashRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ConfigIcon />
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
)
