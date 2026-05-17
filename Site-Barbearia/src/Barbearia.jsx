import { useState } from 'react'
import './Barbearia.css'
import Salao from './assets/Salao.png';
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
  <h2 className="SubtituloCortes">
    Estilo, personalidade e acabamento premium.
  </h2>
<div className="Linha2"></div>

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
  <h2 className="SubtituloPrecos">
    Estilo por um preço que vale a experiência.
  </h2>
  <div className="Linha2"></div>

<div  className="Cards">
 <div className="Card">
  <img className="imgCard2" src="/tesoura.png" alt="Tesoura" />
  <h2 className="Cortetext2">CORTE</h2>
  <div className="Linha"></div>
  <h3>  Degradê, social ou freestyle
      com acabamento profissional.</h3>
  <h4><strong>⏱</strong> 30 - 40 min</h4>
  <div className="Linha"></div>
   <h3 className="CardPrecos"> R$<strong className="CardPrecos2">35</strong>,00</h3>
   <ul>
  <li> <img src="/correto.png" alt="Icon" />Acabamento na Navalha</li>
  <li> <img src="/correto.png" alt="Icon" />Toalha Quente</li>
  <li> <img src="/correto.png" alt="Icon" />Pomada Inclusa</li>
 </ul>

<button className="BotaoCard2"> Agendar </button>
</div>

  <div className="Card">
    <img src="/olho.png" alt="Tesoura" />
<h2 className="Cortetext">CORTE / <br></br> SOBRANCELHA</h2>
<div className="Linha"></div>
 <h3> Corte moderno + design de
   <br></br>   sobrancelha alinhado.</h3>
  <h4><strong>⏱</strong> 40 - 50 min</h4>
  <div className="Linha"></div>
   <h3 className="CardPrecos"> R$<strong className="CardPrecos2">45</strong>,00</h3>
   <ul>
 <li> <img src="/correto.png" alt="Icon" />Acabamento na Navalha</li>
  <li> <img src="/correto.png" alt="Icon" />Toalha Quente</li>
  <li> <img src="/correto.png" alt="Icon" />Pomada Inclusa</li>
  <li> <img src="/correto.png" alt="Icon" />Design da Sobrancelha</li>
 </ul>

 <button className="BotaoCard">Agendar</button>
  </div>

  <div className="Card">
    <img src="/barba.png" alt="Tesoura" />
<h2 className="Cortetext">CORTE / <br></br> BARBA</h2>
<div className="Linha"></div>
 <h3>Corte + barba alinhada
    com <br></br> acabamento profissional.</h3>
 <h4> <strong>⏱</strong> 60 - 70 min</h4>
 <div className="Linha"></div>
  <h3 className="CardPrecos"> R$<strong className="CardPrecos2" >55</strong>,00</h3>
  <ul>
  <li> <img src="/correto.png" alt="Icon" />Toalha Quente</li>
  <li> <img src="/correto.png" alt="Icon" />Pomada Inclusa</li>
  <li> <img src="/correto.png" alt="Icon" />Barba na Navalha</li>
  <li> <img src="/correto.png" alt="Icon" />Design da Barba</li>
 </ul>

 <button className="BotaoCard">Agendar</button>
  </div>

  <div className="Card">
    <img src="/tesoura.png" alt="Tesoura" />
    <img src="/barba.png" alt="Tesoura" />
<h2 className="Cortetext">COMBO <br></br> PREMIUM</h2>
<div className="Linha"></div>
 <h3> Experiência completa com
      corte, <br></br> barba e sobrancelha.</h3>
 <h4><strong>⏱</strong> 80 - 90 min</h4>
 <div className="Linha"></div>
 <h3 className="CardPrecos"> R$<strong className="CardPrecos2">65</strong>,00</h3>
 <ul>
  <li> <img src="/correto.png" alt="Icon" />Corte + Barba + Sobrancelha</li>
  <li> <img src="/correto.png" alt="Icon" />Acabamento na Navalha</li>
  <li> <img src="/correto.png" alt="Icon" />Toalha Quente</li>
  <li> <img src="/correto.png" alt="Icon" />Pomada Inclusa</li>
 </ul>

<button className="BotaoCard">Agendar</button>
  </div>
</div>

</section>

<section className="SobreSection">
    <img className="Icon" src="/coroa.png" alt="Coroa" />
  <h1><strong>S</strong>OBRE</h1>
  <h2 className="SubtituloSobre">Mais que uma barbearia, uma experiência</h2>
  <div className="Linha2"></div>

<div className="ContainerSobre">
   <img src={Salao} alt="Salão" />

<div className="TextosSobre">
<h3 className="NossaSobre">Nossa História</h3>

<h3 className="TraSobre">TRADIÇÃO, ESTILO E 
  <br></br> 
<strong>ATITUDE</strong>
</h3>

<p className="ParaSobre">Mais do que uma barbearia, criamos um espaço pensado para quem valoriza estilo, 
cuidado e experiência. Nossa missão começou com a ideia de transformar cada atendimento
em um momento único, unindo tradição, modernidade e atenção aos detalhes.</p>

