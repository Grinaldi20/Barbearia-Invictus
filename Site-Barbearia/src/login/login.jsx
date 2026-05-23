import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'

function Login() {

  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')

  const navigate = useNavigate()

  function entrar(e) {
    e.preventDefault()

    // LOGIN SIMPLES
    if (usuario === 'admin' && senha === '123456') {

      localStorage.setItem('auth', 'true')

      navigate('/admin')

    } else {
      alert('Usuário ou senha incorretos')
    }
  }

  return (
    <div className="login-container">

      <form className="login-box" onSubmit={entrar}>

        <h1>Painel Admin</h1>

        <input
          type="text"
          placeholder="Usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button type="submit">
          Entrar
        </button>

      </form>

    </div>
  )
}

export default Login