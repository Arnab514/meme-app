import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
// import { ThemeProvider } from '@material-tailwind/react'

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter>
      <App />
    </BrowserRouter>,
    </React.StrictMode>,
)
