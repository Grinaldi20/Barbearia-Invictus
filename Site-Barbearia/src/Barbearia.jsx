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
  <h1 className="CortesTitulo">CORTES</h1>

<div className="CortesImg">
  
 <div className="item">
    <img src={Corte} alt="Corte" />
    <div className="overlay">
      <h3>Degradê</h3>
      <p>R$ 30</p>
    </div>
  </div>

  <div className="item">
    <img src={Corte2} alt="Corte2" />
    <div className="overlay">
      <h3>Social</h3>
      <p>R$ 25</p>
    </div>
  </div>

 <div className="item">
    <img src={Corte3} alt="Corte3" />
    <div className="overlay">
      <h3>Undercut</h3>
      <p>R$ 20</p>
    </div>
  </div>

   <div className="item">
    <img src={Corte4} alt="Corte4" />
    <div className="overlay">
      <h3>Caipira</h3>
      <p>R$ 20</p>
    </div>
  </div>

   <div className="item">
    <img src={Corte5} alt="Corte5" />
    <div className="overlay">
      <h3>Modelo</h3>
      <p>R$ 30</p>
    </div>
  </div>

   <div className="item">
    <img src={Corte6} alt="Corte6" />
    <div className="overlay">
      <h3>Curto</h3>
      <p>R$ 15</p>
    </div>
  </div>

  
</div>

</section>


<section className="PrecosSection">
  <h1>Preços</h1>
</section>


<section className="ContatoSection">
  <h1>Contato</h1>
</section>

    </main>




    <footer>

    </footer>
     </>
  )
}

export default App
