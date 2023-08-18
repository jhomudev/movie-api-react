import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MoviesProvider } from './context/MoviesContext.jsx'
import { ParamsProvider } from './context/ParamsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParamsProvider>
      <MoviesProvider>
        <App />
      </MoviesProvider>
    </ParamsProvider>
  </React.StrictMode>
)
