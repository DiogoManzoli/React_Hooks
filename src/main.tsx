import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import OneState from './components/useState/One.tsx'
import TwoState from './components/useState/Two.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OneState />
    <TwoState />
  </StrictMode>
)
