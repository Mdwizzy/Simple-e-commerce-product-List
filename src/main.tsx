import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import FormTest from './FormTest.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <FormTest />
  </StrictMode>,
)
