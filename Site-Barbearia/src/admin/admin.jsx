import { useEffect, useState } from 'react'
import './admin.css'

function Admin() {
  const [agendamentos, setAgendamentos] = useState([])
  const [loading, setLoading] = useState(true)
  const [deletando, setDeletando] = useState(null)

  async function buscarAgendamentos() {
    try {
      setLoading(true)
      const resposta = await fetch('https://barbearia-invictus-vfqr.onrender.com/agendamentos')
      const dados = await resposta.json()
      setAgendamentos(dados)
    } catch (error) {
      console.log('Erro ao buscar agendamentos:', error)
    } finally {
      setLoading(false)
    }
  }

  async function deletarAgendamento(id) {
  try {
    setDeletando(id)

    const resposta = await fetch(
      `https://barbearia-invictus-vfqr.onrender.com/agendamentos/${id}`,
      {
        method: 'DELETE',
      }
    )

    if (!resposta.ok) {
      throw new Error('Erro ao deletar')
    }

    window.location.reload()

  } catch (error) {
    console.log('Erro ao deletar agendamento:', error)
  } finally {
    setDeletando(null)
  }
}

  useEffect(() => {
    buscarAgendamentos()
  }, [])

  return (
    <div className="admin-wrapper">

      {/* ── SIDEBAR ── */}
      <aside className="admin-sidebar">
        <div className="sidebar-logo">
          <span className="sidebar-logo-icon">✂</span>
          <span className="sidebar-logo-text">INVICTUS</span>
        </div>
        <nav className="sidebar-nav">
          <button type="button" className="sidebar-link active">
            <span className="sidebar-link-icon">📋</span>
            Agendamentos
          </button>
        </nav>
        <div className="sidebar-footer">
          <span className="sidebar-version">v1.0.0</span>
        </div>
      </aside>

      {/* ── CONTEÚDO PRINCIPAL ── */}
      <main className="admin-main">

        {/* Header */}
        <header className="admin-header">
          <div className="admin-header-left">
            <h1 className="admin-title">Painel Administrativo</h1>
            <p className="admin-subtitle">Gerencie todos os agendamentos da barbearia</p>
          </div>
          <div className="admin-header-right">
            <button type="button" className="btn-refresh" onClick={buscarAgendamentos} title="Atualizar">
              <span className="refresh-icon">↻</span>
              Atualizar
            </button>
          </div>
        </header>

        {/* Stat Cards */}
        <section className="admin-stats">
          <div className="stat-card">
            <div className="stat-icon">📅</div>
            <div className="stat-info">
              <span className="stat-value">{agendamentos.length}</span>
              <span className="stat-label">Total de Agendamentos</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⏰</div>
            <div className="stat-info">
              <span className="stat-value">
                {agendamentos.filter(a => a.data === new Date().toISOString().split('T')[0]).length}
              </span>
              <span className="stat-label">Hoje</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">✂</div>
            <div className="stat-info">
              <span className="stat-value">
                {[...new Set(agendamentos.map(a => a.servico))].length}
              </span>
              <span className="stat-label">Serviços Ativos</span>
            </div>
          </div>
        </section>

        {/* Tabela / Cards de Agendamentos */}
        <section className="admin-section">
          <div className="section-header">
            <h2 className="section-title">
              <span className="section-title-bar"></span>
              Agendamentos
            </h2>
            <span className="section-badge">{agendamentos.length} registros</span>
          </div>

          {/* Estado: loading */}
          {loading && (
            <div className="estado-loading">
              <div className="spinner">
                <div className="spinner-ring"></div>
              </div>
              <p className="estado-texto">Carregando agendamentos...</p>
            </div>
          )}

          {/* Estado: vazio */}
          {!loading && agendamentos.length === 0 && (
            <div className="estado-vazio">
              <div className="estado-vazio-icon">📭</div>
              <h3 className="estado-vazio-titulo">Nenhum agendamento encontrado</h3>
              <p className="estado-vazio-desc">Quando novos agendamentos chegarem, eles aparecerão aqui.</p>
              <button type="button" className="btn-refresh-vazio" onClick={buscarAgendamentos}>
                Verificar novamente
              </button>
            </div>
          )}

          {/* Lista de agendamentos */}
          {!loading && agendamentos.length > 0 && (
            <>
              {/* Versão desktop — tabela */}
              <div className="tabela-wrapper">
                <table className="tabela-agendamentos">
                  <thead>
                    <tr>
                      <th>Cliente</th>
                      <th>Serviço</th>
                      <th>Data</th>
                      <th>Horário</th>
                      <th>Telefone</th>
                      <th>Ação</th>
                    </tr>
                  </thead>
                  <tbody>
                    {agendamentos.map((item) => (
                      <tr key={item.id} className={deletando === item.id ? 'linha-deletando' : ''}>
                        <td>
                          <div className="cliente-cell">
                            <div className="cliente-avatar">
                              {item.nome?.charAt(0).toUpperCase()}
                            </div>
                            <span className="cliente-nome">{item.nome}</span>
                          </div>
                        </td>
                        <td><span className="servico-badge">{item.servico}</span></td>
                        <td><span className="data-cell">📅 {item.data}</span></td>
                        <td><span className="horario-cell">⏰ {item.horario}</span></td>
                        <td><span className="telefone-cell">📞 {item.telefone}</span></td>
                        <td>
                          <button
                            type="button"
                            className="btn-excluir-tabela"
                            onClick={() => deletarAgendamento(item.id)}
                            disabled={deletando === item.id}
                          >
                            {deletando === item.id ? (
                              <span className="btn-loading">⟳</span>
                            ) : (
                              <>🗑 Excluir</>
                            )}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Versão mobile — cards */}
              <div className="lista-cards-mobile">
                {agendamentos.map((item) => (
                  <div
                    className={`card-agendamento ${deletando === item.id ? 'card-deletando' : ''}`}
                    key={item.id}
                  >
                    <div className="card-header-info">
                      <div className="card-avatar">
                        {item.nome?.charAt(0).toUpperCase()}
                      </div>
                      <div className="card-nome-servico">
                        <span className="card-nome">{item.nome}</span>
                        <span className="card-servico-badge">{item.servico}</span>
                      </div>
                    </div>

                    <div className="card-detalhes">
                      <div className="card-detalhe-item">
                        <span className="detalhe-icon">📅</span>
                        <span className="detalhe-label">Data</span>
                        <span className="detalhe-valor">{item.data}</span>
                      </div>
                      <div className="card-detalhe-item">
                        <span className="detalhe-icon">⏰</span>
                        <span className="detalhe-label">Horário</span>
                        <span className="detalhe-valor">{item.horario}</span>
                      </div>
                      <div className="card-detalhe-item">
                        <span className="detalhe-icon">📞</span>
                        <span className="detalhe-label">Telefone</span>
                        <span className="detalhe-valor">{item.telefone}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="btn-excluir-card"
                      onClick={() => deletarAgendamento(item.id)}
                      disabled={deletando === item.id}
                    >
                      {deletando === item.id ? 'Excluindo...' : '🗑 Excluir Agendamento'}
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}
        </section>

      </main>
    </div>
  )
}

export default Admin