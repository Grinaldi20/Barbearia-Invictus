import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

import './global.css'

import App from './Barbearia.jsx'
import Admin from './admin/admin.jsx'
import Login from './login/login.jsx'

function RotaPrivada({ children }) {

  const auth = localStorage.getItem('auth')
  const expiration = localStorage.getItem('expiration')

  if (!auth || Date.now() > expiration) {

    localStorage.removeItem('auth')
    localStorage.removeItem('expiration')

    return <Navigate to="/login" />
  }

  return children
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<App />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/admin"
          element={
            <RotaPrivada>
              <Admin />
            </RotaPrivada>
          }
        />

      </Routes>

    </BrowserRouter>
  </StrictMode>,
)