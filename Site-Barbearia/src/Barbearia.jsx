import { useState } from 'react'
import './Barbearia.css'
import Salao from './assets/Salao.png'
import Logo1 from './assets/Logo1.png'
import Corte  from './assets/Cortes/Corte.png'
import Corte2 from './assets/Cortes/Corte2.png'
import Corte3 from './assets/Cortes/Corte3.png'
import Corte4 from './assets/Cortes/Corte4.png'
import Corte5 from './assets/Cortes/Corte5.png'
import Corte6 from './assets/Cortes/Corte6.png'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
    {/*HEADER*/}
    <header className="header">
      
      <div className="headerInner">

        <img className="Logo" src={Logo1} alt="Invictus Barbearia" />

        <nav className={`headerNav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#Inicio"   onClick={closeMenu}><strong>INICIO</strong></a></li>
            <li><a href="#Cortes"   onClick={closeMenu}>CORTES</a></li>
            <li><a href="#Precos"   onClick={closeMenu}>PREÇOS</a></li>
            <li><a href="#Horarios" onClick={closeMenu}>HORÁRIOS</a></li>
            <li><a href="#Sobre"    onClick={closeMenu}>SOBRE</a></li>
            <li><a href="#Contato"  onClick={closeMenu}>CONTATO</a></li>
          </ul>
        </nav>

        <button
          type="button"
          className="menuToggle"
          onClick={() => setMenuOpen(p => !p)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? 'FECHAR' : 'MENU'}
        </button>
      </div>
    </header>

    <main>

      {/* ── INICIO ── */}
      <section id="Inicio" className="InicioSection">
        <div className="Titulo">
          <h1 className="Invictus">INVICTUS</h1>
          <h1 className="Barbearia">BARBEARIA</h1>
          <div className="TextCoroa">
            <h3 className="FraseInicio">Estilo, atitude e confiança em cada corte</h3>
            <img src="/coroa.png" alt="Coroa" />
          </div>
          <a href="#Contato" className="ButtonInicio">AGENDAR AGORA</a>
        </div>
      </section>

      {/* ── CORTES ── */}
      <section id="Cortes" className="CortesSection">
        <h1 className="CortesTitulo">NOSSOS <span>CORTES</span></h1>
        <h2 className="SubtituloCortes">Estilo, personalidade e acabamento premium.</h2>
        <div className="Linha5"></div>

        <div className="CortesImg">
          {[
            { src: Corte,  alt: 'High Fade',  titulo: 'High Fade',  sub: 'Fade • Clássico'       },
            { src: Corte2, alt: 'Two Block',  titulo: 'Two Block',  sub: 'Elegante • Diferencial' },
            { src: Corte3, alt: 'Dread Fade', titulo: 'Dread Fade', sub: 'Estiloso • Premium'     },
            { src: Corte4, alt: 'Buzz Cut',   titulo: 'Buzz Cut',   sub: 'Simples • Moderno'      },
            { src: Corte5, alt: 'Low Fade',   titulo: 'Low Fade',   sub: 'Visual • Moderno'       },
            { src: Corte6, alt: 'Mullet',     titulo: 'Mullet',     sub: 'Clean • Casual'         },
          ].map(({ src, alt, titulo, sub }) => (
            <div className="item" key={alt}>
              <img src={src} alt={alt} />
              <div className="overlay">
                <h3>{titulo}</h3>
                <p>{sub}</p>
              </div>
            </div>
          ))}
        </div>

       
      </section>

      {/* ── PREÇOS ── */}
      <section id="Precos" className="PrecosSection">
        <h1>NOSSOS <strong className="Serviços">SERVIÇOS</strong></h1>
        <h2 className="SubtituloPrecos">Estilo por um preço que vale a experiência.</h2>
        <div className="Linha2"></div>

        <div className="Cards">

          <div className="Card">
            <img src="/tesoura.png" alt="Tesoura" />
            <h2 className="Cortetext2">CORTE</h2>
            <div className="Linha"></div>
            <h3>Degradê, social ou freestyle com acabamento profissional.</h3>
            <h4><strong>⏱</strong> 30–40 min</h4>
            <div className="Linha"></div>
            <h3 className="CardPrecos">R$<strong className="CardPrecos2">35</strong>,00</h3>
            <ul>
              <li><img src="/correto1.png" alt="" />Acabamento na Navalha</li>
              <li><img src="/correto1.png" alt="" />Toalha Quente</li>
              <li><img src="/correto1.png" alt="" />Pomada Inclusa</li>
            </ul>
            <a href="#Contato" className="BotaoCard">Agendar</a>
          </div>

          <div className="Card">
            <img src="/olho.png" alt="Sobrancelha" />
            <h2 className="Cortetext">CORTE /<br />SOBRANCELHA</h2>
            <div className="Linha"></div>
            <h3>Corte moderno + design de sobrancelha alinhado.</h3>
            <h4><strong>⏱</strong> 40–50 min</h4>
            <div className="Linha"></div>
            <h3 className="CardPrecos">R$<strong className="CardPrecos2">45</strong>,00</h3>
            <ul>
              <li><img src="/correto1.png" alt="" />Acabamento na Navalha</li>
              <li><img src="/correto1.png" alt="" />Toalha Quente</li>
              <li><img src="/correto1.png" alt="" />Pomada Inclusa</li>
              <li><img src="/correto1.png" alt="" />Design da Sobrancelha</li>
            </ul>
            <a href="#Contato" className="BotaoCard">Agendar</a>
          </div>

          <div className="Card">
            <img src="/barba.png" alt="Barba" />
            <h2 className="Cortetext">CORTE /<br />BARBA</h2>
            <div className="Linha"></div>
            <h3>Corte + barba alinhada com acabamento profissional.</h3>
            <h4><strong>⏱</strong> 60–70 min</h4>
            <div className="Linha"></div>
            <h3 className="CardPrecos">R$<strong className="CardPrecos2">55</strong>,00</h3>
            <ul>
              <li><img src="/correto1.png" alt="" />Toalha Quente</li>
              <li><img src="/correto1.png" alt="" />Pomada Inclusa</li>
              <li><img src="/correto1.png" alt="" />Barba na Navalha</li>
              <li><img src="/correto1.png" alt="" />Design da Barba</li>
            </ul>
            <a href="#Contato" className="BotaoCard">Agendar</a>
          </div>

          <div className="Card">
            <div className="CardDuasImgs">
              <img src="/tesoura.png" alt="Tesoura" />
              <img src="/barba.png"   alt="Barba" />
            </div>
            <h2 className="Cortetext">COMBO<br />PREMIUM</h2>
            <div className="Linha"></div>
            <h3>Experiência completa com corte, barba e sobrancelha.</h3>
            <h4><strong>⏱</strong> 80–90 min</h4>
            <div className="Linha"></div>
            <h3 className="CardPrecos">R$<strong className="CardPrecos2">65</strong>,00</h3>
            <ul>
              <li><img src="/correto1.png" alt="" />Corte + Barba + Sobrancelha</li>
              <li><img src="/correto1.png" alt="" />Acabamento na Navalha</li>
              <li><img src="/correto1.png" alt="" />Toalha Quente</li>
              <li><img src="/correto1.png" alt="" />Pomada Inclusa</li>
            </ul>
            <a href="#Contato" className="BotaoCard">Agendar</a>
          </div>

        </div>
      </section>

      {/* ── SOBRE ── */}
      <section id="Sobre" className="SobreSection">
        <img className="Icon" src="/coroa.png" alt="Coroa" />
        <h1><strong>S</strong>OBRE</h1>
        <h2 className="SubtituloSobre">Mais que uma barbearia, uma experiência</h2>
        <div className="Linha5"></div>

        <div className="ContainerSobre">
          <img className="SobreImg" src={Salao} alt="Salão da Invictus Barbearia" />
          <div className="TextosSobre">
            <h3 className="NossaSobre">Nossa História</h3>
            <h3 className="TraSobre">TRADIÇÃO, ESTILO E<br /><strong>ATITUDE</strong></h3>
            <p className="ParaSobre">
              Mais do que uma barbearia, criamos um espaço pensado para quem valoriza estilo,
              cuidado e experiência. Nossa missão começou com a ideia de transformar cada
              atendimento em um momento único, unindo tradição, modernidade e atenção aos detalhes.
            </p>
            <p className="ParaSobre">
              Aqui, cada corte e cada barba são feitos com dedicação, técnica e personalidade,
              porque acreditamos que confiança também faz parte do visual.
            </p>
          </div>
        </div>

        <div className="QuantSobre">
          <div className="QuantItem">
            <img className="IconQuant" src="/Pessoas.png" alt="" />
            <div className="QuantTexto">
              <h2 className="Number">+2900</h2>
              <p className="Text">Clientes Satisfeitos</p>
            </div>
          </div>
          <div className="Linha3"></div>
          <div className="QuantItem">
            <img className="IconQuant" src="/trofeu.png" alt="" />
            <div className="QuantTexto">
              <h2 className="Number">+4</h2>
              <p className="Text">Anos de Tradição</p>
            </div>
          </div>
          <div className="Linha3"></div>
          <div className="QuantItem">
            <img className="IconQuant" src="/tesoura.png" alt="" />
            <div className="QuantTexto">
              <h2 className="Number">+1000</h2>
              <p className="Text">Cortes Realizados</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTATO ── */}
      <section id="Contato" className="ContatoSection">
        <div className="TextIcon">
          <h1><strong>FALE</strong> CONOSCO</h1>
        </div>
        <h2 className="SubtituloContato">Entre em contato com a nossa equipe de profissionais.</h2>
        <div className="Linha2"></div>

        <div className="ContatoContent">

          <form className="FormContato" onSubmit={e => e.preventDefault()}>
            <div className="JuntoIcon">
              <img className="FormIconTop" src="/Calendario.png" alt="Calendário" />
              <h2>AGENDAR UM HORÁRIO</h2>
            </div>

            <div className="InputLado">
              <div className="TextInputTop">
                <label htmlFor="nome">Nome Completo</label>
                <input id="nome" type="text" placeholder="Digite seu nome" required />
              </div>
              <div className="TextInputTop">
                <label htmlFor="email">E-mail</label>
                <input id="email" type="email" placeholder="Digite seu email" required />
              </div>
            </div>

            <div className="InputLado">
              <div className="TextInputTop">
                <label htmlFor="whatsapp">WhatsApp</label>
                <input id="whatsapp" type="tel" placeholder="(00) 00000-0000" required />
              </div>
              <div className="TextInputTop">
                <label htmlFor="servico">Serviço</label>
                <input id="servico" type="text" placeholder="Escolha o serviço" required />
              </div>
            </div>

            <label htmlFor="data">Dia desejado</label>
            <input id="data" className="DataInput" type="date" required />

            <label htmlFor="horario">Horário Desejado</label>
            <select id="horario" defaultValue="">
              <option value="" disabled>Horário Desejado</option>
              {['09:00','10:00','11:00','12:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00'].map(h => (
                <option key={h} value={h}>{h}</option>
              ))}
            </select>

            <label htmlFor="obs">Observações (Opcional)</label>
            <textarea id="obs" placeholder="Mensagem (Opcional)"></textarea>

            <button className="BotaoContato" type="submit">Enviar Mensagem</button>
            <p className="FormAviso">Seus dados estão protegidos e serão usados apenas para contato.</p>
          </form>

          <div className="InfoContato">
            <div className="JuntoIcon2">
              <img className="PinIcon" src="/pin.png" alt="Localização" />
              <p>R. Nhambiquaras, 152 - Jardim America, Tupã - SP, 17601-150</p>
            </div>
            <div className="Mapa">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3701.0353299141925!2d-50.52566892555306!3d-21.933193203801256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9495b7fdc89d93d5%3A0x6bd4938926a13b2a!2sInvictus%20Barbearia!5e0!3m2!1spt-BR!2sbr!4v1778969686809!5m2!1spt-BR!2sbr"
                width="100%" height="100%"
                style={{ border: 0 }}
                allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Invictus Barbearia"
              />
            </div>
            <div className="RedesSociais">
              <a href="https://wa.me/5514999999999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <img className="Sociais" src="/whatsapp.png" alt="WhatsApp" />
              </a>
              <a href="https://instagram.com/invictusbarbearia" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img className="Sociais" src="/instagram.png" alt="Instagram" />
              </a>
              <a href="https://facebook.com/invictusbarbearia" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img className="Sociais" src="/facebook.png" alt="Facebook" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ── HORÁRIOS ── */}
      <section id="Horarios" className="HorarioSection">
        <div className="TextIcon">
          <h1 className="TituloHorario">NOSSOS <strong>HORÁRIOS</strong></h1>
        </div>
        <h2 className="SubtituloHorario">Escolha o melhor dia e horário e venha viver a experiência Invictus.</h2>
        <div className="Linha2"></div>

        <div className="CardsHorario">
          {[
            { dia: 'SEGUNDA', horario: '9:00 às 20:00', aberto: true  },
            { dia: 'TERÇA',   horario: '9:00 às 20:00', aberto: true  },
            { dia: 'QUARTA',  horario: '9:00 às 20:00', aberto: true  },
            { dia: 'QUINTA',  horario: '9:00 às 20:00', aberto: true  },
            { dia: 'SEXTA',   horario: '9:00 às 20:00', aberto: true  },
            { dia: 'SÁBADO',  horario: '9:00 às 17:00', aberto: true  },
            { dia: 'DOMINGO', horario: null,             aberto: false },
          ].map(({ dia, horario, aberto }) => (
            <div className="CardHorario" key={dia}>
              <img className="IconHorario" src="/Calendario.png" alt="Calendário" />
              <h2 className="TituloCard">{dia}</h2>
              <div className="Linha4"></div>
              {horario && <p className="HorarioCard">{horario}</p>}
              <div className={aberto ? 'Aberto' : 'Fechado'}></div>
            </div>
          ))}
        </div>

        <div className="CardAtencao">
          <img className="IconAtencao" src="/relogio.png" alt="Relógio" />
          <h2 className="TextAtencao">ATENÇÃO</h2>
          <div className="TextosAtencao">
            <p className="FraseAtencao">Os horários podem sofrer alterações em feriados e datas comemorativas.</p>
            <p className="FraseAtencao2">Entre em contato para confirmar.</p>
          </div>
        </div>
      </section>

    </main>

    <footer className="Footer">
      <div className="FooterContainer">

        <div className="FooterInfo">
          <img className="LogoFooter" src="/Logo1.png" alt="Invictus Barbearia" />
          <h2 className="NomeFooter">INVICTUS <strong>BARBEARIA</strong></h2>
          <p className="TextoFooter">Estilo, tradição e excelência em cada detalhe. Transformando cortes em experiências.</p>
        </div>


        <div className="FooterLinks">
          <h3>NAVEGAÇÃO</h3>
          <a href="#Inicio">Início</a>
          <a href="#Cortes">Cortes</a>
          <a href="#Precos">Preços</a>
          <a href="#Sobre">Sobre</a>
          <a href="#Contato">Contato</a>
          <a href="#Horarios">Horários</a>
        </div>

        <div className="FooterRedes">
          <h3>REDES SOCIAIS</h3>
          <div className="IconsFooter">
            <a href="https://instagram.com/invictusbarbearia" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="/instagram.png" alt="Instagram" />
            </a>
            <a href="https://facebook.com/invictusbarbearia" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src="/facebook.png" alt="Facebook" />
            </a>
            <a href="https://wa.me/5514999999999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <img src="/whatsapp.png" alt="WhatsApp" />
            </a>
          </div>
        </div>

      </div>
      <div className="LinhaFooter"></div>
      <div className="CopyFooter">© 2026 Invictus Barbearia — Todos os direitos reservados.</div>
    </footer>
    </>
  )
}

export default App