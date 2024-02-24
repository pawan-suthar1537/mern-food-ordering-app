import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'

import { BrowserRouter as Router } from 'react-router-dom'
import Approutes from './Approutes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Approutes/>
    </Router>
  </React.StrictMode>,
)
