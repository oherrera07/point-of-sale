import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import MemoryAuth from './assets/memory/auth.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MemoryAuth>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MemoryAuth>
  </StrictMode>,
)