<p className="ParaSobre">Aqui, cada corte e cada barba são feitos com dedicação, técnica e personalidade,
porque acreditamos que confiança também faz parte do visual. Desde o primeiro cliente,
buscamos oferecer um ambiente confortável, sofisticado e feito para você sair se sentindo
na sua melhor versão.</p>
</div>
</div>


<div className="QuantSobre">
 <div className="Quant">
  <div className="Pessoas">
     <img className="IconQuant" src="/Pessoas.png" alt="IconPessoas" />
    <h2 className="Number">+2900</h2>
  </div>
 <div className="Linha3"></div>
  <div className="Historia">
     <img className="IconQuant" src="/trofeu.png" alt="IconHistoria" />
    <h2 className="Number">+4</h2>
  </div>
     <div className="Linha3"></div>
  <div className="Clientes">
     <img className="IconQuant" src="/tesoura.png" alt="IconCortes" />
    <h2 className="Number">+1000</h2>
  </div>
   
     </div>
  <div className="TextosQuant">
      <h2 className="Text">Clientes Sastifeitos.</h2>
      <h2 className="Text">Anos de Tradição.</h2>
      <h2 className="Text">Cortes Realizados.</h2>
      </div>
</div>


</section>

<section className="ContatoSection">
  <div className="TextIcon">

  <h1><strong>FALE</strong>CONOSCO</h1>
  </div>
  <h2 className="SubtituloContato">Entre em contato com a nossa equipe de profissionais.</h2>
  <div className="Linha2"></div>

  <div className="ContatoContent">

  <form className="FormContato">
    <div className="JuntoIcon">
    <img className="FormIconTop" src="/Calendario.png" alt="Calendário" />
    <h2>AGENDAR UM HORARIO</h2>
    </div>


<div className="InputLado">
  <div className="TextInputTop">
    <label>Nome Completo</label>
    <input type="text" placeholder="Digite seu nome" required></input>
</div>
<div className="TextInputTop">
    <label>E-mail</label>
     <input type="email" placeholder="Digite seu email" required></input>
     </div>
</div>
<div className="InputLado">
  <div className="TextInputTop">
     <label>WhatsApp</label>
      <input type="tel" placeholder="(00) 00000-0000" required></input>
</div>
<div className="TextInputTop">
      <label>Serviço</label>
       <input type="text" placeholder="Escolha o serviço" required></input>
       </div>
</div>
       <label>Dia desejado</label>
        <input className="DataInput" type="date" placeholder="Selecione uma Data" required></input>

        <label className="Htext">Horário Desejado</label>
         <select className="Horários">
<option value="" disabled selected>Horário Desejado</option>
<option value="09:00">9:00</option>  <option value="10:00">10:00</option>
<option value="11:00">11:00</option> <option value="12:00">12:00</option>
<option value="14:00">14:00</option> <option value="15:00">15:00</option>
<option value="16:00">16:00</option> <option value="17:00">17:00</option>
<option value="18:00">18:00</option> <option value="19:00">19:00</option>
<option value="20:00">20:00</option>
         </select>
         <label>Observações (Opcional)</label>
         <textarea placeholder="Mensagem (Opcional)"></textarea>
         <button className="BotaoContato" type="submit">Enviar Mensagem</button>
         <h3>Seus dados estão protegidos e serão usados apenas para contato.</h3>
  </form>

  <div className="InfoContato">
    <div className="JuntoIcon2">
     <img className="PinIcon" src="/pin.png" alt="Pin" />
    <h3>R. Nhambiquaras, 152 - Jardim America, Tupã - SP, 17601-150</h3>
</div>
    <div className="Mapa">
   <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3701.0353299141925!2d-50.52566892555306!3d-21.933193203801256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9495b7fdc89d93d5%3A0x6bd4938926a13b2a!2sInvictus%20Barbearia!5e0!3m2!1spt-BR!2sbr!4v1778969686809!5m2!1spt-BR!2sbr"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

<div className="RedesSociais">
  <a href="https://wa.me/5514999999999" target="_blank">
  <img className="Sociais" src="/whatsapp.png" alt="WhatsApp" />
  </a>

  <a href="https://instagram.com/invictusbarbearia" target="_blank">
     <img className="Sociais"  src="/instagram.png" alt="Instagram" />
  </a>

  <a href="https://facebook.com/invictusbarbearia" target="_blank">
    <img className="Sociais"  src="/facebook.png" alt="Facebook" />
  </a>
</div>
    </div>



  </div>

</section>



<section className="HorarioSection">
  <div className="TextIcon">

  <h1 className="TituloHorario">NOSSOS<strong>HORÁRIOS</strong></h1>
  </div>
  <h2 className="SubtituloHorario">Entre em contato com a nossa equipe de profissionais.</h2>
  <div className="Linha2"></div>


<div className="CardsHorario">

  <div className="CardHorario">
  
  </div>
 </div>





</section>

    </main>


    <footer>

    </footer>
     </>
  )
}

export default App
