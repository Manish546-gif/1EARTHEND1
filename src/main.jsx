import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

import CurtainPreloader from './components/common/CurtainPreloader.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    
        <CurtainPreloader>

        <App />
        </CurtainPreloader>
     
    </BrowserRouter>
  </StrictMode>
)
