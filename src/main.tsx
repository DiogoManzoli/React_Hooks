import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import One from './components/useState/One.tsx'
import Two from './components/useState/Two.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <One />
    <Two />
  </StrictMode>
)
