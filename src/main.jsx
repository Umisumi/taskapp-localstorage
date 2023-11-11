import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)

/* ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> // Establece todo desde 0, ocasionando que el LocalStorage se elimine
    <App />
  </React.StrictMode>,
) */

/* 
  npm install
  npm run dev
  npm run build
*/