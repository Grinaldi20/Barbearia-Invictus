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

  return auth === 'true'
    ? children
    : <Navigate to="/login" />
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