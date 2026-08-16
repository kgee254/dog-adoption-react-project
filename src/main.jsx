import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DogProvider } from './context/DogContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <DogProvider>
      <App />
    </DogProvider>
    
  </StrictMode>,
)
