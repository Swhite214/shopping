import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './shared/styles/global.css'
import AppProvider from './app/providers/AppProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider />
  </StrictMode>,
)
