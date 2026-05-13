import { useState } from 'react'
import './Barbearia.css'
import logo from './assets/logo.png';
import Corte from './assets/Cortes/Corte.png';
import Corte2 from './assets/Cortes/Corte2.png';
import Corte3 from './assets/Cortes/Corte3.png';
import Corte4 from './assets/Cortes/Corte4.png';
import Corte5 from './assets/Cortes/Corte5.png';
import Corte6 from './assets/Cortes/Corte6.png';

function App() {
 

  return (
    <>
    <header className="header">
      <img src={logo} alt="Barbearia" />
      <nav>



 
        <ul>
          <li className="Inicio">INICIO</li>
          <li>CORTES</li>
          <li>PREÇOS</li>
          <li>SOBRE</li>
          <li>CONTATO</li>
        </ul>

<button>AGENDAR</button>

        </nav>
        
    </header>

    <main>
<section className="InicioSection">
  <div className="Titulo">
  <h1 className="Invictus">INVICTUS</h1>
  <h1 className="Barbearia">BARBEARIA</h1>
  <div className="TextCoroa">
    <h3 className="FraseInicio">Estilo, atitude e confiança em cada corte</h3>
    <img src="/coroa.png" alt="Coroa" />
    </div>

    <button className="ButtonInicio">AGENDAR AGORA</button>
  </div>
</section>


<section className="CortesSection">

  <h1 className="CortesTitulo">
    NOSSOS <span>CORTES</span>
  </h1>
<div className="Linha2"></div>
  <p className="SubtituloCortes">
    Estilo, personalidade e acabamento premium.
  </p>

  <div className="CortesImg">

    <div className="item">
      <img src={Corte} alt="Corte" />
      <div className="overlay">
        <h3>High Fade</h3>
        <p>Fade • Classico</p>
      </div>
    </div>

    <div className="item">
      <img src={Corte2} alt="Corte2" />
      <div className="overlay">
        <h3>Two Block</h3>
        <p>Elegante • Diferencial</p>
      </div>
    </div>

    <div className="item">
      <img src={Corte3} alt="Corte3" />
      <div className="overlay">
        <h3>Dread Fade</h3>
        <p>Estiloso • Premium</p>
      </div>
    </div>

    <div className="item">
      <img src={Corte4} alt="Corte4" />
      <div className="overlay">
        <h3>Buzz Cute</h3>
        <p>Simples • Moderno</p>
      </div>
    </div>

    <div className="item">
      <img src={Corte5} alt="Corte5" />
      <div className="overlay">
        <h3>Low fade</h3>
        <p>Visual • Moderno</p>
      </div>
    </div>

    <div className="item">
      <img src={Corte6} alt="Corte6" />
      <div className="overlay">
        <h3>Mullet</h3>
        <p>Clean • Casual</p>
      </div>
    </div>

  </div>

  <button className="BotaoCortes">
    VER MAIS ESTILOS
  </button>

</section>


<section className="PrecosSection">
  <h1>NOSSOS <strong className="Serviços">SERVIÇOS</strong></h1>

<div  className="Cards">
 <div className="Card">
  <img src="/tesoura.png" alt="Tesoura" />
  <h1 className="Cortetext">CORTE</h1>
  <div className="Linha"></div>
  <h3>  Degradê, social ou freestyle
      com acabamento profissional.</h3>
  <h4>⏱ 30 - 40 min</h4>

</div>

  <div className="Card">
    <img src="/olho.png" alt="Tesoura" />
<h1>CORTE / <br></br> SOBRANCELHA</h1>
<div className="Linha"></div>
 <h3> Corte moderno + design de
   <br></br>   sobrancelha alinhado.</h3>
  <h4>⏱ 40 - 50 min</h4>
  </div>

  <div className="Card">
    <img src="/barba.png" alt="Tesoura" />
<h1>CORTE / <br></br> BARBA</h1>
<div className="Linha"></div>
 <h3>Corte + barba alinhada
    com <br></br> acabamento profissional.</h3>
 <h4>⏱ 60 - 70 min</h4>
  </div>

  <div className="Card">
    <img src="/tesoura.png" alt="Tesoura" />
    <img src="/barba.png" alt="Tesoura" />
<h1>COMBO <br></br> PREMIUM</h1>
<div className="Linha"></div>
 <h3> Experiência completa com
      corte, <br></br> barba e sobrancelha.</h3>
 <h4>⏱ 80 - 90 min</h4>

  </div>
</div>

</section>

<section className="SobreSection">
  <h1>SOBRE</h1>
</section>

<section className="ContatoSection">
  <h1>CONTATO</h1>
</section>

    </main>




    <footer>

    </footer>
     </>
  )
}

export default App
