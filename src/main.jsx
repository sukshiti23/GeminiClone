import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ContextProvider from "./context/context.jsx"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>,
)
