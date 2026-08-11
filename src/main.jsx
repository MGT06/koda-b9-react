import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// import Operation from './pages/Operation.jsx'
import Product from './pages/Product'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    {/* <Operation /> */}
    <Product />
    </>
  </StrictMode>,
)
