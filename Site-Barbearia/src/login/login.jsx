import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'

function Login() {
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [senhaVisivel, setSenhaVisivel] = useState(false)
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState('')
  const [focusUsuario, setFocusUsuario] = useState(false)
  const [focusSenha, setFocusSenha] = useState(false)

  const navigate = useNavigate()

  function entrar(e) {
    e.preventDefault()
    setErro('')
    setCarregando(true)

    setTimeout(() => {
      if (usuario === 'Admin' && senha === 'Admin@2026') {
        const expiration = Date.now() + 24 * 60 * 60 * 1000
        localStorage.setItem('auth', 'true')
        localStorage.setItem('expiration', expiration)
        navigate('/admin')
      } else {
        setErro('Usuário ou senha incorretos')
        setCarregando(false)
      }
    }, 900)
  }

  return (
    <div className="login-root">
   
      <div className="login-bg">
        <div className="login-bg-glow" />
        <div className="login-bg-lines" />
      </div>

      <div className="login-wrapper">
    
        <div className="login-card">

        
          <div className="login-card-topbar" />

      
          <div className="login-header">
            <div className="login-logo">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="login-logo-svg">
             
                <circle cx="32" cy="32" r="30" stroke="#C9A14A" strokeWidth="1.2" strokeOpacity="0.4"/>
                <circle cx="32" cy="32" r="24" stroke="#C9A14A" strokeWidth="0.6" strokeOpacity="0.2"/>
                <path d="M20 18 Q24 30 28 38 Q30 42 28 46 Q26 50 22 49 Q18 48 18 44 Q18 40 22 40 Q25 40 26 42" stroke="#C9A14A" strokeWidth="2" strokeLinecap="round" fill="none"/>
                <path d="M44 18 Q40 30 36 38 Q34 42 36 46 Q38 50 42 49 Q46 48 46 44 Q46 40 42 40 Q39 40 38 42" stroke="#C9A14A" strokeWidth="2" strokeLinecap="round" fill="none"/>
                <circle cx="32" cy="29" r="3" fill="#C9A14A" fillOpacity="0.9"/>
                <path d="M29 18 L35 18" stroke="#C9A14A" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>

            <div className="login-brand">
              <span className="login-brand-name">BARBEARIA</span>
              <span className="login-brand-tag">SISTEMA ADMINISTRATIVO</span>
            </div>

            <p className="login-subtitle">
              Acesso restrito ao painel de controle.<br />
              Insira suas credenciais para continuar.
            </p>
          </div>

     
          <div className="login-divider">
            <span className="login-divider-line" />
            <span className="login-divider-diamond" />
            <span className="login-divider-line" />
          </div>

       
          <form className="login-form" onSubmit={entrar} noValidate>

      
            <div className={`login-field ${focusUsuario ? 'login-field--focus' : ''} ${usuario ? 'login-field--filled' : ''}`}>
              <label className="login-label">Usuário</label>
              <div className="login-input-wrap">
                <span className="login-input-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </span>
                <input
                  type="text"
                  className="login-input"
                  placeholder="Digite seu usuário"
                  value={usuario}
                  onChange={(e) => { setUsuario(e.target.value); setErro('') }}
                  onFocus={() => setFocusUsuario(true)}
                  onBlur={() => setFocusUsuario(false)}
                  autoComplete="username"
                  required
                />
              </div>
            </div>

         
            <div className={`login-field ${focusSenha ? 'login-field--focus' : ''} ${senha ? 'login-field--filled' : ''}`}>
              <label className="login-label">Senha</label>
              <div className="login-input-wrap">
                <span className="login-input-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </span>
                <input
                  type={senhaVisivel ? 'text' : 'password'}
                  className="login-input"
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={(e) => { setSenha(e.target.value); setErro('') }}
                  onFocus={() => setFocusSenha(true)}
                  onBlur={() => setFocusSenha(false)}
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  className="login-eye-btn"
                  onClick={() => setSenhaVisivel(!senhaVisivel)}
                  tabIndex={-1}
                  aria-label={senhaVisivel ? 'Ocultar senha' : 'Mostrar senha'}
                >
                  {senhaVisivel ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Mensagem de erro */}
            <div className={`login-erro ${erro ? 'login-erro--visivel' : ''}`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              {erro}
            </div>

            <button
              type="submit"
              className={`login-btn ${carregando ? 'login-btn--loading' : ''}`}
              disabled={carregando}
            >
              {carregando ? (
                <span className="login-spinner" />
              ) : (
                <>
                  <span>Acessar Painel</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </>
              )}
            </button>

          </form>

        
          <div className="login-footer">
            <span className="login-footer-dot" />
            <span className="login-footer-text">Acesso seguro</span>
            <span className="login-footer-dot" />
          </div>

        </div>

        <p className="login-copyright">© {new Date().getFullYear()} Barbearia. Todos os direitos reservados.</p>
      </div>
    </div>
  )
}

export default Login