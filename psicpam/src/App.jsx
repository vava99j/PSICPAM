import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          {/* Substitua pelo caminho correto da sua logo se necessário */}
          <div className="logo-area">
            <span className="logo-p">P</span> 
            <h1>PsicPam</h1>
          </div>
          <button className="nav-btn">Contato</button>
        </div>
      </nav>
    
      <main className="main-content">
        <section id="center" className="hero-section">
          <div className="hero-text">
            <h3>Expanda <br /><span>seus horizontes</span></h3>
            <p>Descubra novos caminhos para o desenvolvimento pessoal e profissional com um acompanhamento dedicado.</p>
            <a href="#services" className="cta-btn">Conhecer Serviços</a>
          </div>
          <div className="hero-image-container">
            <div className="hero-badge">Psi</div>
            {/* Aqui entra a sua imagem hero.png se quiser usar de fundo */}
            <div className="hero-img-placeholder"></div>
          </div>
        </section>

        <section id="services" className="services-section">
          <div className="services-header">
            <h2>Tipos de serviços</h2>
            <div className="line-accent"></div>
          </div>
          
          <div className="services-grid">
            <div className="card" id="career">
              <div className="card-icon">🚀</div>
              <h5>Impulsione sua carreira</h5>
              <p>Orientação estratégica para profissionais que buscam recolocação ou evolução no mercado.</p>
            </div>
            
            <div className="card" id="school">
              <div className="card-icon">🧠</div>
              <h5>Reforço para seu filho</h5>
              <p>Suporte psicopedagógico especializado para potencializar o aprendizado e a confiança.</p>
            </div>
            
            <div className="card" id="familia">
              <div className="card-icon">🏡</div>
              <h5>Plano família</h5>
              <p>Você e seu filho aprendendo e evoluindo juntos em um ambiente de suporte mútuo.</p>
            </div>
          </div>
        </section>
           <p>
        Serviço Web feito por <a href="https://wa.me/5511953051805">Jorge Sites</a>
      </p>  
      </main>
   
    </>
  )
}

export default App