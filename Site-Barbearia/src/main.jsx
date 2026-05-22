import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './global.css'

import Barbearia from './Barbearia.jsx'
import Admin from './Admin/Admin.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Barbearia />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

    </BrowserRouter>
  </StrictMode>,
)