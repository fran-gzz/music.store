import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './scss/index.scss'
import { Provider } from './context'


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider>
        <App />
    </Provider>
)
