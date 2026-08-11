import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router } from "react-router";

import Routing from './Routing';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routing />
    </Router>
  </StrictMode>,
)
